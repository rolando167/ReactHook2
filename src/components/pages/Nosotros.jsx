import React, {Fragment,useState} from 'react';


const Nosotros = () => {
	const [equipo, setEquipo] = useState([]); //puede llamarse con React.useState, sin enl import {...}

	React.useEffect(()=>{
		console.log('useEffect');
		// document.title = 'Nosotros '
		 obtenerDatos();
	}, []) // los [] es para llamar solo un vez
	// llamar API

	const obtenerDatos = async () => {
		const data = await fetch('https://jsonplaceholder.typicode.com/users')
		const users = await data.json();
		// console.log(users);
		setEquipo(users);
	}


	return (
		<Fragment>
			<div>
				<h1>Nosotros</h1>
			</div>
			<ul>
				{
					equipo.map(item =>(
			 			<li key={item.id}>{item.name} - {item.email}</li>
					))
				}
			</ul>
		</Fragment>
	)
}
export default Nosotros;