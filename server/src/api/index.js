import { Router } from 'express'
import HomeRoute from './home'
import SoldiersRoute from './soldiers'
import ValorRoute from './valors'


export default () => {
  const router = Router()

  HomeRoute(router)
  SoldiersRoute(router)
  ValorRoute(router)

  return router
}

