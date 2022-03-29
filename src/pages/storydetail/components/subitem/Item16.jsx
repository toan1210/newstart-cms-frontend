import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem16({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img16[0].url;
  var link = iplink + car;
return(
    <>
      <section className="one">
      <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content16)!== 'undefined'?
                  <h1>{arraydetaillstory.Content16}</h1>:null
                }
             
        </section>
    </>
)
}

export default Subitem16;