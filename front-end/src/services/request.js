import api from './api'
import { axios } from './api'

export default {
  async create(route, data) {
    const token = localStorage.getItem('auth_token');
    return api.post(route, { ...data }, {
      headers: {
        'Authorization': `Basic ${token}` 
      }}
    )
},
  async list(route){
    return api.get(route)
  },


  async imageUpload(img) {
    const formData = new FormData()
    formData.append('image', img)

    const config = {
      method: 'POST',
      url: 'https://api.imgur.com/3/image',
      headers: {
        Authorization: `Client-ID 176d1f52506c4a2`,
        'Content-Type': 'multipart/form-data',
      },
      data: formData
    };
    const result = await axios(config)
    return result.data.data.link
  },
}