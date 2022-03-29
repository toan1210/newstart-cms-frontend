import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem25({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img25[0].url;
    var link = iplink + car;
  return(
      <>
         <section className="one">
         <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content25)!== 'undefined'?
                  <h1>{arraydetaillstory.Content25}</h1>:null
                }
              
        </section>
      </>
  )
}

export default Subitem25;