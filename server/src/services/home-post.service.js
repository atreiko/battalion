import HomePostModel from '../models/home-post.model'

/**
 * @desc Create home-post
 * @return {Promise}
 **/
export const createHomePost = async ({
  title,
  image,
  description,
  path,
}) => {

  return HomePostModel.create({
    title,
    image,
    description,
    path
  })
}

/**
 * @desc Retrieve home-posts list
 **/
export const getHomePosts = async ({
  offset = 0,
  limit = 7
}) => HomePostModel.find({}, null, {
  skip: parseInt(offset),
  limit: parseInt(limit)
})

/**
 * @desc Search soldier by Id
 **/
export const getHomePostById = async id => HomePostModel.findById(id)

/**
 * @desc Delete home-post by ID
 **/
export const deleteHomePostById = async id => HomePostModel.findByIdAndDelete(id)

