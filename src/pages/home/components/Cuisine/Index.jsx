import React, { useEffect } from 'react';
import useAuth from '../../../../core/useAuth';
import Item from './Item';
let $ = window.$;
// import { Container } from './styles';

function Index({story,arrayadvertisement}) {
  let {ipapi,iplink} =useAuth();
  var arrayeconomy =[];
  function filter(x)
  {
    x.forEach((a,b) => {
        if(a.DanhMuc === "AmThucs")
        {
          arrayeconomy.push(a);
        }
    });
  }
  filter(story);
  return(
      <>
      <section>
  <div className="slider tablet">
    <div className="container">
      <div className="slider-title">
        <h3>Ẩm Thực </h3>
      </div>
      <div className="slider-content">
        {
            arrayeconomy.map(x =>
                <Item key={x.id} {...x}></Item>
            )
        }
      </div>
    </div>
  </div>
  <div className="advertisement">
    {
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
    }
</div>
</section>

      </>
  )
}

export default Index;
