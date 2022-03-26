import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem9({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img9[0].url;
  var link = iplink + car;
  return(
      <>
            <img src={link}></img>
              {
                  typeof(arraydetaillstory.Content9)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content9}</h1>:null
              }
      </>
  )
}

export default Subitem9;