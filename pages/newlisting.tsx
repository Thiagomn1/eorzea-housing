import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Newlisting.module.css';

function NewListing() {
  const [title, setTitle] = useState('');

  return (
    <>
      <Head>
        <title>Eorzea Housing - New Listing</title>
        <meta name="description" content="Eorzea Housing" />
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <div className={styles.title}>
        <h2 className="title">New Listing</h2>
      </div>

      <form>
        <div className="form-group">
          <label htmlFor="title" className="form-text">
            <span className="required">* </span> House Name:
          </label>
          <input
            type="text"
            name="title"
            value={title}
            id="title"
            className="form-input"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="title" className="form-text">
            <span className="required">* </span> Size:
          </label>
          <div className={styles.radioContainer}>
            <div className={styles.radioMargin}>
              <input type="radio" id="radio-button" />
              <label className="radio-label" htmlFor="radio-button">
                Small
              </label>
            </div>

            <div className={styles.radioMargin}>
              <input type="radio" id="radio-button" />
              <label className="radio-label" htmlFor="radio-button">
                Medium
              </label>
            </div>

            <div className={styles.radioMargin}>
              <input type="radio" id="radio-button" />
              <label className="radio-label" htmlFor="radio-button">
                Large
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="title" className="form-text">
            <span className="required">* </span> Location:
          </label>
          <div className={styles.radioContainer}>
            <div className={styles.radioMargin}>
              <input type="radio" id="radio-button" />
              <label className="radio-label" htmlFor="radio-button">
                Mist
              </label>
            </div>

            <div className={styles.radioMargin}>
              <input type="radio" id="radio-button" />
              <label className="radio-label" htmlFor="radio-button">
                Lavender Beds
              </label>
            </div>

            <div className={styles.radioMargin}>
              <input type="radio" id="radio-button" />
              <label className="radio-label" htmlFor="radio-button">
                The Goblet
              </label>
            </div>

            <div className={styles.radioMargin}>
              <input type="radio" id="radio-button" />
              <label className="radio-label" htmlFor="radio-button">
                Shirogane
              </label>
            </div>

            <div>
              <input type="radio" id="radio-button" />
              <label className="radio-label" htmlFor="radio-button">
                Empyreum
              </label>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default NewListing;
