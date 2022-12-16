import React , {useState , useEffect} from "react";
import axios from "axios";

import "../App.css";

import Title from "../Home/Title";
import Articles from "../Home/Article/Articles";
// import Data from "../APIs";
import SideArticals from "../Home/SideArticals";
import TopPosts from "../Home/TopPosts";

export default function Fitness() {
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

  // console.log(DataAPI);
  return (
    <div>
      <Title title="FITNESS AND MOOD" />
      <div className="theLatest">
        <div className="outerBox">
          <div className="left">
            {DataAPI.filter((Elem) => {
              return Elem.category === "Fitness";
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
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed
              consequatur totam cum voluptatum aliquid harum provident labore
              minus! Vel recusandae aliquid odio expedita quos consequatur
              laborum, magnam mollitia quidem nemo quod numquam dolorem sapiente
              itaque. Placeat deserunt magni nobis reiciendis! Ducimus illum
              consectetur ullam exercitationem! Obcaecati adipisci nostrum magni
              quis ipsum? Facilis, sunt voluptas voluptates aut nobis, cum iure
              nemo sint ipsa dolorum vitae laborum quaerat sapiente sit error!
              Architecto, sit dolorum ad itaque consectetur harum, natus aliquam
              iure sunt libero minima laudantium. Architecto sunt, facilis
              corporis eius asperiores eos nam veniam temporibus magni id soluta
              eum ab cum omnis!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              saepe illo quod quos earum, rerum qui, itaque ipsam molestiae
              autem quia accusamus laborum dolorem mollitia laboriosam quaerat
              id quas ex odit libero perferendis! Repellendus officiis
              reprehenderit sequi non? Doloremque saepe inventore maxime
              cupiditate repellat mollitia quibusdam dolores, voluptates placeat
              obcaecati aspernatur doloribus praesentium harum. Adipisci quas
              similique blanditiis iure autem. Dolor, aut at! Dolore nisi nihil
              quo, voluptates voluptatem magni. Totam blanditiis distinctio
              nesciunt corrupti id quisquam quod dolore sunt consequatur, quam
              dicta, porro repellendus vel iure saepe? Eos, provident. Ipsam,
              quisquam vel! Odio sint impedit aut officiis nulla molestiae dolor
              dolorum voluptates ullam placeat iure doloremque voluptas illum
              laboriosam in, illo maiores a, autem aliquid! Porro labore amet
              atque dolore rem reiciendis excepturi in pariatur a explicabo? Ab
              necessitatibus voluptas, dolor atque sequi neque laboriosam,
              repellendus officia ullam mollitia ipsum eos veniam! Assumenda
              earum fugiat provident accusamus officiis et ea suscipit delectus
              nemo nobis sit, architecto nulla dolorum tempora deserunt
              cupiditate magni quae non asperiores quisquam! Similique animi
              labore a id cum reprehenderit perferendis est nihil minus atque.
              Ipsam incidunt, modi nostrum architecto assumenda veniam corrupti
              provident, cupiditate dolores dignissimos facilis iste repellendus
              sit dicta, recusandae officiis possimus optio quos voluptatibus
              eligendi itaque suscipit consectetur? Dicta, nulla. Ad id
              deleniti, nobis ex, quia nostrum qui inventore officiis
              praesentium earum nihil consequatur quis minima explicabo nesciunt
              odio accusantium. Laudantium dignissimos nemo illo nobis dolores
              dolor natus neque animi. Recusandae debitis consectetur id est
              numquam vitae error quis! Labore cum officiis autem, quo soluta
              voluptas explicabo, consectetur quia ipsam fugit, perspiciatis
              libero atque tenetur. Deserunt quisquam, minima suscipit, laborum
              at error officiis a reiciendis sunt vero est neque. In rem
              perferendis nemo veniam deleniti facere hic esse, alias rerum aut
              fugit quis cupiditate, a necessitatibus nam exercitationem officia
              tenetur fuga dolorem architecto, minus sed. Aspernatur soluta,
              recusandae vero, voluptatibus, laborum incidunt nihil repellendus
              deleniti assumenda molestiae quidem odit iure reiciendis facere
              minima! Accusamus rem velit molestias cum? Sequi aperiam labore
              enim ut nobis! Rerum ratione recusandae, id, alias cupiditate
              accusamus, reiciendis ex quod soluta voluptate iste porro unde! A
              libero modi, non tempora velit ad sunt eaque quidem dignissimos
              ipsa adipisci autem consectetur sint quisquam eius dolores nihil
              corrupti necessitatibus? Corrupti, rerum aut autem ipsa libero
              nostrum ipsum totam fugit sint provident fugiat perspiciatis
              ducimus laborum. Nostrum vero adipisci, ipsa recusandae ut
              repellat at delectus distinctio voluptatum ab exercitationem
              molestias voluptates laborum aut earum alias odio porro? Quas,
              aliquid. Hic repellat aspernatur rem modi, aliquid obcaecati
              suscipit magni. Quasi ex et quia voluptatibus architecto dolores a
              eos. Repudiandae voluptate nam unde quidem recusandae similique
              delectus, nemo sunt voluptas iure commodi quibusdam facere
              exercitationem minus nesciunt libero, molestias sequi reiciendis
              non? Labore aperiam porro repellat, consequatur assumenda
              asperiores architecto magni incidunt. Sed sunt quas facilis iure
              ipsa, atque asperiores quam. Libero unde tempore facilis iste
              autem quod, sunt nesciunt dolores dicta, ex porro facere vitae ab,
              ducimus aperiam numquam aliquam obcaecati eligendi voluptatem vel.
              Quibusdam sit, natus dolorem deleniti expedita distinctio
              provident.
            </p>
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
