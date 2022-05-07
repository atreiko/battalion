import { addCreationAndUpdatingDate } from "../../utils/entities";

export const HomePostsListMapper = post => ({
  id: post._id,
  title: post.title,
  image: post.image,
  description: post.description,
  path: post.path
})

export const HomePostMapper = post => ({
  id: post._id,
  title: post.title,
  image: post.image,
  description: post.description,
  path: post.path,
  ...addCreationAndUpdatingDate(post)
})