import React , {useState , useEffect} from "react";
import axios from 'axios';
import "../App.css";

import Title from "../Home/Title";
import Articles from "../Home/Article/Articles";
// import Data from "../APIs";
import SideArticals from "../Home/SideArticals";
import TopPosts from "../Home/TopPosts";

export default function Hollywood() {
      const [DataAPI, setData] = useState([]);

      useEffect(() => {
        const Store = async () => {
          const res = await axios.get(
            "https://react-blogg-back-end.vercel.app/data"
          );
          // setDate(res)
          console.log(res)
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
      <Title title="Hollywood, Los Angeles, a neighborhood in California" />
      <div className="theLatest">
        <div className="outerBox">
          <div className="left">
            {DataAPI.filter((Elem) => {
              return Elem.category === "Hollywood";
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
