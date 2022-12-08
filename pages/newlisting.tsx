import Head from 'next/head';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import { getSession } from 'next-auth/react';
import { postListing } from '../lib/postListing';
import { useRouter } from 'next/router';

import styles from '../styles/Newlisting.module.css';

function NewListing() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [server, setServer] = useState('');
  const [image, setImage] = useState('');
  const [ward, setWard] = useState(0);
  const [plot, setPlot] = useState(0);
  const [selectedRadioSize, setSelectedRadioSize] = useState('Small');
  const [selectedRadioLocation, setSelectedRadioLocation] = useState('Mist');

  const isSizeSelected = (value: string): boolean =>
    selectedRadioSize === value;

  const isLocationSelected = (value: string): boolean =>
    selectedRadioLocation === value;

  const handleSizeClick = (event: React.ChangeEvent<HTMLInputElement>): void =>
    setSelectedRadioSize(event.currentTarget.value);

  const handleLocationClick = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => setSelectedRadioLocation(event.currentTarget.value);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const listingData = {
      name: title,
      server,
      image,
      ward,
      plot,
      size: selectedRadioSize,
      location: selectedRadioLocation,
    };

    const response = await postListing(listingData);

    if (response.success) {
      router.push(`/houses/${response.data.insertedId}`);
    }
  };

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

      <form onSubmit={handleSubmit}>
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
            <span className="required">* </span> Server:
          </label>
          <input
            type="text"
            name="title"
            value={server}
            id="title"
            className="form-input"
            onChange={(event) => setServer(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="title" className="form-text">
            <span className="required">* </span> Size:
          </label>
          <div className={styles.radioContainer}>
            <div className={styles.radioMargin}>
              <input
                type="radio"
                id="radio-button"
                value="Small"
                name="radio-size"
                checked={isSizeSelected('Small')}
                onChange={handleSizeClick}
              />
              <label className="radio-label" htmlFor="radio-button">
                Small
              </label>
            </div>

            <div className={styles.radioMargin}>
              <input
                type="radio"
                id="radio-button"
                value="Medium"
                name="radio-size"
                checked={isSizeSelected('Medium')}
                onChange={handleSizeClick}
              />
              <label className="radio-label" htmlFor="radio-button">
                Medium
              </label>
            </div>

            <div className={styles.radioMargin}>
              <input
                type="radio"
                id="radio-button"
                value="Large"
                name="radio-size"
                checked={isSizeSelected('Large')}
                onChange={handleSizeClick}
              />
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
              <input
                type="radio"
                id="radio-button"
                value="Mist"
                name="radio-location"
                checked={isLocationSelected('Mist')}
                onChange={handleLocationClick}
              />
              <label className="radio-label" htmlFor="radio-button">
                Mist
              </label>
            </div>

            <div className={styles.radioMargin}>
              <input
                type="radio"
                id="radio-button"
                value="Lavender Beds"
                name="radio-location"
                checked={isLocationSelected('Lavender Beds')}
                onChange={handleLocationClick}
              />
              <label className="radio-label" htmlFor="radio-button">
                Lavender Beds
              </label>
            </div>

            <div className={styles.radioMargin}>
              <input
                type="radio"
                id="radio-button"
                value="The Goblet"
                name="radio-location"
                checked={isLocationSelected('The Goblet')}
                onChange={handleLocationClick}
              />
              <label className="radio-label" htmlFor="radio-button">
                The Goblet
              </label>
            </div>

            <div className={styles.radioMargin}>
              <input
                type="radio"
                id="radio-button"
                value="Shirogane"
                name="radio-location"
                checked={isLocationSelected('Shirogane')}
                onChange={handleLocationClick}
              />
              <label className="radio-label" htmlFor="radio-button">
                Shirogane
              </label>
            </div>

            <div>
              <input
                type="radio"
                id="radio-button"
                value="Empyreum"
                name="radio-location"
                checked={isLocationSelected('Empyreum')}
                onChange={handleLocationClick}
              />
              <label className="radio-label" htmlFor="radio-button">
                Empyreum
              </label>
            </div>
          </div>
        </div>

        <div className="form-container">
          <label htmlFor="ward" className="form-textNumber">
            Ward:
          </label>
          <input
            type="number"
            name="ward"
            value={ward}
            id="ward"
            className="form-input"
            max={24}
            min={0}
            onChange={(event) => setWard(parseInt(event.target.value))}
          />

          <label htmlFor="ward" className="form-textNumber">
            Plot:
          </label>
          <input
            type="number"
            name="plot"
            value={plot}
            id="plot"
            className="form-input"
            max={50}
            min={0}
            onChange={(event) => setPlot(parseInt(event.target.value))}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title" className="form-text">
            <span className="required">* </span> House Image:
          </label>
          <input
            type="text"
            name="title"
            value={image}
            id="title"
            className="form-input"
            onChange={(event) => setImage(event.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit" className={`btn-outline ${styles.btnPadding}`}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};

export default NewListing;
