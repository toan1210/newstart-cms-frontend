import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item5({news}) {
  let {ipapi,iplink} = useAuth();
  let url ='';
  if(news.DanhMuc === 'CongNghes')
  {
    url='technology';
  }
  else if(news.DanhMuc === 'DuLichs')
  {
    url='tourism';
  }
  else if(news.DanhMuc === 'HangHieus')
  {
    url='brandstuff';
  }
  else if(news.DanhMuc === 'SucKhoes')
  {
    url='living';
  }
  else if(news.DanhMuc === 'ThoiTrangs')
  {
    url='fashion';
  }
  else if(news.DanhMuc === 'DuLichs')
  {
    url='tourism';
  }
  else if(news.DanhMuc === 'Videos')
  {
    url='Video';
  }
  else if(news.DanhMuc === 'TinMois')
  {
    url='news';
  }
  else if(news.DanhMuc === 'KinhTes')
  {
    url='economy';
  }
  else if(news.DanhMuc === 'KinhTes')
  {
    url='economy';
  }
  else if(news.DanhMuc === 'VHXHs')
  {
    url='cultural';
  }
  else if(news.DanhMuc === 'GiaiTris')
  {
    url='entertain';
  }
  else if(news.DanhMuc === 'TheThaos')
  {
    url='sport';
  }
  else if(news.DanhMuc === 'AmThucs')
  {
    url='cuisine';
  }
  return(
      <>
      <div className="new__middo">
      <Link to={`/${url}/${news.id}`}>
                <img src={iplink+news.Avata[0].url} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/${url}/${news.id}`}>
                  {
                    news.TieuDe
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item5;