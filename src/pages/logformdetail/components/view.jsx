import React from 'react';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function View({_id,title,author,status,category,date,images,sumary}) {
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
  let url ='';
  if(category === 'CongNghes')
  {
    url='technology';
  }
  else if(category === 'DuLichs')
  {
    url='tourism';
  }
  else if(category === 'HangHieus')
  {
    url='brandstuff';
  }
  else if(category === 'SucKhoes')
  {
    url='living';
  }
  else if(category === 'ThoiTrangs')
  {
    url='fashion';
  }
  else if(category === 'DuLichs')
  {
    url='tourism';
  }
  else if(category === 'Videos')
  {
    url='Video';
  }
  else if(category === 'TinMois')
  {
    url='news';
  }
  else if(category === 'KinhTes')
  {
    url='economy';
  }
  else if(category === 'KinhTes')
  {
    url='economy';
  }
  else if(category === 'VHXHs')
  {
    url='cultural';
  }
  else if(category === 'GiaiTris')
  {
    url='entertain';
  }
  else if(category === 'TheThaos')
  {
    url='sport';
  }
  else if(category === 'AmThucs')
  {
    url='cuisine';
  }
  return(
      <>
      <div className="section-seemore__content">
        <div className="seemore-content__img">
        <a href={`/${url}/${_id}`}>
              <img src={ip+"images/"+images} alt="" srcSet />
            </a>
        </div>
        <div className="content-text">
          <div className="seemore__content-text">
          <a href={`/${url}/${_id}`}>
              <h3>{title}</h3>
            </a>
          </div>
          <div className="article-meta">
            <span className="article-publish">
              <span className="time">{author}</span>
              <span className="date"> {timedate}</span>
            </span>
            <span className="article">
            <div dangerouslySetInnerHTML={{__html:sumary}}>
               
               </div>
            </span>
          </div>
        </div>
      </div>
      </>
  )
}

export default View;