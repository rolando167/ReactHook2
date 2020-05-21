import React, {Fragment,useState} from 'react';

const Galeria = () => {

	const [equipo, setEquipo] = useState([]); //puede llamarse con React.useState, sin enl import {...}

	React.useEffect(() => {

		 obtenerDatos();
	}, [])

	// llamar API
	const API_KEY = '6674210'
	
	const obtenerDatos = async () => {
		const data = await fetch(`https://www.higorr.pe/api/checkTestData/6674210`)
		const users = await data.json();
		console.log(users.data);
		setEquipo(users.data);
	}

	return (
        <Fragment>

			<div className="my-3 p-3 bg-white rounded shadow-sm">
			    <h6 className="border-bottom border-gray pb-2 mb-0">Test Recent updates</h6>

			    {
						equipo.map(item =>(
					
			    <div className="media text-muted pt-3" key={item.photo}>
			      <svg className="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><title>Placeholder</title><rect width="100%" height="100%" fill="#007bff"></rect><text x="50%" y="50%" fill="#007bff" dy=".3em">32x32</text></svg>
			      <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
			        <strong className="d-block text-gray-dark">@{item.email}</strong>
			        {item.last_signIn_at}
			      </p>
			    </div>
			    ))
			    }
			    <small className="d-block text-right mt-3">
			      <a href="#">All updates</a>
			    </small>
			  </div>
        
        </Fragment>

	)
}
export default Galeria;