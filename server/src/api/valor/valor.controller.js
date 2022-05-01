import data from '../../data';

export const ValorListController = (request, response) => {

  response
    .status(200)
    .json({
      success: true,
      data: data.valor
    })
}

