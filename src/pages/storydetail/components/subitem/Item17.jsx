import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem17({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img17[0].url;
  var link = iplink + car;
return(
    <>
      <section className="one">
      <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content17)!== 'undefined'?
                  <h1>{arraydetaillstory.Content17}</h1>:null
                }
              
        </section>
    </>
)
}

export default Subitem17;