import HomePost from '../models/home-post.model'

/**
 * @desc Create home-post
 * @return {Promise}
 **/
export const createHomePost = async ({
  title, image, description, path,
}) => {

  return HomePost.create({
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
}) => HomePost.find({}, null, {
  skip: parseInt(offset),
  limit: parseInt(limit)
})

/**
 * @desc Search soldier by Id
 **/
export const getHomePostById = async id => HomePost.findById(id)

/**
 * @desc Delete home-post by ID
 **/
export const deleteHomePostById = async id => HomePost.findByIdAndDelete(id)


