import React, { useEffect, useState } from "react";
import useAuth from "../../core/useAuth";
import Item1 from "./components/item1";
import Item2 from "./components/item2";
import Item3 from "./components/item3";
import Item4 from "./components/item4";
import Item5 from "./components/item5";
import Itemnews from "./components/itemnews";
// import { Container } from './styles';

function News() {
  let { ip } = useAuth();
  let [state, setState] = useState({
    news: null,
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
        news: res1,
        logform: res2,
        story: res3,
        arrayadvertisements: res4,
      });
    });
  }, []);
  let { news, logform, story, arrayadvertisements } = state;
  if (!news && !logform && !story && !arrayadvertisements) return "loading...";
  var arraynews = [];
  var arraylogform = [];
  var arraystory = [];
  var arrray = state.news.reverse();
  function filter(x) {
    x.forEach((a, b) => {
      if (a.status === "false") {
        arraynews.push(a);
      }
    });
  }
  filter(state.news);
  var array = arraynews.reverse();
  return (
    <>
      <main>
        <div className="container">
          <div className="page__home">
            <div className="page__home-header">
              <h1>
                <a href>Tin Mới</a>
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
              news={array[0]}
              arrayadvertisements={state.arrayadvertisements}
            ></Item1>
            <div className="page__home-listnew">
              <div className="right__left">
                <Item2 news={array[1]}></Item2>
                <Item3 news={array[2]}></Item3>
              </div>
              <div className="right__right">
                <Item4 news={array[3]}></Item4>
                <Item5 news={array[4]}></Item5>
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
              {arrray.map((x, y) =>
                y <= 30 ? <Itemnews key={x._id} {...x}></Itemnews> : null
              )}
            </div>
            <div className="new-content-advertisement"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
