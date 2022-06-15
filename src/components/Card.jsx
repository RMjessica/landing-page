import React from 'react'
import PropType from "prop-types";
import czerwinski from "../imgs/czerwinski.jpg"
import czerwinski1 from "../imgs/czerwinski1.jpg"
import czerwinski2 from "../imgs/czerwinski2.jpg"
import czerwinski3 from "../imgs/czerwinski3.jpg"
import czerwinski4 from "../imgs/czerwinski4.jpg"
import czerwinski5 from "../imgs/czerwinski5.jpg"
import czerwinski6 from "../imgs/czerwinski6.jpg"

export const Card = () => {
  
  let pics = [ czerwinski, czerwinski1, czerwinski2, czerwinski3, czerwinski4, czerwinski5, czerwinski6];
 
  let random = Math.floor(Math.random() * pics.length);

  let pic = (pics[random]);

  //const randomPics = _.sample([myPics]);
    
  return (
    <div className="container d-flex m-2">
      <div className="card col-sm-12 col-md-3" style={{width: "19rem"}}>
        <img src={pic} className="card-img-top img-fluid" alt="rhodes"/>
        <div className="card-body">
          <h5 className="card-title text-center">Card title</h5>
          <ul class="list-group list-group-flush decoration-none">
            <li className="card-text list-group-item">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li>
          </ul>
          
        </ div>
      </div>
    </div>
  )
};
