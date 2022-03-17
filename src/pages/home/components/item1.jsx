import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({home,arrayadvertisement}) {
  let {ipapi,iplink} =useAuth();
  let url ='';
  if(home.DanhMuc === 'CongNghes')
  {
    url='technology';
  }
  else if(home.DanhMuc === 'DuLichs')
  {
    url='tourism';
  }
  else if(home.DanhMuc === 'HangHieus')
  {
    url='brandstuff';
  }
  else if(home.DanhMuc === 'SucKhoes')
  {
    url='living';
  }
  else if(home.DanhMuc === 'ThoiTrangs')
  {
    url='fashion';
  }
  else if(home.DanhMuc === 'DuLichs')
  {
    url='tourism';
  }
  else if(home.DanhMuc === 'Videos')
  {
    url='Video';
  }
  else if(home.DanhMuc === 'TinMois')
  {
    url='news';
  }
  console.log(home.TieuDe);

  return(
      <>
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/${url}/${home.id}`}>
                <img src={iplink+home.Avata[0].url} alt=""  />
              </Link>
              <div className="left-title">
              <Link to={`/${url}/${home.id}`}>{home.TieuDe}</Link>
                <p>
                  {
                    home.TomTat
                  }
                </p>
              </div>
              <div className="left-quangcao">
              <a href={arrayadvertisement[0].HomeAdvertisementRight}>
                <img className="left-quangcao-img" src={iplink+arrayadvertisement[0].HomeAdvertisementRightIMG[0].url} alt="" />
                </a>
              </div>
            </div>
            <div className="left-content">
            </div>
          </div>
          <div className="right">
          </div>
        </div>
      </>
  );
}

export default Item1;