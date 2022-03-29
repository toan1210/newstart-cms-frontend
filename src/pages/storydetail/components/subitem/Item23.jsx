import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem23({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img23[0].url;
    var link = iplink + car;
  return(
      <>
         <section className="one">
         <img src={`${link}`} alt="" srcset="" /> 
                {
                  typeof(arraydetaillstory.Content23)!== 'undefined'?
                  <h1>{arraydetaillstory.Content23}</h1>:null
                }
             
        </section>
      </>
  )
}

export default Subitem23;