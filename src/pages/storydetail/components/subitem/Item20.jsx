import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem20({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img20[0].url;
    var link = iplink + car;
  return(
      <>
         <section className="one">
         <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content20)!== 'undefined'?
                  <h1>{arraydetaillstory.Content20}</h1>:null
                }
              
        </section>
      </>
  )
}

export default Subitem20;