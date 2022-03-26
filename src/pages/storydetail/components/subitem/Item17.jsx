import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem17({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img17[0].url;
  var link = iplink + car;
return(
    <>
      <section className="one" style={{ backgroundImage:`url(${link})`,backgroundRepeat:'no-repeat',backgroundAttachment: 'fixed',backgroundSize: 'cover'}}>
            <div className="container"> 
                {
                  typeof(arraydetaillstory.Content17)!== 'undefined'?
                  <h1>{arraydetaillstory.Content17}</h1>:null
                }
             </div>
        </section>
    </>
)
}

export default Subitem17;