import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        if(a.DanhMuc === "TheThaos")
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
        <h3>Thể Thao</h3>
        <div className="slider-title-xemthem">
        <Link to={'/story'}>Xem Thêm...</Link>
        </div>
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
      typeof(arrayadvertisement[0].HomeAdvertisementSport1IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementSport1}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementSport1IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementSport2IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementSport2}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementSport2IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementSport3IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementSport3}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementSport3IMG[0].url} alt="" />
      </a>:null
    }
   {
      typeof(arrayadvertisement[0].HomeAdvertisementSport4IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementSport4}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementSport4IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementSport5IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementSport5}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementSport5IMG[0].url} alt="" />
      </a>:null
    }
</div>
</section>

      </>
  )
}

export default Index;
