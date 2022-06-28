import React, { useEffect, useState } from "react";
import useAuth from "../../core/useAuth";
import Item1 from "./components/item1";
import Item2 from "./components/item2";
import Item3 from "./components/item3";
import Item4 from "./components/item4";
import Item5 from "./components/item5";
import Itemcultural from "./components/itemcultural";
// import { Container } from './styles';

function Cultural() {
  let { ip } = useAuth();
  let [state, setState] = useState({
    cultural: null,
    logform: null,
    story: null,
    arrayadvertisements: null,
  });
  useEffect(() => {
    Promise.all([
      fetch(`${ip}traditional/traditionalapi`).then((res) => res.json()),
      fetch(`${ip}longform/longformapi`).then((res) => res.json()),
      fetch(`${ip}story/storyapi`).then((res) => res.json()),
      fetch(`${ip}arrayadvertisements/arrayadvertisementsapi`).then((res) =>
        res.json()
      ),
    ]).then(([res1, res2, res3, res4]) => {
      setState({
        cultural: res1,
        logform: res2,
        story: res3,
        arrayadvertisements: res4,
        loanding: false,
      });
    });
  }, []);

  let { cultural, logform, story, arrayadvertisements } = state;
  if (!cultural && !logform && !story && !arrayadvertisements)
    return "loading...";

  var arraycultural = [];
  var arraylogform = [];
  var arraystory = [];
  var arrayadvertisementss = state.arrayadvertisements;
  function filter(x) {
    x.forEach((a, b) => {
      if (a.category === "VHXHs") {
        arraycultural.push(a);
      }
    });
  }
  filter(state.cultural);
  var array = arraycultural;
  arraycultural = array.reverse();
  console.log(arraycultural);

  function filterlogform(x) {
    x.forEach((a, b) => {
      if (a.category === "VHXHs") {
        arraylogform.push(a);
      }
    });
  }
  filterlogform(state.logform);
  var arrraylogform = arraylogform.reverse();
  console.log(arrraylogform);

  function filterstory(x) {
    x.forEach((a, b) => {
      if (a.category === "VHXHs") {
        arraystory.push(a);
      }
    });
  }
  filterstory(state.story);
  var arrraystory = arraystory.reverse();
  console.log(arrraystory);

  return (
    <>
      <main>
        <div className="container">
          <div className="page__home">
            <div className="page__home-header">
              <h1>
                <a href>Văn Hóa Xã Hội</a>
              </h1>
              <ul>
                <li>
                  <a href>TIN TỨC XUẤT BẢN</a>
                </li>
                <li>
                  <a href>SÁCH HAY </a>
                </li>
                <li>
                  <a href>TÁC GIẢ</a>
                </li>
              </ul>
            </div>
            <Item1
              cultural={arraycultural[0]}
              arrayadvertisements={arrayadvertisementss}
            ></Item1>
            <div className="page__home-listnew">
              <div className="right__left">
                <Item2 cultural={arrraylogform[0]}></Item2>
                <Item3 cultural={arrraystory[0]}></Item3>
              </div>
              <div className="right__right">
                <Item4 cultural={arrraylogform[1]}></Item4>
                <Item5 cultural={arrraystory[1]}></Item5>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="new">
        <div className="container">
          <div className="new__title">
            <h2>
              <img src="/img/3color.png" alt="ảnh 3 màu" />
              Tin mới
            </h2>
          </div>
          <div className="new-content">
            <div className="new-content-left">
              {arraycultural.map((x, y) =>
                y <= 30 ? (
                  <Itemcultural key={x._id} {...x}></Itemcultural>
                ) : null
              )}
            </div>
            <div className="new-content-advertisement"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cultural;
