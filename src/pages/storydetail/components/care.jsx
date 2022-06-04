import React from 'react';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Care({_id,title,author,status,category,date,images,sumary}) {
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
    time(date)
  return(
      <>
          <div className="care-content__item">
          <div className="content-item__img">
          <a href={`/layoutstory/story/${_id}`}>
                 <img src={ip+"images/"+images} alt="" srcSet />
            </a>
          </div>
          <div className="content-item__content">
            <div className="item-content__title">
            <a href={`/layoutstory/story/${_id}`}>
                <h2>{title}</h2>
              </a>
            </div>
            <div className="item-content__time">
              <span className="article-publish">
                {/* <span className="time">{TacGia}</span> */}
                {/* <span className="upload">{Datetime}</span> */}
              </span>
            </div>
          </div>
        </div>

      </>
  )
}

export default Care;