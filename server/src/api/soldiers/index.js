import { Router } from 'express'
import { 
  SoldiersListController, 
  CreateSoldierController,
  SoldierByIdController,
  DeleteSoldierByIdController
} from './soldiers.controller'

const route = Router()

export default function(root) {
  root.use('/soldiers', route)
  route.get('/', SoldiersListController)
  route.post('/', CreateSoldierController)
  route.get('/:soldierId', SoldierByIdController)
  route.delete('/:soldierId', DeleteSoldierByIdController)
}
  

