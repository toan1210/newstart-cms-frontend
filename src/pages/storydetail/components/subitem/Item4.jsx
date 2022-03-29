import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem4({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img4[0].url;
 var link = iplink + car;
return(
    <>
      <section className="one">
      <img src={`${link}`} alt="" srcset="" />
               {
                  typeof(arraydetaillstory.Content4)!== 'undefined'?
                  <h1>{arraydetaillstory.Content4}</h1>:null
                }
        </section>
    </>
)
}

export default Subitem4;