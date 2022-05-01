import axios from 'axios'

export default class PostService {

  static async getHomePosts() {
    const response = await axios.get('/api')
    return response.data
  }

  static async getSoldiersPosts() {
    const response = await axios.get('/api/soldiers')
    console.log(response.data);
    return response.data
  }

  static async getValorPosts() {
    const response = await axios.get('/api/valor')
    return response.data
  }

  static async getPhotoPosts() {
    const response = await axios.get('/api/photos')
    return response.data
  }
}

