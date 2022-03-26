import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitem21({arraydetaillstory}) {
  let {ipapi,iplink} = useAuth();
  var car = arraydetaillstory.Img21[0].url;
  var link = iplink + car;
return(
    <>
            <img src={link}></img>
             {
                  typeof(arraydetaillstory.Content21)!== 'undefined'?
                  <h1 className='caption'>{arraydetaillstory.Content21}</h1>:null
              }
    </>
)
}

export default Subitem21;