import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem15({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img15[0].url;
 var link = iplink + car;
return(
    <>
      <section className="one">
      <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content15)!== 'undefined'?
                  <h1>{arraydetaillstory.Content15}</h1>:null
                }
             
        </section>
    </>
)
}

export default Subitem15;