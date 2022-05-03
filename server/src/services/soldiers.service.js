import SoldierModel from "../models/soldier.model"

export const CreateSoldier = async ({
  title,
  image,
  description,
  path,
}) => {
  const soldier = await SoldierModel.create({
    title,
    image,
    description,
    path,
  })

  return {
    soldier: soldier
  }
}