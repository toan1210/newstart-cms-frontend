import React from 'react';

// import { Container } from './styles';

function Subitem9({arraydetaillstory}) {
    var ip= "http://localhost:2020/api";
    var car = arraydetaillstory.Img9[0].url;
    var link = ip + car;
  return(
      <>
        <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
             <h1>{arraydetaillstory.Content9}</h1>
        </section>
      </>
  )
}

export default Subitem9;