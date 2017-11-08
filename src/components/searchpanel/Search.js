import React from 'react';
import Button from '../common/button/Button';

function Search({ onChange, onClick, value}) {
	return (
		<div className='container'>
			<div className='row '>
				<div className='col-md-8 col-md-offset-2'>
					<div className='input-group'>
						<input
							type='text'
							value={value}
							onChange={onChange}
							className='form-control'
						/>
						<span className='input-group-btn'>
							<Button onClick={onClick}/>
						</span>
					</div>
				</div>
			</div>
		</div>

	);
}
export default Search;
