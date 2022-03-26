import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem1({arraydetaillstory}) {
    let {ipapi,iplink} = useAuth();
      var car = arraydetaillstory.Img1[0].url;
      var link = iplink + car;
  return(
      <>
               <img src={link}></img>
               {
                  typeof(arraydetaillstory.Content1)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content1}</h1>:null
                }
             
      </>
  )
}

export default Subitem1;