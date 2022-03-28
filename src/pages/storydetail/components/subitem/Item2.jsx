import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem2({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  console.log(arraydetaillstory);
  var car = arraydetaillstory.Img2[0].url;
  var link = iplink + car;
return(
    <>
      <section className="one" style={{backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
            <img src={`${link}`} alt="" srcset="" />
            {  
                  typeof(arraydetaillstory.Content2)!== 'undefined'?
                  <h1>{arraydetaillstory.Content2}</h1>:null
               }
        </section>
    </>
)
}

export default Subitem2;