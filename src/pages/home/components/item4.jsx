import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({home}) {
  let {ip} =useAuth();
  let url ='';
  if(home.category === 'CongNghes')
  {
    url='technology';
  }
  else if(home.category === 'DuLichs')
  {
    url='tourism';
  }
  else if(home.category === 'HangHieus')
  {
    url='brandstuff';
  }
  else if(home.category === 'SucKhoes')
  {
    url='living';
  }
  else if(home.category === 'ThoiTrangs')
  {
    url='fashion';
  }
  else if(home.category === 'DuLichs')
  {
    url='tourism';
  }
  else if(home.category === 'Videos')
  {
    url='Video';
  }
  else if(home.category === 'TinMois')
  {
    url='news';
  }
  else if(home.category === 'KinhTes')
  {
    url='economy';
  }
  else if(home.category === 'KinhTes')
  {
    url='economy';
  }
  else if(home.category === 'VHXHs')
  {
    url='cultural';
  }
  else if(home.category === 'GiaiTris')
  {
    url='entertain';
  }
  else if(home.category === 'TheThaos')
  {
    url='sport';
  }
  else if(home.category === 'AmThucs')
  {
    url='cuisine';
  }
  return(
      <>
       <div className="new__left">
       <Link to={`/${url}/${home._id}`}>
                <img src={ip+"images/"+home.images} alt=""  />
              </Link>
              <p>
              <Link to={`/${url}/${home._id}`}>
                  {
                    home.title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;