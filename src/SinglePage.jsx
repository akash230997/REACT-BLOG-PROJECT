import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
// import Data from "./APIs";
import Latest from "./Home/The Latest/Latest";

// import SideArticals from "./Home/SideArticals";
// import './App.css';

export default function SinglePage() {

    const [DataAPI, setData] = useState([]);

    useEffect(() => {
      const Store = async () => {
        const res = await axios.get(
          "https://react-blogg-back-end.vercel.app/data"
        );
        // setDate(res)
        // console.log(res.data)
        setData(res.data);
      };
      Store();
      // return () => {
      //   cleanup
      // };
    }, []);

  const Location = useLocation();
  console.log(Location);
  return (
    <>
      <div className="container">
        <div className="left_Single_Page">
          <h1>{Location.state.title}</h1>
          <div className="page_latest">
            <div className="img_latest_Single">
              <img
                src={Location.state.image}
                width={"100%"}
                height={"100%"}
                alt=""
              />
            </div>
            <h1>{Location.state.title}</h1>
            <p>{Location.state.description}</p>
            <p>{Location.state.date} </p>
            {/* <p>
          {travel} / {date}
        </p> */}
          </div>
        </div>
        <div className="right_Single_Page">
          <h1>HEADING HERE</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            optio, velit odit laudantium nemo, voluptatem, quaerat consectetur
            cupiditate impedit veniam nesciunt suscipit corrupti. Quidem
            accusamus quam accusantium similique eligendi consequatur! Doloribus
            odit animi quo, reprehenderit nostrum aliquam provident quas
            repellendus maxime, dolorum consequuntur, quia quaerat dolore
            voluptates sapiente accusamus facilis.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis impedit fugit corrupti pariatur. Cum, quas? Magnam sint
            odit nemo aperiam quae corrupti libero, nam eum alias odio neque
            eligendi voluptas vel aut quidem quaerat quam asperiores, tempore
            soluta voluptatum delectus, nobis ea exercitationem. Temporibus
            eveniet ut id quia quo nulla labore natus. Animi, ullam nulla eaque
            possimus itaque vitae quia optio non a, velit placeat. Quidem atque
            doloribus excepturi quam! Iure fugit mollitia voluptatum ut alias
            quibusdam tenetur, animi omnis nulla, maxime inventore. Modi
            voluptates aliquam eius eaque, temporibus error fugiat eum atque
            reprehenderit doloribus exercitationem consectetur optio cupiditate
            repellendus sint autem voluptatum ullam perspiciatis eligendi aut
            vero dolorem. Veniam temporibus, distinctio a officia labore facilis
            sed non voluptas fuga et dolor error dolores nihil recusandae
            corporis repudiandae perspiciatis expedita veritatis voluptates odio
            molestias natus. Eveniet, culpa. Odio accusantium expedita et vitae,
            distinctio dolor dolorum quia magni dolorem fugit non, accusamus
            officia optio animi! Qui deleniti laudantium ullam nulla, eos vitae
            unde illum a. Sint ducimus pariatur velit voluptas sit tempora ex
            fugiat eligendi eum nesciunt? Necessitatibus tempora eveniet ipsa
            esse beatae cupiditate ab odio quas ipsum a saepe repellat expedita
            inventore, placeat facilis soluta sequi aliquam. Veniam voluptatem
            consectetur laudantium repellendus nihil magnam blanditiis ducimus
            temporibus adipisci dolores animi, fuga distinctio vitae commodi
            atque ullam autem culpa reiciendis quis quia debitis libero, maxime
            assumenda error? Consequuntur nemo aut distinctio quos maxime ea
            molestias? Maiores qui possimus, inventore quae vel voluptas nam
            blanditiis earum, quod, voluptatibus neque laudantium eos aspernatur
            velit officia. Repellendus laborum natus earum aut eius atque optio
            neque eos doloremque eligendi quos sapiente recusandae illo
            voluptas, vel explicabo, odit tenetur? Distinctio, reprehenderit
            praesentium. Aut culpa obcaecati magnam ipsum debitis ducimus!
            Explicabo beatae similique officiis cupiditate architecto
            perferendis fugiat nulla labore dolorem alias aliquam deserunt
            reprehenderit eligendi nobis unde mollitia suscipit earum nesciunt,
            quae pariatur. Non quisquam blanditiis libero ex magni, eos quasi,
            vel, eaque possimus deleniti ducimus mollitia numquam corrupti.
            Repudiandae ut, quibusdam dolores, corporis amet nam impedit id
            maiores rem officia facilis aliquam omnis dignissimos. Ut quidem,
            voluptates nostrum ab pariatur magnam eos? Quo laborum earum, culpa
          </p>
        </div>
      </div>
      <div className="bottom">
        {DataAPI.filter((Elem) => {
          return Elem.category === "Latest";
        }).map((Elem, index) => {
          // const key = index;
          return (
            <Latest
              key={Elem.id}
              imgURL={Elem.img}
              title={Elem.title}
              description={Elem.Description.slice(0, 300)}
              category={Elem.category}
            />
          );
        })}
      </div>
    </>
  );
}
