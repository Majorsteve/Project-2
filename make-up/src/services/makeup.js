import axios from 'axios';

const URL = 'http://makeup-api.herokuapp.com/api/v1/products.json'

const api = axios.create({
  baseURL: URL,
});

export const fetchBlush = async () => {
const resp = await api.get(`?product_type=blush`)
  return resp.data;
}
export const fetchBronzer = async () => {
const resp = await api.get(`?product_type=bronzer`)
  return resp.data;
}
export const fetchEyebrow = async () => {
const resp = await api.get(`?product_type=eyebrow`)
  return resp.data;
}
export const fetchEyeliner = async () => {
const resp = await api.get(`?product_type=eyeliner`)
  return resp.data;
}
export const fetchEyeshadow = async () => {
const resp = await api.get(`?product_type=eyeshadow`)
  return resp.data;
}
export const fetchFoundation = async () => {
const resp = await api.get(`?product_type=foundation`)
  return resp.data;
}
export const fetchLipstick = async () => {
  const resp = await api.get(`?product_type=lipstick`)
  return resp.data;
}
export const fetchMascara = async () => {
  const resp = await api.get(`?product_type=mascara`)
  return resp.data;
}

  