import { Router } from 'express'
import HomeRoute from './home'
import SoldiersRoute from './soldiers'
import ValorsRoute from './valors'
import PhotosRoute from './photos'

export default () => {
  const router = Router()

  HomeRoute(router)
  SoldiersRoute(router)
  ValorsRoute(router)
  PhotosRoute(router)
  
  return router
}
