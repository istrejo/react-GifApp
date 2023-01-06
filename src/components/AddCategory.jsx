import React, { useState } from 'react';
import '../styles/AddCategory.css';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setinputValue] = useState('');

	const handleInputValue = event => {
		const { value } = event.target;
		setinputValue(value);
	};

	const onSubmit = event => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;
		onNewCategory(inputValue.trim());
		setinputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				type='text'
				placeholder='Share Gif'
				value={inputValue}
				onChange={handleInputValue}
			/>
		</form>
	);
};
