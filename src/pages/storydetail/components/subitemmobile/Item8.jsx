import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem8({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img8[0].url;
    var link = iplink + car;
  return (
      <>
             <img src={link}></img>
                {
                  typeof(arraydetaillstory.Content8)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content8}</h1>:null
                }
      </>
  )
}

export default Subitem8;