import SoldierModel from "../models/soldier.model"

/**
 * @desc Create product
 * @return {Promise}
 **/
export const createSoldier = async ({
  title, image, rank,
}) => {
  return SoldierModel.create({
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
}) => SoldierModel.find({}, null, {
  skip: parseInt(offset),
  limit: parseInt(limit)
})

/**
 * @desc Search soldier by Id
 **/
export const getSoldierById = async id => SoldierModel.findById(id)

/**
 * @desc Delete soldier by ID
 **/
export const deleteSoldierById = async id => SoldierModel.findByIdAndDelete(id)