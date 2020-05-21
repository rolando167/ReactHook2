import React, {Fragment,useState} from 'react';


import {Link} from "react-router-dom";

const Movie = () => {
	const [equipo, setEquipo] = useState([]); //puede llamarse con React.useState, sin enl import {...}

	React.useEffect(() =>{

		 obtenerDatos();
	}, [])

	// llamar API
	const API_KEY = 'da618428'
	const inputMovie = 'kill bill'

	const obtenerDatos = async () => {
		const data = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
		const users = await data.json();
		console.log(users.Search);
		setEquipo(users.Search);
	}

	return (
		<Fragment>
			<div>
				<h1>Movies</h1>
			</div>
			<ul>
				{
					equipo.map(item =>(
			 			<li key={item.imdbID}>
			 				<Link to={`/movie/${item.imdbID}`}>
			 					{item.Title} 
			 				</Link>	- {item.Year}
			 			</li>
					))
				}
			</ul>
		</Fragment>
	)
}
export default Movie;