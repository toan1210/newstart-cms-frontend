import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../../core/useAuth";
import Item from "./Item";
// import { Container } from './styles';

function Index({ story, arrayadvertisement, arrayhome }) {
  let { ipapi, iplink } = useAuth();
  var arrayeconomy = [];
  function filter(x) {
    x.forEach((a, b) => {
      if (a.category === "AmThucs") {
        arrayeconomy.push(a);
      }
    });
  }
  filter(story);
  arrayeconomy = arrayeconomy.reverse();
  var arrayall = [];
  function filter1(x) {
    x.forEach((a, b) => {
      if (a.category === "AmThucs") {
        arrayall.push(a);
      }
    });
  }
  filter1(arrayhome);
  arrayall = arrayall.reverse();
  var arrrrray = [...arrayall, ...arrayeconomy];

  var homestory = arrrrray.sort(function (a, b) {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
  homestory = homestory.reverse();
  return (
    <>
      <section>
        <div className="slider tablet">
          <div className="container">
            <div className="slider-title">
              <h3>
                <img src="/img/3color.png" alt="3 color" />
                Ẩm Thực
              </h3>
              <div className="slider-title-xemthem">
                <Link to={"/story"}>Xem Thêm...</Link>
              </div>
            </div>
            <div className="slider-content">
              {homestory.map((x) => (
                <Item key={x.id} {...x}></Item>
              ))}
            </div>
          </div>
        </div>
        <div className="advertisement">
          {/* {
      typeof(arrayadvertisement[0].HomeAdvertisementCultural1IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementCultural1}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementCultural1IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementCultural2IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementCultural2}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementCultural2IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementCultural3IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementCultural3}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementCultural3IMG[0].url} alt="" />
      </a>:null
    }
   {
      typeof(arrayadvertisement[0].HomeAdvertisementCultural4IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementCultural4}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementCultural4IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementCultural5IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementCultural5}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementCultural5IMG[0].url} alt="" />
      </a>:null
    } */}
        </div>
      </section>
    </>
  );
}

export default Index;
