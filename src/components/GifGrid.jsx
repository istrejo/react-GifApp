import React, { useState, useEffect } from 'react';

import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

import '../styles/GifGrid.css';

export const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category.toUpperCase()}</h3>
			{isLoading && <h2>Loading...</h2>}
			<div className='card-grid'>
				{images.map(image => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};
