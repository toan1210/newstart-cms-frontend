import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem10({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Img10[0].url;
    var link = iplink + car;
  return(
      <>
         <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
         <div className="container">
                {
                  typeof(arraydetaillstory.Content10)!== 'undefined'?
                  <h1>{arraydetaillstory.Content10}</h1>:null
                }
             </div> 
        </section>
      </>
  )
}

export default Subitem10;