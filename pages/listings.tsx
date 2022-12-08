import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getAllListings } from '../lib/postListing';
import { House } from '../types/types';
import styles from '../styles/Listings.module.css';
import HousingItem from '../components/HousingItem/HousingItem';

interface Houses {
  houses: House[];
}

function Listings({ houses }: Houses) {
  return (
    <>
      <Head>
        <title>Eorzea Housing - Listings</title>
        <meta name="description" content="Eorzea Housing" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <section className={styles.galleryWrapper}>
        <h2 className="title">Listings</h2>
        <ul className="image-gallery">
          {houses &&
            houses.length &&
            houses.map((listing: House) => (
              <HousingItem key={listing._id} listing={listing} />
            ))}
        </ul>
      </section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const allListingsData = await getAllListings();
  const houses = allListingsData.houses;

  if (!houses) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      houses,
    },
  };
};

export default Listings;
