import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item2({home}) {
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
  return(
      <>
      <div className="new__left">
        <Link to={`/${url}/${home.id}`}>
                <img src={iplink+home.Avata[0].url} alt=""  />
              </Link>
              <p>
              <Link to={`/${url}/${home.id}`}>
                  {
                    home.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item2;