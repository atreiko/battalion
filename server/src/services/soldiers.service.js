import Soldier from '../models/soldier.model';

/**
 * @desc Delete soldier by ID
 **/
export const deleteSoldierById = async id => Soldier.findByIdAndDelete(id)

/**
 * @desc Search soldier by Id
 **/
export const getSoldierById = async id =>
Soldier.findById(id);

/**
 * @desc Retrieve soldiers list
 **/
export const getSoldiers = async ({
									  offset = 0,
									  limit = 10
								  }) => Soldier
	.find({}, null, {
		skip: parseInt(offset),
		limit: parseInt(limit)
	});

/**
 * @desc Create soldier
 * @return {Promise}
 **/
export const createSoldier = async ({title, price, description}) => {
	return Soldier.create({
		title,
		description,
		price
	});
}

