import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../core/useAuth';
import Item from './Item';
let $ = window.$;
// import { Container } from './styles';

function Index({arrayadvertisement}) {
  let {ipapi,iplink} =useAuth();

  return(
      <>
      <section>
  <div className="advertisement">
  {
      typeof(arrayadvertisement[0].HomeAdvertisementNews1IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementNews1}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementNews1IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementNews2IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementNews2}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementNews2IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementNews3IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementNews3}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementNews3IMG[0].url} alt="" />
      </a>:null
    }
   {
      typeof(arrayadvertisement[0].HomeAdvertisementNews4IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementNews4}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementNews4IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementNews5IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementNews5}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementNews5IMG[0].url} alt="" />
      </a>:null
    }
</div>
</section>

      </>
  )
}

export default Index;
