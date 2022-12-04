import Axios from 'axios';

const apiHost = 'localhost:3008'

const api = Axios.create({
    baseURL: `//${apiHost}/api/`,
    json: true,
});

export async function axios(config) {
  return await new Promise((resolve, reject) => {
    Axios(config).then(function (response) {
        resolve(response)
      })
      .catch(function (error) {
        reject(error);
      });

  })
}

export default api