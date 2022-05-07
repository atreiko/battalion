import axios from 'axios'

export default class PostService {

  static async getHomePosts() {
    const response = await axios.get('/api')
    return response.data
  }

  static async getSoldiersPosts() {
    const response = await axios.get('/api/soldiers')
    return response.data
  }

  static async getValorPosts() {
    const response = await axios.get('/api/valors')
    return response.data
  }

  static async getPhotoPosts() {
    const response = await axios.get('/api/photos')
    return response.data
  }
}


