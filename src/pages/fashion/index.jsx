import React, { useEffect, useState } from "react";
import useAuth from "../../core/useAuth";
import Item1 from "./components/item1";
import Item2 from "./components/item2";
import Item3 from "./components/item3";
import Item4 from "./components/item4";
import Item5 from "./components/item5";
import Itemfashion from "./components/itemnew";
// import { Container } from './styles';

function Fashion() {
  let { ip } = useAuth();
  let [state, setState] = useState({
    fashion: null,
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
        fashion: res1,
        logform: res2,
        story: res3,
        arrayadvertisements: res4,
        loanding: false,
      });
    });
  }, []);
  let { allnew, logform, fashion, arrayadvertisements } = state;
  if (!allnew && !logform && !fashion && !arrayadvertisements)
    return "loading...";
  var arrayfashion = [];
  var arraylogform = [];
  var arraystory = [];
  function filter(x) {
    x.forEach((a, b) => {
      if (a.category === "ThoiTrangs") {
        arrayfashion.push(a);
      }
    });
  }
  filter(state.fashion);
  var array = arrayfashion;
  arrayfashion = array.reverse();

  function filterlogform(x) {
    x.forEach((a, b) => {
      if (a.category === "ThoiTrangs") {
        arraylogform.push(a);
      }
    });
  }
  filterlogform(state.logform);
  var arrraylogform = arraylogform.reverse();
  function filterstory(x) {
    x.forEach((a, b) => {
      if (a.category === "ThoiTrangs") {
        arraystory.push(a);
      }
    });
  }
  filterstory(state.story);
  var arrraystory = arraystory.reverse();

  return (
    <>
      <main>
        <div className="container">
          <div className="page__home">
            <div className="page__home-header">
              <h1>
                <a href>Thời Trang</a>
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
              fashion={arrayfashion[0]}
              arrayadvertisements={arrayadvertisements}
            ></Item1>
            <div className="page__home-listnew">
              <div className="right__left">
                <Item2 fashion={arrraylogform[0]}></Item2>
                <Item3 fashion={arrraystory[0]}></Item3>
              </div>
              <div className="right__right">
                <Item4 fashion={arrraylogform[1]}></Item4>
                <Item5 fashion={arrraystory[1]}></Item5>
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
              {arrayfashion.map((x, y) => (
                <Itemfashion key={x._id} {...x}></Itemfashion>
              ))}
            </div>
            <div className="new-content-advertisement"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fashion;
