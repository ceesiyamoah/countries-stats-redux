import countries from '../../apis/countries';
import { GET_COUNTRIES, GET_COUNTRY } from './types';

export const getCountries = () => async (dispatch) => {
	const { data } = await countries.get('/all');
	console.log(data);
	dispatch({ type: GET_COUNTRIES, payload: data });
};

//!not complete
export const getCountry = (name) => async (dispatch) => {
	const { data } = await countries.get('/all');
	dispatch({ type: GET_COUNTRY, payload: data });
};
