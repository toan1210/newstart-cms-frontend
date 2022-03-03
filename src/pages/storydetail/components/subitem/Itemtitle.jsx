import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitemtitle({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Avata[0].url;
   var link = iplink + car;
  return(
      <>
        <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
               <h1>{arraydetaillstory.Title}</h1>
          </section>
      </>
  )
}

export default Subitemtitle;