import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem23({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img23[0].url;
    var link = iplink + car;
  return (
      <>
             <img src={link}></img>
             <h1 className='caption'>{arraydetaillstory.Content23}</h1>
      </>
  )
}

export default Subitem23;