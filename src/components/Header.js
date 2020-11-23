import React from 'react';
import { connect } from 'react-redux';

const Header = ({ number, title }) => {
	return (
		<div className='ui header centered'>
			<h1>{title}</h1>
			<h3>There are {number} countries</h3>
		</div>
	);
};
const mapStateToProps = (state) => {
	return { number: state.countries.length };
};

export default connect(mapStateToProps)(Header);
