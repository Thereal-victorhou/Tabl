import { csrfFetch } from './csrf';
// Type
const GET_RESTAURANTS = 'restaurants/GET_RESTAURANTS';

const GET_RESTAURANTS_RESULTS = 'restaurants/GET_RESTAURANTS_RESULTS';

const GET_ONE_RESTAURANT = 'restaurant/GET_ONE_RESTAURANT';

const ADD_NEW_RESTAURANT = 'addrestaurant/ADD_NEW_RESTAURANT';

const EDIT_EXISTING_RESTAURANT = 'editrestaurant/EDIT_EXISTING';

const DELETE_RESTAURANT = 'deleterestaurant/DELETE_RESTAURANT';

// Actions
const getRestaurants = (restaurants) => {
	return {
		type: GET_RESTAURANTS,
		restaurants,
	};
};

const getRestaurantsBasedOnInput = (restaurants) => {
	return {
		type: GET_RESTAURANTS_RESULTS,
		restaurants,
	};
};

const getOneRestaurant = (restaurant) => {
	return {
		type: GET_ONE_RESTAURANT,
		restaurant,
	};
};

const addRestaurant = (restaurants) => ({
	type: ADD_NEW_RESTAURANT,
	restaurants,
});

const editExistingRestaurant = (restaurant) => ({
	type: EDIT_EXISTING_RESTAURANT,
	restaurant,
});

const deleteOneRestaurant = (restaurantId) => ({
	type: DELETE_RESTAURANT,
	restaurantId,
});

// Thunk Action
export const allRestaurants = () => async (dispatch) => {
	const res = await csrfFetch('/api/restaurants');
	const data = await res.json();

	dispatch(getRestaurants(data));
};

export const getRestaurantResults = (searchObj) => async (dispatch) => {
	const { searchInput, locationObj } = searchObj;
	console.log('SEARCH INPUT............. ', searchInput);
	console.log('LOCATIONOBJ............. ', locationObj);

	// try {
	// 	const res = await csrfFetch(
	// 		`/api/restaurants/search?find_desc=${searchInput}&find_loc=${
	// 			locationObj.location && locationObj.location
	// 		}`,
	// 		{
	// 			method: 'POST',
	// 			headers: { 'Content-Type': 'application/json' },
	// 			body: JSON.stringify({ ...locationObj }),
	// 		}
	// 	);

	// 	const restaurants = await res.json();
	// 	dispatch(getRestaurantsBasedOnInput(restaurants));
	// } catch (err) {
	// 	console.log(err);
	// }
};

export const getNearByRestaurants = (locationObj) => async (dispatch) => {
	const res = await csrfFetch('/api/restaurants/nearby', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ ...locationObj }),
	});

	try {
		const message = await res.json();
		console.log(message);
	} catch (err) {
		console.log(err.message);
	}
};

export const oneRestaurant = (restaurant) => async (dispatch) => {
	const res = await fetch(`/api/restaurants/${restaurant}`);
	const oneRes = await res.json();
	console.log(oneRes)

	dispatch(getOneRestaurant(oneRes));
};

export const newRestaurant = (newRestaurant) => async (dispatch) => {
	const { name, location, phoneNumber, imgSrc, userId } = newRestaurant;
	const res = await csrfFetch('/api/restaurants/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name,
			location,
			phoneNumber,
			imgSrc,
			userId,
		}),
	});
	const restaurants = await res.json();
	dispatch(addRestaurant(restaurants));
};

export const editRestaurant = (restaurantObj) => async (dispatch) => {
	const { name, location, phoneNumber, imgSrc, restaurantId } = restaurantObj;
	const res = await csrfFetch(`/api/restaurants/${restaurantId}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			name,
			location,
			phoneNumber,
			imgSrc,
			restaurantId,
		}),
	});
	const restaurant = await res.json();

	dispatch(editExistingRestaurant(restaurant));
};

export const deleteRestaurant = (restaurantId) => async (dispatch) => {
	const res = await csrfFetch(`/api/restaurants/${restaurantId}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
	});
	const restId = await res.json();

	dispatch(deleteOneRestaurant(restId));
};

// Reducer
const restaurantReducer = (state = {}, action) => {
	let newState;
	switch (action.type) {
		case GET_RESTAURANTS:
			newState = { ...state, ...action.restaurants };
			// action.restaurants.forEach(restaurant => {
			//     newState[restaurant.id] = restaurant;
			// })
			return newState;

		case GET_RESTAURANTS_RESULTS:
			newState = { ...state, ...action.restaurants };
			return newState;

		case GET_ONE_RESTAURANT:
			return {
				[action.restaurant.id]: action.restaurant,
			};

		case ADD_NEW_RESTAURANT:
			return {
				...state,
				[action.restaurant.id]: action.restaurant,
			};
		case EDIT_EXISTING_RESTAURANT:
			return {
				[action.restaurant.id]: action.restaurant,
			};
		case DELETE_RESTAURANT:
			newState = { ...state };
			delete newState[action.restaurantId];
			return newState;
		default:
			return state;
	}
};

export default restaurantReducer;
