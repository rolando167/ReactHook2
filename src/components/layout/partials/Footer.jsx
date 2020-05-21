import React, {Fragment} from 'react';

const Footer = () => {
	return (
		<footer className="pt-4 my-md-5 pt-md-5 border-top mt-auto">
			<div className="row">
				<div className="col-12 col-md">
					 
					<small className="d-block mb-3 text-muted">&copy; 2017-2020</small>
				</div>
				<div className="col-6 col-md">
					<h5>Trabajos</h5>
					<ul className="list-unstyled text-small">
						<li><a className="text-muted" href="#">Cool stuff</a></li>
						<li><a className="text-muted" href="#">Random feature</a></li>
	 
					</ul>
				</div>
				<div className="col-6 col-md">
					<h5>Recursos</h5>
					<ul className="list-unstyled text-small">
						<li><a className="text-muted" href="#">Resource</a></li>
						<li><a className="text-muted" href="#">Resource name</a></li>
	 
					</ul>
				</div>
				<div className="col-6 col-md">
					<h5>Sobre</h5>
					<ul className="list-unstyled text-small">
						<li><a className="text-muted" href="#">Team</a></li>
						<li><a className="text-muted" href="#">Locations</a></li>
 
					</ul>
				</div>
			</div>
		</footer>
	)
}
export default Footer;