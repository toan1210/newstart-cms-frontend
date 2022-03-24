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
             <h1 className='caption'>{arraydetaillstory.Content14}</h1>
            
    </>
)
}

export default Subitem14;