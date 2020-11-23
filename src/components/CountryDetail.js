import React from 'react';
import { connect } from 'react-redux';

const CountryDetail = ({ countries }) => {
	return <div>{countries}</div>;
};

const mapStateToProps = (state) => ({
	countries: state.countries.filter(
		(country) =>
			country.name.includes(state.searchTerm.term) ||
			country.capital.includes(state.searchTerm.term) ||
			country.languages
				.map((language) => language.name)
				.includes(state.searchTerm.term)
	),
});

export default connect(mapStateToProps, {})(CountryDetail);
