import Valor from '../models/valor.model'

/**
 * @desc Create product
 * @return {Promise}
 **/
export const createValor = async ({
  title, image, description, rank, rip
}) => {

  return Valor.create({
    title,
    image,
    description,
    rank,
    rip
  })
}

/**
 * @desc Retrieve valors list
 **/
export const getValors = async ({
  offset = 0,
  limit = 9
}) => Valor.find({}, null, {
  skip: parseInt(offset),
  limit: parseInt(limit)
})

/**
 * @desc Search valor by Id
 **/
export const getValorById = async id => Valor.findById(id)

/**
 * @desc Delete valor by ID
 **/
export const deleteValorById = async id => Valor.findByIdAndDelete(id)