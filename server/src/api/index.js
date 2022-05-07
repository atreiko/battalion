import { Router } from 'express'
import HomeRoute from './home'
import SoldiersRoute from './soldiers'
import ValorsRoute from './valors'

export default () => {
  const router = Router()

  HomeRoute(router)
  SoldiersRoute(router)
  ValorsRoute(router)

  return router
}
