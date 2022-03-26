import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem14({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img14[0].url;
 var link = iplink + car;
return(
    <>
              <img src={link}></img>
              {
                  typeof(arraydetaillstory.Content14)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content14}</h1>:null
              }
    </>
)
}

export default Subitem14;