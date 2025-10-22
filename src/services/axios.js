import axios from 'axios';

const baseURL = process.env.REACT_APP_BASEURL;

axios.defaults.baseURL = baseURL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },

  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export { axios, token };
