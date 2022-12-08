import { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from '../auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';
import clientPromise from '../../../lib/mongodb';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  const client = await clientPromise;
  const db = client.db('eorzeahousing');

  switch (method) {
    case 'GET':
      try {
        const houses = await db.collection('houses').find().toArray();
        res.status(200).json({ success: true, houses });
      } catch (error) {
        res.status(500).json({ success: false, error });
      }
      break;

    case 'POST':
      try {
        const session = await unstable_getServerSession(req, res, authOptions);

        if (!session) {
          res.status(401).json({ success: false, message: 'Unauthorized' });
        }

        const { name, size, location, image, ward, plot, server } = req.body;

        if (
          !name ||
          !size ||
          !location ||
          !image ||
          !ward ||
          !plot ||
          !server
        ) {
          res.status(400).json({ success: false, message: 'Missing Data' });
        }

        let house = await db.collection('houses').insertOne({
          user: session?.id,
          name,
          size,
          location,
          image,
          ward,
          plot,
          server,
        });

        res.status(201).json({ success: true, data: house });
      } catch (error) {
        res.status(500).json({ success: false, error });
      }
      break;
  }
}
