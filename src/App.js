import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import CountryDetail from './components/CountryDetail';
import Search from './components/Search';
import { connect } from 'react-redux';
import { getCountries } from './components/actions/index';
import CountriesList from './components/CountriesList';

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
			<BrowserRouter>
				<Header title='Welcome to the Countries Hub' />
				<Route path='/country/:id' exact component={CountryDetail} />
				<Search />
				<CountriesList />
			</BrowserRouter>
		</div>
	);
};
const mapStateToProps = (state) => ({
	countries: state.countries,
});

export default connect(mapStateToProps, { getCountries })(App);
