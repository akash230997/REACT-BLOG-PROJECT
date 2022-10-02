import React from 'react'

// import '../'


import Title from "../Home/Title";
import Articles from '../Home/Article/Articles';
import Data from '../APIs';
// import SideArticals from '../Home/SideArticals';
import TopPosts from '../Home/TopPosts';
import SideB from './SideB';

export default function Bollywood() {

  return (
    <div>
      <Title title="Here's Everything You Need to Travel the World" />
      <div className="theLatest">
        <div className="outerBox">
          <div className="left">
            {Data.filter((Elem) => {
              return Elem.category === "Travelling";
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
              return Elem.category === "Travelling2";
            }).map((Elem, index) => {
              // const key = index;
              return (
                <SideB
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
