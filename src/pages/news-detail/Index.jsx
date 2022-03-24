import React, { useEffect, useState } from 'react';
import Invole from './component/involve';
import ReactMarkdown from 'react-markdown';
import Care from './component/care';
import { useRouteMatch } from 'react-router-dom';
import useAuth from '../../core/useAuth';
// import { Container } from './styles';

function Index() {
  let {ipapi,iplink} = useAuth();
  let {slug} = useRouteMatch().params;
  const [state,setState] = useState({
      listnew:null,
      allnew:null,
  })
  useEffect(() =>{
      Promise.all([
          fetch(`${ipapi}/homes/${slug}`).then(res =>res.json()),
          fetch(`${ipapi}/homes/`).then(res =>res.json()),
      ])
          .then(([res1,res2]) =>{
              setState({
                  listnew:res1,
                  allnew:res2,
              })
          })
  },[slug])
  let {listnew,allnew} = state;
  if(!listnew && !allnew ) return 'loading...';
  setTimeout(images, 100);
  function images()
  {
      var detailimg = document.querySelectorAll('p>img');
      detailimg.forEach(function (x, y) {
    if(x.getAttribute("src").lastIndexOf("uploads") > 0)
    {
      if(x.getAttribute("src").lastIndexOf(`${iplink}`)<0)
      {
          x.setAttribute("src",`${iplink}`+x.getAttribute("src"));
      }
    }
      });
  }
  var date = state.listnew.Time.slice(0,10);
  var arraydate = date.split("-");
  var datetime =[];
  let arrayallnews = state.allnew.reverse();
  arraydate.forEach(function(x, y){
    datetime.unshift(arraydate[y]);
  })
  var Datetime = datetime.join("-");
  //----------------------------------------
  var arraynews =[];
  function filter(x)
  {
    x.forEach((a,b) => {
        if(a.DanhMuc === "TinMois")
        {
          arraynews.push(a);
        }
    });
  }
  filter(state.allnew);
  var arraykhac =[];
  function filter2(x)
  {
    x.forEach((a,b) => {
        if(a.DanhMuc !== "TinMois")
        {
          arraykhac.push(a);
        }
    });
  }
  filter2(state.allnew);
  return(
    <>
          <main className="page-detail">
  <div className="container">
    <div className="detail-type">
      <a href>
        <h3>
          
        </h3>
      </a>
    </div>
    <div className="detail-title">
      <h1>
        {state.listnew.TieuDe}
      </h1>
    </div>
    <div className="detail-article">
      <div className="detail-article-author">
        <span>{state.listnew.TacGia}</span>
      </div>
      <div className="detail-article-time">
        <span>{Datetime}</span>
      </div>
    </div>
    <div className="detail-content">
      <div className="detail-content__left">
        <div className="content-left detail-left">
          <ReactMarkdown>{state.listnew.NoiDung}</ReactMarkdown>
        </div>
        <div className="detail-involve">
          <h2>Bài Liên Quan</h2>
          <div className="detail-involve__content">
              {
                arraynews.map((x,y)=>
                    y<=2?<Invole key={x.id} {...x}></Invole>:null
                )
              }
          </div>
        </div>
      </div>
      <div className="detail-content__right">
      </div>
    </div>
    <div className="detail-care">
      <div className="detail-care__left">
        <div className="detail-care__title">
          <h2>BẠN CÓ THỂ QUAN TÂM</h2>
        </div>
            {
                arraykhac.map((x,y)=>
                  y<=30?<Care key={x.id} {...x}></Care>:null
                )
              }
      </div>
      <div className="detail-care__right" />
    </div>
  </div>
</main>
    </>
  )
}

export default Index;