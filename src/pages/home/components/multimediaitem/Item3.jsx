import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Item3({arraylogform}) {
  let {ip} =useAuth();
  return(
      <>
      <div className="right-item1-right">
          <Link to={`/layout/logform/${arraylogform._id}`}>
                <img src={ip+"images/"+arraylogform.images} alt="" srcSet />
            </Link>
                <p className="item1-right-title">
                <Link to={`/layout/logform/${arraylogform._id}`}> 
                 <img src="img/10.png" alt="" srcSet />
                   {arraylogform.title}
                  </Link>
                </p>
              </div>
        </>
  )
}

export default Item3;