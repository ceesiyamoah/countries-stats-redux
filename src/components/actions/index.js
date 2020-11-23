import countries from '../../apis/countries';
import { GET_COUNTRIES, GET_COUNTRY, EDIT_WORD } from './types';

//* countries actions
export const getCountries = () => async (dispatch) => {
	const response = await countries('/all');
	dispatch({ type: GET_COUNTRIES, payload: response.data });
};

// export const getCountry = (name) => async (dispatch) => {
// 	const { data } = await countries.get('/all');
// 	dispatch({ type: GET_COUNTRY, payload: data });
// };

//* search term reducer

export const editSearchTerm = (word) => ({ type: EDIT_WORD, payload: word });
