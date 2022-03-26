import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem15({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img15[0].url;
 var link = iplink + car;
return(
    <>
            <img src={link}></img>
            {
                  typeof(arraydetaillstory.Content15)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content15}</h1>:null
              }
    </>
)
}

export default Subitem15;