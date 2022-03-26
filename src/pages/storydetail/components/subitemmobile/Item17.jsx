import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem17({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img17[0].url;
  var link = iplink + car;
return(
    <>
            <img src={link}></img>
             {
                  typeof(arraydetaillstory.Content17)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content17}</h1>:null
              }
    </>
)
}

export default Subitem17;