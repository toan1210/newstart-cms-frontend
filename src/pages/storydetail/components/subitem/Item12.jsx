import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem12({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img12[0].url;
 var link = iplink + car;
return(
    <>
      <section className="one">
      <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content12)!== 'undefined'?
                  <h1>{arraydetaillstory.Content12}</h1>:null
                }
             
        </section>
    </>
)
}

export default Subitem12;