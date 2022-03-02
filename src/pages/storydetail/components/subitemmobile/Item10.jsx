import React from 'react';

// import { Container } from './styles';

function Subitem10({arraydetaillstory}) {
    var ip= "http://localhost:2020/api";
    var car = arraydetaillstory.Img10[0].url;
    var link = ip + car;
  return(
      <>
            <img src={link}></img>
             <h1 className='caption'>{arraydetaillstory.Content10}</h1>
      </>
  )
}

export default Subitem10;