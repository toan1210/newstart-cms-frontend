import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

    function Item2({arraylogform}) {
      let {ipapi,iplink} =useAuth();
  var img =arraylogform.Avata[0].url ;

  return(
      <>
      <div className="right-item1-left">
      <Link to={`/layout/logform/${arraylogform.id}`}>
            <img src={iplink + img } alt="" srcSet />
            </Link>
                <p className="item1-left-title">
                <Link to={`/layout/logform/${arraylogform.id}`}> 
                 <img src="img/10.png" alt="" srcSet />
                   {arraylogform.Title}
                  </Link>
                </p>
              </div>
        </>
  )
}

export default Item2;