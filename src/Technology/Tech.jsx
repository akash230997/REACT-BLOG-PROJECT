import React, {useState , useEffect} from "react";
import axios from 'axios';
import "../App.css";

import Title from "../Home/Title";
import Articles from "../Home/Article/Articles";
// import Data from "../APIs";
// import SideArticals from "../Home/SideArticals";
import TopPosts from "../Home/TopPosts";
import SideB from "../BOLLYWOOD/SideB";

export default function Tech() {

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

  return (
    <div>
      <Title title="Technology - New World Encyclopedia" />
      <div className="theLatest">
        <div className="outerBox">
          <div className="left">
            {DataAPI.filter((Elem) => {
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
            {DataAPI.filter((Elem) => {
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
