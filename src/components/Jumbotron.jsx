import React from 'react'
import PropType from "prop-types";

export const Jumbotron = () => {
  return (
    <div className="container">
      <div className="mb-4 px-4 py-5 bg-secondary bg-opacity-25 rounded lh-base">
        <h1 className="display-5 fw-bold">"A warm welcome!"</h1>
        <p className="fs-4">"Nor again is there anyone who 
					loves or pursues or desires to obtain pain 
					of itself, because it is pain, but because 
					occasionally circumstances occur in which 
					toil and pain can procure him some great pleasure."</p>
        <a className="btn btn-outline-dark btn-lg" href="#" role="button">"Call to action!"</a>
      </div>
    </div>
  )
};

