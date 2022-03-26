import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem20({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img20[0].url;
    var link = iplink + car;
  return(
      <>
            <img src={link}></img>
              {
                  typeof(arraydetaillstory.Content20)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content20}</h1>:null
              }
      </>
  )
}

export default Subitem20;