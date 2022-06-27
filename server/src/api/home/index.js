import { Router } from 'express'
import { 
  HomePostsListController,
  CreateHomePostController,
  HomePostByIdController,
  DeleteHomePostByIdController
} from './home-posts.controller'

const route = Router()

export default function(root) {
  root.use('/', route)
  route.get('/', HomePostsListController)
  route.post('/', CreateHomePostController)
  route.get('/:homePostId', HomePostByIdController)
  route.delete('/:homePostId', DeleteHomePostByIdController)
}