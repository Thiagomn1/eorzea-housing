import Head from 'next/head';
import styles from '../styles/Home.module.css';
import HousingItem from '../components/HousingItem/HousingItem';

function Home() {
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
      <section>
        <h2 className="title">Whats popular</h2>
        <ul className="image-gallery">
          <HousingItem />
          <HousingItem />
          <HousingItem />
          <HousingItem />
        </ul>
      </section>
      <section>
        <h2 className="title">Recent Listings</h2>
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

export default Home;
