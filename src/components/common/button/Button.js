import React from 'react';


const Button = ({ onClick }) => {
	return(
		<button
				className='btn btn-primary'
				onClick={onClick}
				type='button'
				>
			Search
		</button>
	)
}
export default Button;