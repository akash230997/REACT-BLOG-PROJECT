import React from "react";
import "../App.css";
import Gallery from "./Gallery/Gallery";
import Title from "./Title";
import Latest from "./The Latest/Latest";
// import Articles from "./Article/Articles";
// import Articles from "./Article/Articles";
import Articles from "../Home/Article/Articles";
import Data from "../APIs";
import SideArticals from './SideArticals'
import TopPosts from "./TopPosts";
import SideB from "../BOLLYWOOD/SideB";
import LatestStoriesDetails from './LatestStoriesDetails';
// import SinglePage from "../SinglePage";

export default function Home() {

  return (
    <div>
      <Gallery />
      <Title title="The Latest" />
      <div className="theLatest">
        {Data.filter((Elem) => {
          return Elem.category === "Latest";
        }).map((Elem, index) => {
          // const key = index;
          return (
            <Latest
              key={Elem.id}
              imgURL={Elem.img}
              title={Elem.title}
              description={Elem.Description}
            />
          );
        })}
      </div>
      <Title title="Latest Articles" />
      <div className="theLatest">
        <div className="outerBox">
          <div className="left_artical">
            {Data.filter((Elem) => {
              return Elem.category === "Travelling";
            }).map((Elem, index) => {
              // const key = index;
              return (
                <Articles
                  key={Elem.id}
                  imgURL={Elem.img}
                  title={Elem.title}
                  description={Elem.Description.slice(0, 300)}
                  category={Elem.category}
                />
              );
            })}
          </div>
          <div className="right-artical">
            {Data.filter((Elem) => {
              return Elem.category === "Articles";
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
      <Title title="Latest Stories" />
      <div className="theLatest" style={{}}>
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
        {/* <LatestStoriesDetails />
        <LatestStoriesDetails />
        <LatestStoriesDetails /> */}
      </div>
    </div>
  );
}
