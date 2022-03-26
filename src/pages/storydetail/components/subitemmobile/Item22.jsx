import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem22({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img22[0].url;
  var link = iplink + car;
return(
    <>
            <img src={link}></img>
              {
                  typeof(arraydetaillstory.Content22)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content22}</h1>:null
              }
    </>
)
}

export default Subitem22;