import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({arraystory}) {
  let {ipapi,iplink} = useAuth();
    var link =arraystory.Avata[0].url;
    // var date = arraystory.Time.slice(0,10);
    // var arraydate = date.split("-");
    // var datetime =[];
    // arraydate.forEach(function(x, y){
    //   datetime.unshift(arraydate[y]);
    // })
    // var Datetime = datetime.join("-");
    // //------------------------------
  return(
      <>
          <div className="section-content">
        <div className="section-content__img">
        <Link to={`/layoutstory/story/${arraystory.id}`}>
                <img src={iplink+link} alt="" srcSet />
          </Link>
        </div>
        <div className="section-content__text">
          <div className="content-title">
          <Link to={`/layoutstory/story/${arraystory.id}`}>
              <span>
               {arraystory.TieuDe}
              </span>
            </Link>
          </div>
          <div className="content-time">
          {/* <span className="date">{Datetime}</span>
            <span className="time" style={{marginLeft:5}}>{arraystory.TacGia}</span> */}
          </div>
          <div className="content-description">
            <span>
                {
                    arraystory.TomTat
                }
            </span>
          </div>
        </div>
      </div>
      </>
  )
}

export default Item1;