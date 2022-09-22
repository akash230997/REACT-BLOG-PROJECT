import React from "react";

import "../App.css";

import Title from "../Home/Title";
// import Articles from "../Home/Outer/Articles";
import Articles from "../Home/Article/Articles";
import Data from "../APIs";
import SideArticals from "../Home/SideArticals";
import TopPosts from "../Home/TopPosts";

export default function Food() {
  return (
    <div>
      <Title title="Good food is everything" />
      <div className="theLatest">
        <div className="outerBox">
          <div className="left">
            {Data.filter((Elem) => {
              return Elem.category === "Food";
            }).map((Elem, index) => {
              // const key = index;
              return (
                <Articles
                  key={Elem.id}
                  imgURL={Elem.img}
                  title={Elem.title}
                  description={Elem.Description.slice(0, 100)}
                  category={Elem.category}
                />
              );
            })}
          </div>
          <div className="right">
            {Data.filter((Elem) => {
              return Elem.category === "Stories";
            }).map((Elem, index) => {
              // const key = index;
              return (
                <SideArticals
                  key={Elem.id}
                  imgURL={Elem.img}
                  title={Elem.title}
                  description={Elem.Description.slice(0, 300)}
                  category={Elem.category}
                />
              );
            })}
            <Title title="Top Post" />
            <TopPosts />
          </div>
        </div>
      </div>
    </div>
  );
}
