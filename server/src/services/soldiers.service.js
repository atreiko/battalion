import Soldier from '../models/soldier.model'

/**
 * @desc Create product
 * @return {Promise}
 **/
export const createSoldier = async ({
  title, image, rank,
}) => {

  return Soldier.create({
    title,
    image,
    rank,
  })
}

/**
 * @desc Retrieve soldiers list
 **/
export const getSoldiers = async ({
  offset = 0,
  limit = 9
}) => Soldier.find({}, null, {
  skip: parseInt(offset),
  limit: parseInt(limit)
})

/**
 * @desc Search soldier by Id
 **/
export const getSoldierById = async id => Soldier.findById(id)

/**
 * @desc Delete soldier by ID
 **/
export const deleteSoldierById = async id => Soldier.findByIdAndDelete(id)