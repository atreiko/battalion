import { Router } from 'express'
import { 
  CreateValorController, 
  DeleteValorByIdController, 
  ValorByIdController, 
  ValorsListController 
} from './valors.controller'

const route = Router()

export default function(root) {
  root.use('/valors', route)
  route.get('/', ValorsListController)
  route.post('/', CreateValorController)
  route.get('/:valorId', ValorByIdController)
  route.delete('/:valorId', DeleteValorByIdController)
}

