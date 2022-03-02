import React from 'react';

// import { Container } from './styles';

function Subitem10({arraydetaillstory}) {
    var ip= "http://localhost:2020/api";
    var car = arraydetaillstory.Img10[0].url;
    var link = ip + car;
  return(
      <>
         <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
             <h1>{arraydetaillstory.Content10}</h1>
        </section>
      </>
  )
}

export default Subitem10;