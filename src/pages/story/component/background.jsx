import React from 'react';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Background({arraystory}) {
  let {ip} = useAuth();
  return(
      <>
         <div className="topic-content" style={{ backgroundImage:`url(${ip+"images/"+arraystory.images})`}}>
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