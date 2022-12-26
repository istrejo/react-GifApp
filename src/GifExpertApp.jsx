import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'DBZ']);

	const onAddCategory = newCategory => {
		console.log(newCategory);
		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			{/* Title */}

			<h1>GifExpertApp</h1>

			{/* Input */}
			<AddCategory
				onNewCategory={value => onAddCategory(value)}
				// setCategories={setCategories}
			/>

			{/* Gif List */}
			<ol>
				{categories.map((category, index) => (
					<li key={index}>{category}</li>
				))}
			</ol>
			{/* Gif Item */}
		</>
	);
};
