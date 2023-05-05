import axios from 'axios';

const API_URL = '"localhost:8080/api/gestiones/"';

export const getGestiones = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};