import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 8hXXkPi2GP4n6EgjnX7V4zzjjVAl_txe1JghP7IKTn0',
  },
});
