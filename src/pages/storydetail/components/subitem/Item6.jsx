import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem6({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img6[0].url;
  var link = iplink + car;
return(
    <>
      <section className="one" >
          <img src={`${link}`} alt="" srcset="" />
                {
                  typeof(arraydetaillstory.Content6)!== 'undefined'?
                  <h1>{arraydetaillstory.Content6}</h1>:null
                }
        </section>
    </>
)
}

export default Subitem6;