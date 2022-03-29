import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem21({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img21[0].url;
  var link = iplink + car;
return(
    <>
      <section className="one">
      <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content21)!== 'undefined'?
                  <h1>{arraydetaillstory.Content21}</h1>:null
                }
              
        </section>
    </>
)
}

export default Subitem21;