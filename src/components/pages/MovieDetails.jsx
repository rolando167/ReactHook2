import React, {Fragment, useState} from 'react';
import { useParams } from "react-router-dom";

const MovieDetails = () => {

	console.log(useParams());
	
	 const [equipo, setEquipo] = useState([]); //puede llamarse con React.useState, sin enl import {...}

	React.useEffect(() =>{
		 obtenerDatos();
	}, [])

	// llamar API
	const API_KEY = 'da618428'

	const {id} = useParams();

	const obtenerDatos = async () => {
		const data = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
		const users = await data.json();
		console.log(users);
		setEquipo(users);
	}
	return (
		<Fragment>
		 
		<div className="card" >
			  <img src={equipo.Poster} class="card-img-top" alt="..." width="170" heig />
			  <div className="card-body">
				<h5 className="card-title">{equipo.Title}</h5>
				<p className="card-text">{equipo.Plot}</p>
				<a href="/movie" className="btn btn-primary">Regresar</a>
			  </div>
			</div>
		</Fragment>
	)
}
export default MovieDetails;