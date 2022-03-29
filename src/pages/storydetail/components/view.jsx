import React from 'react';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function View({id,TieuDe,Time,TacGia,Avata,TomTat,DanhMuc}) {
  let {ipapi,iplink} = useAuth();
    var link =Avata[0].url;
      //---------------Time--------
        var date = Time.slice(0,10);
        var arraydate = date.split("-");
        var datetime =[];
        arraydate.forEach(function(x, y){
         datetime.unshift(arraydate[y]);
  })
  var Datetime = datetime.join("-");
  //------------------------------
  let url ='';
  if(DanhMuc === 'CongNghes')
  {
    url='technology';
  }
  else if(DanhMuc === 'DuLichs')
  {
    url='tourism';
  }
  else if(DanhMuc === 'HangHieus')
  {
    url='brandstuff';
  }
  else if(DanhMuc === 'SucKhoes')
  {
    url='living';
  }
  else if(DanhMuc === 'ThoiTrangs')
  {
    url='fashion';
  }
  else if(DanhMuc === 'DuLichs')
  {
    url='tourism';
  }
  else if(DanhMuc === 'Videos')
  {
    url='Video';
  }
  else if(DanhMuc === 'TinMois')
  {
    url='news';
  }
  else if(DanhMuc === 'KinhTes')
  {
    url='economy';
  }
  else if(DanhMuc === 'KinhTes')
  {
    url='economy';
  }
  else if(DanhMuc === 'VHXHs')
  {
    url='cultural';
  }
  else if(DanhMuc === 'GiaiTris')
  {
    url='entertain';
  }
  else if(DanhMuc === 'TheThaos')
  {
    url='sport';
  }
  else if(DanhMuc === 'AmThucs')
  {
    url='cuisine';
  }
  return(
      <>
      <div className="section-seemore__content">
        <div className="seemore-content__img">
        <a href={`/${url}/${id}`}>
              <img src={iplink+link} alt="" srcSet />
            </a>
        </div>
        <div className="content-text">
          <div className="seemore__content-text">
          <a href={`/${url}/${id}`}>
              <h3>{TieuDe}</h3>
            </a>
          </div>
          <div className="article-meta">
            <span className="article-publish">
              <span className="time">{TacGia}</span>
              <span className="date"> {Datetime}</span>
            </span>
            <span className="article">
                 {
                    TomTat
                }
            </span>
          </div>
        </div>
      </div>
      </>
  )
}

export default View;