import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem13({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img13[0].url;
 var link = iplink + car;
return(
    <>
            <img src={link}></img>
            {
                  typeof(arraydetaillstory.Content13)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content13}</h1>:null
              }
    </>
)
}

export default Subitem13;