import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Index({arraylogform}) {
  let {ipapi,iplink} =useAuth();
  var img =arraylogform.Avata[0].url ;
  return (
      <>
      <div className="home-content-left">
          <Link to={`/layout/logform/${arraylogform.id}`}>
            <img src={iplink + img } alt="" srcSet />
            </Link>
            <p className="title">
            <Link to={`/layout/logform/${arraylogform.id}`}> 
            <img src="img/10.png" alt="" srcSet />
               {arraylogform.Title}
              </Link>
            </p>
            <p className="sub-text">
              {arraylogform.Description}
            </p>
          </div>
          </>
  )
}

export default Index;