import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem3({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img3[0].url;
 var link = iplink + car;
return(
    <>
      <section className="one">
      <img src={`${link}`} alt="" srcset="" />
              {
                  typeof(arraydetaillstory.Content3)!== 'undefined'?
                  <h1>{arraydetaillstory.Content3}</h1>:null
               }
        </section>
    </>
)
}

export default Subitem3;