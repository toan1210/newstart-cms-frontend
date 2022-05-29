import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import useAuth from '../../../../core/useAuth';

// import { Container } from './styles';

function Index({arraylogform}) {
  console.log("arraylogform",arraylogform)
  let {ip} =useAuth();
  return (
      <>
      <div className="home-content-left">
          <Link to={`/layout/logform/${arraylogform._id}`}>
            <img src={ip+"images/"+arraylogform.images} alt="" srcSet />
            </Link>
            <p className="title">
            <Link to={`/layout/logform/${arraylogform._id}`}> 
            <img src="img/10.png" alt="" srcSet />
               {arraylogform.title}
              </Link>
            </p>
            <p className="sub-text">
            <div dangerouslySetInnerHTML={{__html:arraylogform.sumary}}></div>
            </p>
          </div>
          </>
  )
}

export default Index;