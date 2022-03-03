import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Invole({id,Title,Avata,authorasd,Description}) {
  let {ipapi,iplink} = useAuth();
    var link =Avata[0].url;
    
  return (
      <>
      <div className="involve-content">
              <div className="involve-content__img">
                <a href={`/technology/${id}`}>
                  <img src={iplink+link} alt="" srcSet />
                </a>
              </div>
              <div className="involve-content__text">
                <a href>
                  <h3>{Title}</h3>
                </a>
                <span>{Description}</span>
              </div>
            </div>
      </>
  );
}

export default Invole;