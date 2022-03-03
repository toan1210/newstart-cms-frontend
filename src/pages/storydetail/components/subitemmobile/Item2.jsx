import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem2({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img2[0].url;
 var link = iplink + car;
return(
    <>
              <img src={link}></img>
             <h1 className='caption'>{arraydetaillstory.Content2}</h1>
             
    </>
)
}

export default Subitem2;