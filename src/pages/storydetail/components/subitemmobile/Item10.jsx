import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem10({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img10[0].url;
    var link = iplink + car;
  return(
      <>
            <img src={link}></img>
            {
                  typeof(arraydetaillstory.Content10)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content10}</h1>:null
              }
      </>
  )
}

export default Subitem10;