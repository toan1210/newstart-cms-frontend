import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({arraylogform}) {
  let {ip} = useAuth();
  var timedate ="";
  function time(datetime)
    {
      var time = new Date(datetime);
           let years = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDay();
            if(month < 10){
              month = "0" + month;
          }
          if(month < 10){
              day = "0" + day;
          }
         timedate = years + "-" + month + "-" + day;
    }
    time(arraylogform.date)
  return(
      <>
          <div className="section-content">
        <div className="section-content__img">
        <Link to={`/layout/logform/${arraylogform._id}`}>
                <img src={ip+"images/"+arraylogform.images} alt="" srcSet />
          </Link>
        </div>
        <div className="section-content__text">
          <div className="content-title">
          <Link to={`/layout/logform/${arraylogform._id}`}>
              <span>
               {arraylogform.title}
              </span>
            </Link>
          </div>
          <div className="content-time">
          <span className="date">{timedate}</span>
            <span className="time" style={{marginLeft:5}}>{arraylogform.author}</span>
          </div>
          <div className="content-description">
          <div dangerouslySetInnerHTML={{__html:arraylogform.sumary}}>
               
               </div>
          </div>
        </div>
      </div>
      </>
  )
}

export default Item1;