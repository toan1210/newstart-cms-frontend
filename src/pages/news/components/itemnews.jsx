import React from 'react';
import ReactMarkdown from 'react-markdown';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Itemnew({_id,author,date,longform,story,images,title,category,sumary}) {
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
        <div className="new-content-news">
        <a className="content-news" href={`/${url}/${_id}`}>  
            <div className="content-news-img">
            <img src={ip+"images/"+images} alt="" srcSet />
            </div>
            <div className="content-news-text">
              <div className="news-text-title">
              <h3>{title}</h3>
              </div>
              <div className="news-text-time">
              <span className="date">{timedate}</span>
                <span className="time" style={{marginLeft:5}}>{author}</span>
              </div>
              <div className="news-text-content">
              <div dangerouslySetInnerHTML={{__html:sumary}}></div>
              </div>
            </div>
          </a>
        </div>
      </>
  );
}

export default Itemnew;