import { addCreationAndUpdatingDate } from '../../utils/entities';

export const PhotosListItemMapper = photo => ({
  id: photo._id,
  title: photo.title,
  image: photo.image,
})

export const PhotoMapper = photo => ({
  id: photo._id,
  title: photo.title,
  image: photo.image,
  ...addCreationAndUpdatingDate(photo)
})
