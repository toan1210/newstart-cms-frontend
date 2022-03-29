import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem1({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img1[0].url;
    var link = iplink + car;
  return(
      <>
        <section className="one">
                <img src={`${link}`} alt="" srcset="" />
               {
                  typeof(arraydetaillstory.Content1)!== 'undefined'?
                    <h1 >{arraydetaillstory.Content1}</h1>:null
               }
          </section>
      </>
  )
}

export default Subitem1;