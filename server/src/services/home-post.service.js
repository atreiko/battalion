import HomePost from '../models/home-post.model'

export const CreatePost = async ({
  title,
  image,
  description,
  path,
}) => {

  const homePost = await HomePost.create({
    title,
    image,
    description,
    path,
  })

  return {
    homePost: homePost
  }
}