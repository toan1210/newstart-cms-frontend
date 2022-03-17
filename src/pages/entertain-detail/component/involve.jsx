import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Invole({id,TieuDe,Avata,TacGia,TomTat}) {
  let {ipapi,iplink} =useAuth();
    var link =Avata[0].url;
    
  return (
      <>
      <div className="involve-content">
              <div className="involve-content__img">
                <a href={`/entertain/${id}`}>
                  <img src={iplink+link} alt="" srcSet />
                </a>
              </div>
              <div className="involve-content__text">
              <a href={`/entertain/${id}`}>
                  <h3>{TieuDe}</h3>
                </a>
                <span>{TomTat}</span>
              </div>
            </div>
      </>
  );
}

export default Invole;