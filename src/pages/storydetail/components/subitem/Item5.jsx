import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem5({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img5[0].url;
 var link = iplink + car;
return(
    <>
      <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
            <div className="container">
               <h1>{arraydetaillstory.Content5}</h1>
             </div> 
        </section>
    </>
)
}

export default Subitem5;