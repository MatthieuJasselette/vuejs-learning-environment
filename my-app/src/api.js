/* eslint-disable */
import axios from "axios";

export const rootEndPoint = "https://api.punkapi.com/v2/";

export  const getBeers = async (data) => {
    try {
      const response = await axios.get(rootEndPoint+'beers');
      return data = response.data;
    } catch (error) {
      console.error(error);
    }
  }