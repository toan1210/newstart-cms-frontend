import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem3({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img3[0].url;
 var link = iplink + car;
return(
    <>
      <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
            <div className="container">
              {
                  typeof(arraydetaillstory.Content3)!== 'undefined'?
                  <div className="boder">
                  <h1>{arraydetaillstory.Content3}</h1>
                  </div>:null
               }
             </div>
        </section>
    </>
)
}

export default Subitem3;