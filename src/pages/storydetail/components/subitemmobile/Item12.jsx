import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem12({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img12[0].url;
 var link = iplink + car;
return(
    <>
              <img src={link}></img>
              {
                  typeof(arraydetaillstory.Content12)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content12}</h1>:null
              }
    </>
)
}

export default Subitem12;