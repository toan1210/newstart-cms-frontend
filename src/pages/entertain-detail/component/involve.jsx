import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Invole({_id,title,author,status,category,date,images,sumary,content}) {
  let {ip} =useAuth();
  return (
      <>
      <div className="involve-content">
              <div className="involve-content__img">
                <a href={`/entertain/${_id}`}>
                  <img src={ip+"images/"+images} alt="" srcSet />
                </a>
              </div>
              <div className="involve-content__text">
              <a href={`/entertain/${_id}`}>
                  <h3>{title}</h3>
                </a>
                <div dangerouslySetInnerHTML={{__html:sumary}}></div>
              </div>
            </div>
      </>
  );
}

export default Invole;