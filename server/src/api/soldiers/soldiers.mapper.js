import { addCreationAndUpdatingDate } from '../../utils/entities';

export const SoldiersListItemMapper = soldier => ({
  id: soldier._id,
  title: soldier.title,
  image: soldier.image,
  rank: soldier.rank
})

export const SoldierMapper = soldier => ({
  id: soldier._id,
  title: soldier.title,
  image: soldier.image,
  rank: soldier.rank,
  ...addCreationAndUpdatingDate(soldier)
})
