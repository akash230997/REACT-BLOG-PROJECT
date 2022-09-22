import React from "react";

import "../App.css";

import Title from "../Home/Title";
import Articles from "../Home/Article/Articles";
import Data from "../APIs";
import SideArticals from "../Home/SideArticals";
import TopPosts from "../Home/TopPosts";
import SideB from "../BOLLYWOOD/SideB";

export default function Tech() {
  return (
    <div>
      <Title title="Technology - New World Encyclopedia" />
      <div className="theLatest">
        <div className="outerBox">
          <div className="left">
            {Data.filter((Elem) => {
              return Elem.category === "Technology";
            }).map((Elem, index) => {
              // const key = index;
              return (
                <Articles
                  key={Elem.id}
                  imgURL={Elem.img}
                  title={Elem.title}
                  description={Elem.Description.slice(0, 200)}
                  category={Elem.category}
                />
              );
            })}
          </div>
          <div className="right">
            {Data.filter((Elem) => {
              return Elem.category === "Technology2";
            }).map((Elem, index) => {
              // const key = index;
              return (
                <SideB
                  key={Elem.id}
                  imgURL={Elem.img}
                  title={Elem.title}
                  description={Elem.Description.slice(0, 100)}
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
