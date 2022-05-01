import data from '../../data';

export const SoldiersListController = (request, response) => {

  response
    .status(200)
    .json({
      success: true,
      data: data.soldiers
    })
}
