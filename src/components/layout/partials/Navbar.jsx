import React, {Fragment} from 'react';
import {
 
	Link,
	NavLink
} from "react-router-dom";


const Navbar = () => {

	return (
		<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">

			<h5 className="my-0 mr-md-auto font-weight-normal"><NavLink to="/" className="p-2 text-dark" activeClassName="active">
					Empresa
			 	</NavLink></h5>
			<nav className="my-2 my-md-0 mr-md-3">
				 
			 	<NavLink to="/contacto" className="p-2 text-dark">
					Contacto
			 	</NavLink>
			 	<NavLink to="/nosotros" className="p-2 text-dark">
					Nosotros
			 	</NavLink>
			 	<NavLink to="/precios" className="p-2 text-dark">
					Precios
			 	</NavLink>
			 	<NavLink to="/ReactHook2/galeria" className="p-2 text-dark">
					Galleria
			 	</NavLink>
			</nav>
			<NavLink to="/login" className="btn btn-outline-primary">
				Login
			 </NavLink>
			 
		</div>
	)
}
export default Navbar;