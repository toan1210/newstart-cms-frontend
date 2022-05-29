import React, { useEffect, useState } from 'react';
import { useRouteMatch,Link } from 'react-router-dom';
import Care from './component/care';
import Invole from './component/involve';
import ReactMarkdown from 'react-markdown';
import useAuth from '../../core/useAuth';
let $ =window.$;
// import { Container } from './styles';

function Index() {
    let {ip} =useAuth();
    let {slug} = useRouteMatch().params;
    const [state,setState] = useState({
        listnew:null,
        allnew:null,
        arrayadvertisements:null,
    })
    useEffect(() =>{
        Promise.all([
          fetch(`${ip}traditional/${slug}`).then(res =>res.json()),
          fetch(`${ip}traditional/traditionalapi`).then(res =>res.json()),
          fetch(`${ip}arrayadvertisements/arrayadvertisementsapi`).then(res =>res.json()),
          ])
            .then(([res1,res2,res3]) =>{
                setState({
                    listnew:res1,
                    allnew:res2,
                    arrayadvertisements:res3,
                })
            })
            window.onscroll = function(){
              var detail = $(".detail-content");
              var detailsrcoll = Math.round(detail.offset().top);
              var windowscroll = window.pageYOffset;
              console.log(detailsrcoll,windowscroll)
              if(detailsrcoll < Math.round(windowscroll))
              {
                $(".left-quangcao").addClass("active3");
              }
             else if(detailsrcoll > Math.round(windowscroll))
              {
                $(".left-quangcao").removeClass("active3");
              }
            }
    },[slug])
    let {listnew,allnew,arrayadvertisements} = state;
    if(!listnew && !allnew && !arrayadvertisements ) return 'loading...';
    var timedate ="";
    function time(datetime)
    {
      var time = new Date(datetime);
           let years = time.getFullYear();
            let month = time.getMonth() + 1;
            let day = time.getDay();
            if(month < 10){
              month = "0" + month;
          }
          if(month < 10){
              day = "0" + day;
          }
         timedate = years + "-" + month + "-" + day;
    }
    time(state.listnew.date)
  var arrayentertain =[];
  function filter(x)
  {
    x.forEach((a,b) => {
        if(a.category === "GiaiTris")
        {
          arrayentertain.push(a);
        }
    });
  }
  filter(state.allnew);

  var arraykhac =[];
  function filter2(x)
  {
    x.forEach((a,b) => {
        if(a.category !== "GiaiTris")
        {
          arraykhac.push(a);
        }
    });
  }
  filter2(state.allnew);
  arraykhac= arraykhac.reverse();
  arrayentertain = arrayentertain.reverse();
 console.log()

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
        {state.listnew.title}
      </h1>
    </div>
    <div className="detail-article">
    <div className="detail-article-wappe">
      <div className="detail-article-author">
        <span>{state.listnew.author}</span>
      </div>
      <div className="detail-article-time">
        <span>{timedate}</span>
      </div>
      </div>
    </div>
    <div className="detail-content">
      <div className="detail-content__left">
        <div className="content-left detail-left">
        <div dangerouslySetInnerHTML={{__html:state.listnew.content}}></div>
        </div>
        <div className="detail-involve">
          <h2>Bài Liên Quan</h2>
          <div className="detail-involve__content">
              {
                arrayentertain.map((x,y)=>
                    y<=5?<Invole key={x.id} {...x}></Invole>:null
                )
              }
          </div>
        </div>
      </div>
      <div className="detail-content__right">
      <div className="left-quangcao">
                  {/* {
                   typeof(arrayadvertisements[0].DetailAdvertisementEntertainRight[0]) !== 'undefined'?
                   <a href={arrayadvertisements.DetailAdvertisementEntertainRightContent}>
                       <img className="left-quangcao-img" src={iplink + arrayadvertisements[0].DetailAdvertisementEntertainRight[0].url} alt="" />
                    </a>:null
                 } */}
              </div> 
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