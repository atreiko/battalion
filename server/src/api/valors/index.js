import { Router } from 'express'
import { ValorListController } from './valors.controller'

const route = Router()

export default function(root) {
  root.use('/valor', route)
  route.get('/', ValorListController)
}