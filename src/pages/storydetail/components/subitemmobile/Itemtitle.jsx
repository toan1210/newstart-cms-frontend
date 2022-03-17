import React from 'react';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Subitemtitle({arraydetaillstory}) {
    let {ipapi,iplink} = useAuth();
    var car = arraydetaillstory.Avata[0].url;
   var link = iplink + car;
  return(
      <>
               <h1 className='the-article-title'>{arraydetaillstory.TieuDe}</h1>
      </>
  )
}

export default Subitemtitle;