import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem22({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img22[0].url;
  var link = iplink + car;
return(
    <>
      <section className="one">
      <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content22)!== 'undefined'?
                  <h1>{arraydetaillstory.Content22}</h1>:null
                }
              
        </section>
    </>
)
}

export default Subitem22;