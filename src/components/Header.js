import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCountries } from './actions/index';

const Header = ({ number }) => {
	console.log(number);
	useEffect(() => {
		getCountries();
	}, []);

	return <h1 className='ui header'>{number}</h1>;
};
const mapStateToProps = (state) => ({
	number: state.countries.length,
});

export default connect(mapStateToProps, { getCountries })(Header);
