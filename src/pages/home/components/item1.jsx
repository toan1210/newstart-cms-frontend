import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';

// import { Container } from './styles';

function Item1({home,arrayadvertisement}) {
  let {ip} =useAuth();
  let url ='';
  console.log("home",home);
  if(home.category === 'CongNghes')
  {
    url='technology';
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
      <div className="page__home-content">
          <div className="left">
            <div className="left__header">
            <Link to={`/${url}/${home._id}`}>
                <img src={ip+"images/"+home.images} alt=""  />
              </Link>
              <div className="left-title">
              <Link to={`/${url}/${home._id}`}>{home.title}</Link>
              <div dangerouslySetInnerHTML={{__html:home.sumary}}>
               
               </div>
              </div>
              <div className="left-quangcao">
              <a href="">
                <img className="left-quangcao-img" src={ip+"images/"+arrayadvertisement[0].tourism} alt="" />
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