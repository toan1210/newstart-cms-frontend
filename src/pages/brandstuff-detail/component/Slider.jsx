import React, { useEffect } from 'react';
let $ = window.$;
// import { Container } from './styles';

function Slider() {
    useEffect(() =>{
            $(".aadvertisement").slick({
              slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true,
            });
    },[])
  return(
      <>
      <section>
      <div className="aadvertisement">
               <img className="advertisementimg" src="/img/Advertisement.png" alt="" />
               <img className="advertisementimg" src="/img/Advertisement.png" alt="" />
               <img className="advertisementimg" src="/img/Advertisement.png" alt="" />
               <img className="advertisementimg" src="/img/Advertisement.png" alt="" />
    </div>
    </section>
      
      </>
  );
}

export default Slider;