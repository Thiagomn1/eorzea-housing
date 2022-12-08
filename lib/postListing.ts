import axios from 'axios';

export const getAllListings = async () => {
  try {
    const options = {
      method: 'GET',
    };
    const response = await fetch('http://localhost:3000/api/houses', options);
    const houses = await response.json();
    return houses;
  } catch (err: any) {
    return err.message;
  }
};

export const postListing = async (listingData: any) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/api/houses',
      listingData
    );

    return response.data;
  } catch (err: any) {
    return err.message;
  }
};
