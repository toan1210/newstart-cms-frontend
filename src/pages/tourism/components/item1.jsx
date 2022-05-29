import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({tourism,arrayadvertisements}) {
  let {ip} = useAuth();
  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/tourism/${tourism._id}`}>
                <img src={ip+"images/"+tourism.images} alt="" srcSet />
              </Link>
              <div className="left-title">
              <Link to={`/tourism/${tourism._id}`}>{tourism.title}</Link>
              <div dangerouslySetInnerHTML={{__html:tourism.sumary}}></div>
              </div>
              <div className="left-quangcao">
              

              </div>
            </div>
            <div className="left-content">
            </div>
          </div>
          <div className="right">
          </div>
        </div>
      </>
  );
}

export default Item1;