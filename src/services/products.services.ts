import axios from 'axios';

const api = axios.create({
  baseURL: '/',
});

const getProductsService = async () => {
  const { data } = await axios.get('zapato.json');
  return data;
};

export { getProductsService };
