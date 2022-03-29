import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem7({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img7[0].url;
  var link = iplink + car;
return(
    <>
      <section className="one" >
           <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content7)!== 'undefined'?
                  <h1>{arraydetaillstory.Content7}</h1>:null
                }
            
        </section>
    </>
)
}

export default Subitem7;