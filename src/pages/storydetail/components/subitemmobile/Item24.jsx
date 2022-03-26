import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem24({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img24[0].url;
  var link = iplink + car;
  return(
      <>
            <img src={link}></img>
            {
                  typeof(arraydetaillstory.Content24)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content24}</h1>:null
              }
      </>
  )
}

export default Subitem24;