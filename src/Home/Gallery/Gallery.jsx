import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import { Link } from "@mui/icons-material";
export default function Gallery() {
  const date = new Date().toDateString();
  // const Time = new Date().toLocaleTimeString()
  const [Time, updatTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => {
    updatTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <div className="cover">
      <div className="left_cover">
        <h1 className="Main">{Time}</h1>
        <h1 className="Front">
          OUT OF THE MOUNTAIN OF DESPAIR, A STONE OF HOPE.
        </h1>
        <h1 className="Front">{date.toUpperCase()}</h1>
        {/* <h1> "OUT OF THE MOUNTAIN OF DESPAIR, A STONE OF HOPE."</h1> */}

        {/* <h1 className="Main"></h1> */}
      </div>
      <div className="right">
        <div className="img1">
          <Link to={"/Tech"}>
            <h1 className="img1_block">Technology</h1>
          </Link>
        </div>

        <div className="img2">
          <NavLink to={"/Food"}>
          <h1 className="img1_block hoverImg">Food</h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
