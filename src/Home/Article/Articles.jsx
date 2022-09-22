import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../App.css';

export default function Articles(props) {
    // const topic = 'topic';
    // const travel = 'Travel';
    const toDaydate = new Date().toDateString();
  return (
    <>
      <div className="arti">
        <div className="imgg">
          <NavLink
            state={{
              title: props.title,
              image: props.imgURL,
              description: props.description,
            }}
            to="/SinglePage"
          >
            <img src={props.imgURL} width={"100%"} height={"100%"} alt="" />
          </NavLink>
        </div>
        <div className="details">
          <NavLink
            state={{
              title: props.title,
              image: props.imgURL,
              description: props.description,
            }}
            to="/SinglePage"
          >
            <h1>{props.title}</h1>
          </NavLink>
          <p className="details_data">{props.description}</p>
          <p>{toDaydate}</p>
        </div>
      </div>
      {/* <hr /> */}
    </>
  );
}
