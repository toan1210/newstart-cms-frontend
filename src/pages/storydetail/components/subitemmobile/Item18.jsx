import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem18({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img18[0].url;
    var link = iplink + car;
  return (
      <>
             <img src={link}></img>
             {
                  typeof(arraydetaillstory.Content18)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content18}</h1>:null
              }
      </>
  )
}

export default Subitem18;