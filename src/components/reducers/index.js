import { combineReducers } from 'redux';
import { GET_COUNTRIES, GET_COUNTRY } from './../actions/types';

const countriesReducer = (state = [], { type, payload }) => {
	switch (type) {
		case GET_COUNTRIES:
			return { ...state, ...payload };

		case GET_COUNTRY:
			return { ...state, ...payload };

		default:
			return state;
	}
};

export default combineReducers({ countries: countriesReducer });
