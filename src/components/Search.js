import React from 'react';
import { connect } from 'react-redux';
import { editSearchTerm } from './actions/index';

const Search = ({ term, editSearchTerm }) => {
	return (
		<div className='ui placeholder segment'>
			<div className='ui icon header'>
				<i className='search icon'></i>
				Find country by name, capital or language
			</div>
			<div className='field'>
				<div className='ui search'>
					<div className='ui icon input' style={{ width: '100%' }}>
						<input
							type='text'
							value={term}
							onChange={(e) => editSearchTerm(e.target.value)}
							autoComplete='off'
						/>
						<i className='search icon'></i>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	term: state.searchTerm.term,
});

export default connect(mapStateToProps, { editSearchTerm })(Search);
