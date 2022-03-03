import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item4({home}) {
  let {ipapi,iplink} =useAuth();
  let url ='';
  if(home.Category === 'CongNghes')
  {
    url='technology';
  }
  else if(home.Category === 'DuLichs')
  {
    url='tourism';
  }
  else if(home.Category === 'HangHieus')
  {
    url='brandstuff';
  }
  else if(home.Category === 'SucKhoes')
  {
    url='living';
  }
  else if(home.Category === 'ThoiTrangs')
  {
    url='fashion';
  }
  else if(home.Category === 'DuLichs')
  {
    url='tourism';
  }
  else if(home.Category === 'Videos')
  {
    url='Video';
  }
  else if(home.Category === 'TinMois')
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
                    home.Title
                  }
                </Link>
              </p>
            </div>
      </>
  );
}

export default Item4;