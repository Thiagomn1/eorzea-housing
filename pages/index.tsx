import Head from 'next/head';
import { GetServerSideProps } from 'next';
import styles from '../styles/Home.module.css';
import HousingItem from '../components/HousingItem/HousingItem';
import { getAllListings } from '../lib/postListing';
import { House } from '../types/types';

interface Houses {
  houses: House[];
}

function Home({ houses }: Houses) {
  return (
    <>
      <Head>
        <title>Eorzea Housing</title>
        <meta name="description" content="Eorzea Housing" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <div className={styles.hero}>
        <header className={styles.heroWrapper}>
          <h1 className={styles.heading}>
            Eorzea <br /> <span>Housing</span>
          </h1>
        </header>
      </div>
      {/* <section>
        <h2 className="title">Whats popular</h2>
        <ul className="image-gallery">
          <HousingItem />
          <HousingItem />
          <HousingItem />
          <HousingItem />
        </ul>
      </section> */}
      <section>
        <h2 className="title">Recent Listings</h2>
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

export default Home;
