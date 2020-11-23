import React, { useEffect } from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './components/Header';
import CountryDetails from './components/CountryDetails';
import Search from './components/Search';
import { connect } from 'react-redux';
import { getCountries } from './components/actions/index';
import CountriesList from './components/CountriesList';
import history from './history';

const App = ({ countries, getCountries }) => {
	useEffect(() => {
		getCountries();
	}, [getCountries]);
	if (!countries) {
		return (
			<div className='ui segment'>
				<div className='ui active inverted dimmer'>
					<div className='ui text loader'>Loading</div>
				</div>
				<p></p>
			</div>
		);
	}
	return (
		<div className='ui conatiner'>
			<Router history={history}>
				<Header title='Welcome to the Countries Hub' />
				<Search />
				<Route path='/country/:id' exact component={CountryDetails} />
				<Route path='/' exact component={CountriesList} />
			</Router>
		</div>
	);
};
const mapStateToProps = (state) => ({
	countries: state.countries,
});

export default connect(mapStateToProps, { getCountries })(App);
