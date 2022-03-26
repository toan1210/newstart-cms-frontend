import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem16({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img16[0].url;
  var link = iplink + car;
return(
    <>
            <img src={link}></img>
            {
                  typeof(arraydetaillstory.Content16)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content16}</h1>:null
              }
    </>
)
}

export default Subitem16;