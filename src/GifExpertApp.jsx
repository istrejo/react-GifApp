import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch', 'DBZ']);

	const onAddCategory = newCategory => {
		console.log(newCategory);

		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory
				onNewCategory={value => onAddCategory(value)}
				// setCategories={setCategories}
			/>

			{categories.map(category => (
				<GifGrid category={category} key={category} />
			))}
		</>
	);
};
