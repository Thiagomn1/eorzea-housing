import Head from 'next/head';
import styles from '../styles/Listings.module.css';
import HousingItem from '../components/HousingItem/HousingItem';

function Listings() {
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
          <HousingItem />
          <HousingItem />
          <HousingItem />
          <HousingItem />
          <HousingItem />
          <HousingItem />
        </ul>
      </section>
    </>
  );
}

export default Listings;
