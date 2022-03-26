import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem7({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img7[0].url;
  var link = iplink + car;
return(
    <>
            <img src={link}></img>
                {
                  typeof(arraydetaillstory.Content7)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content7}</h1>:null
                }
    </>
)
}

export default Subitem7;