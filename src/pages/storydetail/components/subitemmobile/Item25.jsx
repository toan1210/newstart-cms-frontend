import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem25({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img25[0].url;
    var link = iplink + car;
  return(
      <>
            <img src={link}></img>
            {
                  typeof(arraydetaillstory.Content25)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content25}</h1>:null
              }
      </>
  )
}

export default Subitem25;