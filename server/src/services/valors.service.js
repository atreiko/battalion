import ValorModel from '../models/valors.model'

export const CreateValor = async ({
  title,
  image,
  description,
  path,
}) => {

  const valor = await ValorModel.create({
    title,
    image,
    description,
    path,
  })

  return {
    valor: valor
  }
}