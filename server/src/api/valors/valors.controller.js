import { 
  createValor, 
  deleteValorById, 
  getValorById, 
  getValors 
} from '../../services/valors.service'

import { 
  ValorMapper, 
  ValorsListItemMapper 
} from './valors.mapper'


/**
 * @return List of valors
 **/
export const ValorsListController = async (request, response, next) => {

  try {
    const { offset, limit } = request.query

    const valors = await getValors({
      offset,
      limit
    })

    response
      .status(200)
      .json({
        status: true,
        valors: Array.isArray(valors)
        ? valors.map(valor => ValorsListItemMapper(valor))
        : []
      })
  } catch (error) {
    next(error)
  }
  response
    .status(200)
    .json({
      success: true,
      data
    })
}

/**
 * @desc Create valor
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 * @return {Promise}
 **/
export const CreateValorController = async (request, response, next) => {

  try {
    const { title, rank, image, description, rip} = request.body

    const valor = ValorMapper(
      await createValor({
        title,
        rank,
        image,
        description,
        rip
      })
    )

    return response
      .status(201)
      .json({
        status: true,
        valor
      })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc Find valor by ID
 **/
export const ValorByIdController = async (request, response, next) => {

  try {
    const { valorId } = request.params
    const valor = await getValorById(valorId)

    if (!valor) {
      throw new Error('Valor not found.')
    }

    return response
      .status(200)
      .json({
        status: true,
        valor: ValorMapper(valor)
      })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc Delete valor by ID
 **/
export const DeleteValorByIdController = async (request, response, next) => {

  try {
    const { valorId } = request.params
    const valor = await deleteValorById(valorId)

    if (!valor) {
      throw new Error('Valor not found.')
    }

    response
      .status(200)
      .json({
        status: true,
        valor: ValorMapper(valor)
      })
  } catch (error) {
    next(error)
  }
}