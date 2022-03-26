import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem5({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img5[0].url;
 var link = iplink + car;
return(
    <>
            <img src={link}></img>
               {
                  typeof(arraydetaillstory.Content5)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content5}</h1>:null
                }
    </>
)
}

export default Subitem5;