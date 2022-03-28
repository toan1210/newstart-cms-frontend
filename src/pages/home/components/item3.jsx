import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item3({home}) {
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
  else if(home.DanhMuc === 'KinhTes')
  {
    url='economy';
  }
  else if(home.DanhMuc === 'KinhTes')
  {
    url='economy';
  }
  else if(home.DanhMuc === 'VHXHs')
  {
    url='cultural';
  }
  else if(home.DanhMuc === 'GiaiTris')
  {
    url='entertain';
  }
  else if(home.DanhMuc === 'TheThaos')
  {
    url='sport';
  }
  else if(home.DanhMuc === 'AmThucs')
  {
    url='cuisine';
  }
  return(
      <>
       <div className="new__middo">
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

export default Item3;