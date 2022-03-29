import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem5({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img5[0].url;
 var link = iplink + car;
return(
    <>
      <section className="one" >
               <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content5)!== 'undefined'?
                  <h1>{arraydetaillstory.Content5}</h1>:null
                }
        </section>
    </>
)
}

export default Subitem5;