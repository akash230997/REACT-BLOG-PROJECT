import React from 'react';
import "../App.css";
import { NavLink } from 'react-router-dom';

export default function SideB(props) {
    const date = new Date().toDateString();
  return (
    <>
      <div className="outLine">
        <NavLink
          state={{
            title: props.title,
            image: props.imgURL,
            description: props.description,
            // description: props.Description,
          }}
          to="/SinglePage"
        >
          <div className="imgSource">
            <img src={props.imgURL} alt="" width={"100%"} height={"100%"} />
          </div>
          <h1>{props.title}</h1>
        </NavLink>
        <p>{props.description}</p>
        <p>{date}</p>
      </div>
    </>
  );
}
