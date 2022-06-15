import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";

export const Navbar = (props) => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					{props.title}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								{props.home}
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								{props.about}
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled"
								href="#"
								tabIndex="-1"
								aria-disabled="true">
								{props.services}
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled"
								href="#"
								tabIndex="-1"
								aria-disabled="true">
								{props.contact}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

Navbar.propTypes = {
	title: PropType.string,
	home: PropType.string,
	about: PropType.string,
	services: PropType.string,
	contact: PropType.string,
};