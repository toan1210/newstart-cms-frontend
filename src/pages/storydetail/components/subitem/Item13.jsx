import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem13({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img13[0].url;
 var link = iplink + car;
return(
    <>
      <section className="one">
      <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content13)!== 'undefined'?
                  <h1>{arraydetaillstory.Content13}</h1>:null
                }
             
        </section>
    </>
)
}

export default Subitem13;