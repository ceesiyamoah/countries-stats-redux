import countries from '../../apis/countries';
import { GET_COUNTRIES, GET_COUNTRY, EDIT_WORD, REMOVE_COUNTRY } from './types';

//* countries actions
export const getCountries = () => async (dispatch) => {
	const response = await countries('/all');
	dispatch({ type: GET_COUNTRIES, payload: response.data });
};

export const getCountry = (code) => async (dispatch) => {
	const { data } = await countries.get(`/alpha/${code}`);
	dispatch({ type: GET_COUNTRY, payload: data });
};

export const removeCountry = () => ({ type: REMOVE_COUNTRY });

//* search term reducer

export const editSearchTerm = (word) => ({ type: EDIT_WORD, payload: word });
