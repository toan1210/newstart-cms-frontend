import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({news}) {
  let {ip} = useAuth();
  let url ='';
  if(news.category === 'CongNghes')
  {
    url='technology';
  }
  else if(news.category === 'DuLichs')
  {
    url='tourism';
  }
  else if(news.category === 'HangHieus')
  {
    url='brandstuff';
  }
  else if(news.category === 'SucKhoes')
  {
    url='living';
  }
  else if(news.category === 'ThoiTrangs')
  {
    url='fashion';
  }
  else if(news.category === 'DuLichs')
  {
    url='tourism';
  }
  else if(news.category === 'Videos')
  {
    url='Video';
  }
  else if(news.category === 'TinMois')
  {
    url='news';
  }
  else if(news.category === 'KinhTes')
  {
    url='economy';
  }
  else if(news.category === 'KinhTes')
  {
    url='economy';
  }
  else if(news.category === 'VHXHs')
  {
    url='cultural';
  }
  else if(news.category === 'GiaiTris')
  {
    url='entertain';
  }
  else if(news.category === 'TheThaos')
  {
    url='sport';
  }
  else if(news.category === 'AmThucs')
  {
    url='cuisine';
  }
  return(
      <>
       <div className="new__left">
       <Link to={`/${url}/${news._id}`}>
                <img src={ip+"images/"+news.images} alt="" srcSet />
              </Link>
              <p>
              <Link to={`/${url}/${news._id}`}>
                  {
                    news.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;