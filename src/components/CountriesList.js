import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import blank from '../svg/blank.svg';

const CountryList = ({ countries }) => {
	const countriesRender = countries.map(
		({
			flag,
			name,
			capital,
			population,
			currencies,
			languages,
			alpha2Code,
		}) => (
			<div className='four wide column' style={{ marginLeft: '' }} key={name}>
				<div className='ui card'>
					<div className='content'>
						<div className='center aligned header'>
							<img
								className='ui small image'
								width='150'
								height='100'
								src={flag}
								alt={name}
							/>
						</div>
						<div className='center aligned description'>
							<p>
								<b>Name: </b>
								{name}
							</p>
							<p>
								<b>Population: </b>
								{population.toLocaleString('en')}
							</p>
							<p>
								<b>Capital: </b>
								{capital}
							</p>
							<p>
								<b>Currencies: </b>
								{currencies.map((currency) => currency.name).join(',')}
							</p>
							<p>
								<b>Languages: </b>
								{languages.map((lang) => lang.name).join(',')}
							</p>
							<Link to={`country/${alpha2Code}`} className='ui button primary'>
								Learn more
							</Link>
						</div>
					</div>
				</div>
			</div>
		)
	);
	if (countries.length !== 0) {
		return (
			<div className='ui centered grid' style={{ margin: 'auto' }}>
				{countriesRender}
			</div>
		);
	} else {
		return (
			<div style={{ display: 'flex', justifyContent: 'center' }}>
				<img
					src={blank}
					alt='No results'
					width='500'
					height='500'
					style={{ margin: 'auto' }}
				/>
			</div>
		);
	}
};

//TODO returns 'englis' as 0 (no record found)
const mapStateToProps = (state) => ({
	countries: state.countries.filter(
		(country) =>
			country.name
				.toLowerCase()
				.includes(state.searchTerm.term.toLowerCase()) ||
			country.capital
				.toLowerCase()
				.includes(state.searchTerm.term.toLowerCase()) ||
			country.languages
				.map((language) => language.name.toLowerCase())
				.includes(state.searchTerm.term.toLowerCase())
	),
});

export default connect(mapStateToProps, {})(CountryList);
