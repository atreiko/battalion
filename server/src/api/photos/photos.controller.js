import { 
  getPhotos,
  createPhoto, 
  getPhotoById, 
  deletePhotoById
} from '../../services/photos.service'
import { 
  PhotosListItemMapper,
  PhotoMapper
} from './photos.mapper'

/**
 * @return list of photos
 */
export const PhotosListController = async (request, response, next) => {

  try {
    const { offset, limit } = request.query

    const photos = await getPhotos({
      offset,
      limit
    })

    return response
      .status(200)
      .json({
        status: true,
        data: Array.isArray(photos)
          ? photos.map(photo => PhotosListItemMapper(photo))
          : []
      })

  } catch (error) {
    next(error)
  }

  return response
  .status(200)
  .json({
    success: true,
    data
  })
}

/**
 * @desc Create photo
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 * @return {Promise}
 **/
export const CreatePhotoController = async (request, response, next) => {

  try {
    const { title, image } = request.body

    const photo = PhotoMapper(
      await createPhoto({
        title,
        image
      })
    )

    return response
      .status(201)
      .json({
        status: true,
        photo
      })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc Find photo by ID
 **/
export const PhotoByIdController = async (request, response, next) => {
  try {
    const { photoId } = request.params
    const photo = await getPhotoById(photoId)

    if (!photo) {
      throw new Error('Photo not found.')
    }

    return response
      .status(200)
      .json({
        status: true,
        photo: PhotoMapper(photo)
      })
  } catch (error) {
    next(error)
  }
}

/**
 * @desc Delete photo by ID
 **/
export const DeletePhotoByIdController = async(request, response, next) => {

  try {
    const { photoId } = request.params
    const photo = deletePhotoById(photoId)

    if (!photo) {
      throw new Error('Photo not found.')
    }

    return response
      .status(200)
      .json({
        status: true,
        photo: PhotoMapper(photo)
      })
  } catch (error) {
    next(error)
  }
}