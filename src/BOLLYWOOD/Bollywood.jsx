import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


import Title from "../Home/Title";
import Articles from '../Home/Article/Articles';
// import Data from '../APIs';
// import SideArticals from '../Home/SideArticals';
import TopPosts from '../Home/TopPosts';
import SideB from './SideB';
// import { useEffect } from 'react';

export default function Bollywood() {

    const [DataAPI, setData] = useState([]);

    useEffect(() => {
      const Store = async () => {
        const res = await axios.get("https://testinngg.herokuapp.com/Data");
        // setDate(res)
        // console.log(res.data)
        setData(res.data);
      };
      Store();
      // return () => {
      //   cleanup
      // };
    }, []);

    // console.log(DataAPI);

  return (
    <div>
      <Title title="Here's Everything You Need to Travel the World" />
      <div className="theLatest">
        <div className="outerBox">
          <div className="left">
            {DataAPI.filter((Elem) => {
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
            {DataAPI.filter((Elem) => {
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
