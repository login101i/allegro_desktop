import axios from 'axios';

export const userCart = async cart => await axios.post(`/api/v1/user/cart`, { cart });

export const getUserCart = async () => await axios.get(`/api/v1/user/cart`);

