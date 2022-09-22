import React from 'react'
import { NavLink } from 'react-router-dom';

export default function LatestStoriesDetails(props) {
  return (
    <div className="LatestStoriesDetails">
      <>
        <NavLink
          state={{
            title: props.title,
            image: props.imgURL,
            description: props.description,
            // description: props.Description,
          }}
          to="/SinglePage"
        >
          <div className="stories">
            <div className="imgSource">
              <img src={props.imgURL} alt="" width={"100%"} height={"100%"} />
            </div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>21 September 2020 - date</p>
          </div>
        </NavLink>
      </>
    </div>
  );
}
