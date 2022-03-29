import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem14({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img14[0].url;
 var link = iplink + car;
return(
    <>
      <section className="one">
      <img src={`${link}`} alt="" srcset="" />
             {
                  typeof(arraydetaillstory.Content14)!== 'undefined'?
                  <h1>{arraydetaillstory.Content14}</h1>:null
                }
                
        </section>
    </>
)
}

export default Subitem14;