import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem19({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img19[0].url;
    var link = iplink + car;
  return(
      <>
        <section className="one">
        <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content19)!== 'undefined'?
                  <h1>{arraydetaillstory.Content19}</h1>:null
                }
             
        </section>
      </>
  )
}

export default Subitem19;