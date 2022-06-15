import React from "react";

export const Footer = () => {
  
  const git = <a className="text-decoration-none text-light"href="https://github.com/RMjessica">Jessica Rojas</a>;

	return (
		<>
			<footer className="bg-dark text-light mt-4 p-3 pb-1 text-center">	
          <p>Copyright © {git} 2022</p>
			</footer>
		</>
	);
};
