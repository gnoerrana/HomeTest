/*
* @Author: Gilang
* @Date:   2022-02-13 11:37:44
* @Last Modified by:   Gilang
* @Last Modified time: 2022-02-13 22:40:14
*/

import axios from 'axios';

const apiClient = axios.create({
  baseURL: `https://picsum.photos`,
});
apiClient.interceptors.request.use(
  (config) => {
    return {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        ...config.headers,
        ...(JSON.parse(localStorage.getItem('request-headers')) || {}),
      },
    };
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => Promise.resolve(response),
  async (error) => Promise.reject(error)
);

const { get, post, put, patch, delete: destroy } = apiClient;
export { get, post, put, patch, destroy };
