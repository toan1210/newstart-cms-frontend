import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../core/useAuth';
import Item from './Item';
let $ = window.$;
// import { Container } from './styles';

function Sprot({story,arrayadvertisement,arrayhome,}) {
  let {ipapi,iplink} =useAuth();
  useEffect(() =>{
    let slidershow = 4;
    let auto = false;
    let header = $(".headerr").height();
    let height = header + header / 3;
    let slider = $(".slider");
    let sliderwidth = slider.width();
    if (sliderwidth <= 987 && sliderwidth >= 764) {
      slidershow = 3;
      auto = true;
    } else if (sliderwidth <= 763) {
      slidershow = 1;
      auto = true;
    }
    $(".slider-content").slick({
        slidesToShow: slidershow,
        slidesToScroll: 1,
        centerMode: true,
        infinite: true,
        // appendArrows: $(".slick-slider-nav"),
        // prevArrow: "<button className='slick-prev btn btn-white rounded-circle'><i className='mdi mdi-chevron-left' /></button>",
        // nextArrow: "<button className='slick-next btn btn-white rounded-circle'><i className='mdi mdi-chevron-right'></i></button>",
      });
      $(".advertisement").slick({
        slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      });
  },[])
  var arraysport =[];
  function filter(x)
  {
    x.forEach((a,b) => {
        if(a.DanhMuc === "CongNghes")
        {
          arraysport.push(a);
        }
    });
  }
  filter(story);
  arraysport = arraysport.reverse();
  
  var arrayall =[];
  function filter1(x)
  {
    x.forEach((a,b) => {
        if(a.DanhMuc === "CongNghes")
        {
          arrayall.push(a);
        }
    });
  }
  filter1(arrayhome)
  arrayall = arrayall.reverse();
  var arrrrray = [...arrayall,...arraysport]

  var homestory = arrrrray.sort(function(a,b)
  {
    return(new Date(a.Time).getTime()) - (new Date(b.Time).getTime())
  })
  homestory = homestory.reverse();

console.log(homestory);

  return(
      <>
      <section>
  <div className="slider tablet">
    <div className="container ">
      <div className="slider-title">
        <h3>Công Nghệ</h3>
        <div className="slider-title-xemthem">
        <Link to={'/story'}>Xem Thêm...</Link>
        </div>
      </div>
      <div className="slider-content">
        {
            homestory.map(x =>
                <Item key={x.id} {...x}></Item>
            )
        }
      </div>
      <div className="slick-slider-nav" />
       <div className="slick-slider-dots" />
    </div>
  </div>
  <div className="advertisement">
  {
      typeof(arrayadvertisement[0].HomeAdvertisementTechnology1IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementTechnology1}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementTechnology1IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementTechnology2IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementTechnology2}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementTechnology2IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementTechnology3IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementTechnology3}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementTechnology3IMG[0].url} alt="" />
      </a>:null
    }
   {
      typeof(arrayadvertisement[0].HomeAdvertisementTechnology4IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementTechnology4}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementTechnology4IMG[0].url} alt="" />
      </a>:null
    }
    {
      typeof(arrayadvertisement[0].HomeAdvertisementTechnology5IMG[0]) !== 'undefined'?
      <a href={arrayadvertisement[0].HomeAdvertisementTechnology5}>
      <img className="advertisementimg" src={iplink+arrayadvertisement[0].HomeAdvertisementTechnology5IMG[0].url} alt="" />
      </a>:null
    }
</div>
</section>

      </>
  )
}

export default Sprot;
