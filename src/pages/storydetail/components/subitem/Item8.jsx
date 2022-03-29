import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem8({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img8[0].url;
    var link = iplink + car;
  return(
      <>
         <section className="one" >
         <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content8)!== 'undefined'?
                  <h1>{arraydetaillstory.Content8}</h1>:null
                }
             
        </section>
      </>
  )
}

export default Subitem8;