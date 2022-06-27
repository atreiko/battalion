import { Router } from 'express'
import { 
  PhotosListController,
  CreatePhotoController, 
  PhotoByIdController,
  DeletePhotoByIdController
} from './photos.controller'

const route = Router()

export default function(root) {
  root.use('/photos', route)
  route.get('/', PhotosListController)
  route.post('/', CreatePhotoController)
  route.get('/:photoId', PhotoByIdController)
  route.delete('/:photoId', DeletePhotoByIdController)
}