import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { getCountry, removeCountry } from './actions/index';
import history from '../history';

const CountryDetail = ({ match, country, getCountry }) => {
	useEffect(() => {
		getCountry(match.params.id);
	}, [getCountry, match.params.id]);

	const onDismiss = () => {
		history.push('/');
		removeCountry();
	};

	return createPortal(
		<div className='ui dimmer modals visible active' onClick={onDismiss}>
			<div
				className='ui standard modal visible active'
				onClick={(e) => e.stopPropagation()}
			>
				{country && (
					<>
						<div
							className='center aligned header'
							style={{ display: 'flex', justifyContent: 'center' }}
						>
							<img
								className='ui small image'
								width='150'
								height='100'
								src={country.flag}
								alt={country.name}
							/>
						</div>
						<div
							className='center aligned description'
							style={{
								textAlign: 'center',
							}}
						>
							<p>
								<b>Name: </b>
								{country.name}
							</p>
							<p>
								<b>Population: </b>
								{country.capital}
							</p>
							<p>
								<b>Currencies: </b>
								{country.currencies.map((currency) => currency.name).join(',')}
							</p>
							<p>
								<b>Languages: </b>
								{country.languages.map((lang) => lang.name).join(',')}
							</p>
							<p>
								<b>Native name: </b>
								{country.nativeName}
							</p>
							<button
								onClick={onDismiss}
								className='ui button primary right floated content'
								style={{ margin: '0 10px 10px 0' }}
							>
								close
							</button>
						</div>
					</>
				)}
			</div>
		</div>,
		document.getElementById('modal')
	);
};

const mapStateToProps = (state) => ({
	country: state.selectedCountry[0],
});

export default connect(mapStateToProps, { getCountry, removeCountry })(
	CountryDetail
);
