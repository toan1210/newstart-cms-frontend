import React from 'react';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Itemnew({Content,Time,Title,Avata,Description,id,Authorasd}) {
  let {ipapi,iplink} = useAuth();
  //---------------Time--------
  var date = Time.slice(0,10);
  var arraydate = date.split("-");
  var datetime =[];
  arraydate.forEach(function(x, y){
    datetime.unshift(arraydate[y]);
  })
  var Datetime = datetime.join("-");
  //------------------------------
  return(
      <>
        <div className="new-content-news">
        <a className="content-news" href={`/news/${id}`}>  
            <div className="content-news-img">
            <img src={iplink+Avata[0].url} alt="" srcSet />
            </div>
            <div className="content-news-text">
              <div className="news-text-title">
              <h3>{Title}</h3>
              </div>
              <div className="news-text-time">
              <span className="date">{Datetime}</span>
                <span className="time" style={{marginLeft:5}}>{Authorasd}</span>
              </div>
              <div className="news-text-content">
                <p>
                    {
                      Description
                    }
                </p>
              </div>
            </div>
          </a>
        </div>
      </>
  );
}

export default Itemnew;