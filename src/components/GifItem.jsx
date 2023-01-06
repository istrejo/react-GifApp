import React from 'react';
import '../styles/GifItem.css';
import 'animate.css';

export const GifItem = ({ title, url }) => {
	return (
		<div className='card animate__animated animate__backInLeft'>
			<img src={url} alt={title} />
			<p className='capa'>{title}</p>
		</div>
	);
};
