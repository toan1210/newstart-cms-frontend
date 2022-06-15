import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Care from "./components/care";
import View from "./components/view";
import useAuth from "../../core/useAuth";

// import { Container } from './styles';

function Index() {
  let { ip } = useAuth();
  let { slug } = useRouteMatch().params;
  const [state, setState] = useState({
    listnew: null,
    logform: null,
    allnew: null,
  });
  useEffect(() => {
    Promise.all([
      fetch(`${ip}longform/${slug}`).then((res) => res.json()),
      fetch(`${ip}longform/longformapi`).then((res) => res.json()),
      fetch(`${ip}traditional/traditionalapi`).then((res) => res.json()),
    ]).then(([res1, res2, res3]) => {
      setState({
        listnew: res1,
        logform: res2,
        allnew: res3,
      });
    });
  }, [slug]);
  let { listnew, logform, allnew } = state;
  if (!listnew && !logform && !allnew) return "loading...";
  let arrayallnew = state.allnew.reverse();
  var arraydetaillogform = state.listnew;
  var arrayogform = state.logform.reverse();
  //----------------------------------------
  return (
    <>
      <main className="page-detaillogform">
        <div className="detaillogform-img">
          {/* {
       typeof(arraydetaillogform.ImgTitle[0]) !== 'undefined'?
        <img src={iplink + arraydetaillogform.ImgTitle[0].url}  alt="" srcSet />:null
     } */}
        </div>
        <div className="detaillogform-content">
          {/* <div className="detaillogform-content__title">
          <h2>
            {arraydetaillogform.TieuDe};
          </h2>
        </div> */}
          <div className="detaillogform-content__content">
            <div
              dangerouslySetInnerHTML={{ __html: arraydetaillogform.content }}
            ></div>
          </div>
          {/* <div className="detaillogform-content__img">
          <img src="/img/32.jpg" alt="" srcSet className="detaillogform-img__item1" />
          <img src="/img/32.jpg" alt="" srcSet className="detaillogform-img__item2" />
        </div> */}
        </div>
      </main>
      <div className="section-care">
        <div className="container">
          <div className="section-care__title">
            <h2>
              <a href>BẠN CÓ THỂ QUAN TÂM</a>
            </h2>
          </div>
          <div className="section-care__content">
            {arrayogform.map((x, y) =>
              y <= 5 ? <Care key={x.id} {...x}></Care> : null
            )}
          </div>
        </div>
      </div>
      <div className="section-seemore">
        <div className="container">
          <div className="section-seemore__title">
            <h2>Xem Nhiều</h2>
          </div>
          {arrayallnew.map((x, y) =>
            y <= 30 ? <View key={x.id} {...x}></View> : null
          )}
        </div>
      </div>
    </>
  );
}

export default Index;
