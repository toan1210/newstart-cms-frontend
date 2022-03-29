import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem10({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img10[0].url;
    var link = iplink + car;
  return(
      <>
         <section className="one">
         <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content10)!== 'undefined'?
                  <h1>{arraydetaillstory.Content10}</h1>:null
                }
              
        </section>
      </>
  )
}

export default Subitem10;