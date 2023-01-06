import React from 'react';
import { useState } from 'react';
import { AddCategory, GifGrid, Header } from './components';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState(['One Punch']);

	const onAddCategory = newCategory => {
		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]);
	};

	return (
		<>
			<Header />

			<AddCategory onNewCategory={value => onAddCategory(value)} />

			{categories.map(category => (
				<GifGrid category={category} key={category} />
			))}
		</>
	);
};
