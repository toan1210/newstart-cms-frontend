import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem11({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img11[0].url;
   var link = iplink + car;
  return(
      <>
        <section className="one">
        <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content11)!== 'undefined'?
                  <h1>{arraydetaillstory.Content11}</h1>:null
                }
               
          </section>
      </>
  )
}

export default Subitem11;