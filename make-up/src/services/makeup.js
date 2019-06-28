import axios from 'axios';

const URL = 'http://makeup-api.herokuapp.com/api/v1/products.json?'

const api = axios.create({
  baseURL: URL,
});

export const fetchBrand = async () => {
  const resp = await api.get('brand=maybelline')
  return resp.data;
}