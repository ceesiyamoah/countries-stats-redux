import { combineReducers } from 'redux';
import { GET_COUNTRIES, GET_COUNTRY, EDIT_WORD } from './../actions/types';

const countriesReducer = (state = [], { type, payload }) => {
	switch (type) {
		case GET_COUNTRIES:
			return [...payload];

		case GET_COUNTRY:
			return [...state, ...payload];

		default:
			return state;
	}
};

const searchTermReducer = (state = { term: '' }, { type, payload }) => {
	switch (type) {
		case EDIT_WORD:
			return { term: payload };

		default:
			return state;
	}
};

export default combineReducers({
	countries: countriesReducer,
	searchTerm: searchTermReducer,
});
