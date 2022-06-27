import { 
  createHomePost, 
  deleteHomePostById, 
  getHomePostById, 
  getHomePosts 
} from '../../services/home-posts.service';

import { 
  HomePostMapper, 
  HomePostsListMapper 
} from './home-posts.mapper';

/**
 * @return List of home-posts
 **/
export const HomePostsListController = async (request, response, next) => {

  try {
    const { offset, limit } = request.query

    const homePosts = await getHomePosts({
      offset,
      limit
    })

    return response
      .status(200)
      .json({
        status: true,
        data: Array.isArray(homePosts)
        ? homePosts.map(post => HomePostsListMapper(post))
        : []
      })
  } catch (error) {
    next(error)
  }
  
	return response
		.status(200)
		.json({
			success: true,
			data
		});
}

/**
 * @desc Create home-post
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 * @return {Promise}
 **/
export const CreateHomePostController = async (request, response, next) => {

  try {
    const {
      title,
      description,
      image,
      path
    } = request.body

    const homePost = HomePostMapper(
      await createHomePost({
        title,
        description,
        image,
        path
      })
    )

    return response
    .status(201)
    .json({
      status: true,
      homePost
    })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc Find home-post by ID
 **/
export const HomePostByIdController = async (request, response, next) => {

  try {
    const { homePostId } = request.params
    const homePost = await getHomePostById(homePostId)

    if (!homePost) {
      throw new Error('Home post not found.')
    }

    return response
      .status(200)
      .json({
        status: true,
        homePost: HomePostMapper(homePost)
      })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc Delete home-post  by ID
 **/
export const DeleteHomePostByIdController = async (request, response, next) => {

  try {
    const { homePostId } = request.params
    const homePost = await deleteHomePostById(homePostId)

    if (!homePost) {
      throw new Error('Home post not found.')
    }

    return response
      .status(200)
      .json({
        status: true,
        homePost: HomePostMapper(homePost)
      })
  } catch (error) {
    next(error)
  }
}
