import React from 'react';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Background({arraylogform}) {
  let {ipapi,iplink} = useAuth();
    var car = arraylogform.Avata[0].url;
   var link = iplink + car;
  return(
      <>
         <div className="topic-content" style={{ backgroundImage:`url(${link})`}}>
             <div className="container">
      <div className="topic-logo">
      </div>
      <div className="topic-description">
      
      </div>
    </div>
  </div>
      </>
  )
}

export default Background;