import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem9({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img9[0].url;
    var link = iplink + car;
  return(
      <>
        <section className="one">
        <img src={`${link}`} alt="" srcset="" />
                 {
                  typeof(arraydetaillstory.Content9)!== 'undefined'?
                  <h1>{arraydetaillstory.Content9}</h1>:null
                }
             
        </section>
      </>
  )
}

export default Subitem9;