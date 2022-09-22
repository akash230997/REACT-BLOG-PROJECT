import React from 'react';
import '../../App.css';
import { NavLink } from 'react-router-dom';
export default function Latest(props) {
    // const travel = 'Travel';
    const date = new Date().toDateString()  ;
    console.log(props.imgURL)
  return (
    <div className="page_latest">
      <NavLink
        state={{
          title: props.title,
          image: props.imgURL,
          description: props.description,
          date:date
        }}
        to="/SinglePage"
      >
        <div className="img-latest">
          <img src={props.imgURL} width={"100%"} height={"100%"} alt="" />
        </div>
        <h1>{props.title}</h1>
      </NavLink>
      <p>{props.description}</p>
      <p>{date}</p>
    </div>
  );
}
