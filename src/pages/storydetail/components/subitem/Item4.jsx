import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem4({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img4[0].url;
 var link = iplink + car;
return(
    <>
      <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
             <div className="container">
                <h1>{arraydetaillstory.Content4}</h1>
                </div>
        </section>
    </>
)
}

export default Subitem4;