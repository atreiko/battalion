import {
	getSoldiers,
	createSoldier,
	getSoldierById,
	deleteSoldierById,
} from '../../services/soldiers.service';
import {
	SoldierMapper,
	SoldierListItemMapper
} from './soldiers.mapper';

/**
 * @desc Delete soldier by ID
 **/
export const DeleteSoldierByIdController = async (request, response, next) => {
	try {
		const {soldierId} = request.params;
		const soldier = await deleteSoldierById(soldierId);

		if (!soldier) {
			throw new Error('Soldier not found');
		}

		response
			.status(200)
			.json({
				status: true,
				soldier: SoldierMapper(soldier)
			})

	} catch(e) {
		next(e);
	}
}

/**
 * @desc Find soldier by ID
 **/
export const SoldierByIdController = async (request, response, next) => {
	try {
		const {soldierId} = request.params;
		const soldier = await getSoldierById(soldierId);

		if (!soldier) {
			throw new Error('Soldier not found.');
		}

		return response
			.status(200)
			.json({
				status: true,
				soldier: SoldierMapper(soldier)
			})

	} catch (e) {
		next(e)
	}
}

/**
 * @return soldiers list
 **/
export const SoldiersListController = async (request, response, next) => {

	try {
		const {
			offset = 0,
			limit = 10
		} = request.query;

		const soldiers = await getSoldiers({
			offset,
			limit
		});

		response
			.status(200)
			.json({
				status: true,
				soldiers: Array.isArray(soldiers)
					? soldiers
						.map(soldier => SoldierListItemMapper(soldier))
					: []
			})

	} catch (e) {
		next(e)
	}

	response
		.status(200)
		.json({
			success: true,
			data
		})
}

/**
 * @desc Create soldier
 * @param {Object} request
 * @param {Object} response
 * @param {Function} next
 * @return {Promise}
 **/
export const CreateSoldierController = async (request, response, next) => {
	try {
		const {
			title,
			image,
			rank,
		} = request.body;

		const solider = SoldierMapper(
			await createSoldier({
				title,
				image,
				rank,
			})
		);

		return response
			.status(201)
			.json({
				status: true,
				solider
			})

	} catch (e) {
		next(e);
	}
}
