import React, {Fragment} from 'react';
import Navbar from './components/layout/partials/Navbar'
import Footer from './components/layout/partials/Footer'

import Inicio from './components/pages/Inicio'
import Precios from './components/pages/Precios'
import Nosotros from './components/pages/Nosotros'
import Login from './components/pages/Login'
import Movie from './components/pages/Movie'
import MovieDetails from './components/pages/MovieDetails'
import Galeria from './components/pages/Galeria'


import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	NavLink
} from "react-router-dom";

function App() {
  return (
	 <Router>
		<div className="container">
			<Navbar />
			
			<div className="">
				<Switch>
					

					<Route path="/contacto">
						Pagina de contacto
					</Route>
					<Route path="/nosotros">
						<Nosotros />
					</Route>
					<Route path="/movie/:id">
						<MovieDetails />
					</Route>

					<Route path="/movie">
						<Movie />
					</Route>
					<Route path="/precios">
						<Precios />
					</Route>
					<Route path="/ReactHook2/galeria/api">
						<Galeria />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/" exact>
						<Inicio />
					</Route>
				</Switch>
			</div>
			<Footer />
		</div>

	 </Router>
  );
}

export default App;
