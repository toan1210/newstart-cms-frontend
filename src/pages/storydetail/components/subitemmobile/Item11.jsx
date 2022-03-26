import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem11({arraydetaillstory}) {
    let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img11[0].url;
   var link = iplink + car;
  return(
      <>
               <img src={link}></img>
               {
                  typeof(arraydetaillstory.Content11)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content11}</h1>:null
              }
      </>
  )
}

export default Subitem11;