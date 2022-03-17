import React from 'react';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Index({id,TieuDe,Time,TacGia,Avata,TomTat,DanhMuc}) {
  let {ipapi,iplink} =useAuth();
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
       <div className="detail-care__content">
          <div className="care-content__img">
            <a href={`/${url}/${id}`}>
              <img src={iplink+link} alt="" srcSet />
            </a>
          </div>
          <div className="care-content__text">
          <a href={`/${url}/${id}`}>
              <h3>{TieuDe}</h3>
            </a>
            <p className="time">
              <span className="time-day">
                {Datetime}
              </span>
              <span className="DanhMuc">
               {TacGia}
              </span>
            </p>
            <span className="demo">
                {
                    TomTat
                }
            </span>
          </div>
        </div>
      </>
  );
}

export default Index;