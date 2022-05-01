import { Router } from 'express'
import HomeRoute from './home'
import SoldiersRoute from './soldiers'
import ValorRoute from './valor'


export default () => {
  const router = Router()

  HomeRoute(router)
  SoldiersRoute(router)
  ValorRoute(router)

  return router
}

