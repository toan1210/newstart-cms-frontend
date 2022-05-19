import React, { useEffect, useState } from 'react';
import useAuth from '../../core/useAuth';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Itembrandstuff from './components/itembrandstuff';
// import { Container } from './styles';
function Brandstuff() {
  let {ipapi,iplink,ipapii} =useAuth();
  let [state,setState] = useState({
    allnew:null,
    logform:null,
    story:null,
    arrayadvertisements:null,
    home1s:null,
    home2s:null,
    home3s:null,
    home4s:null,
    home5s:null,
    home6s:null,
    home7s:null,
    home8s:null,
    home9s:null,
    home10s:null,
    home11s:null,
    home12s:null,
    home13s:null,
    home14s:null,
    home15s:null,
  }
)
useEffect(() =>{
  Promise.all([
      fetch(`${ipapi}/homes/`).then(res =>res.json()),
      fetch(`${ipapi}/log-forms/`).then(res =>res.json()),
      fetch(`${ipapi}/stories/`).then(res =>res.json()),
      fetch(`${ipapi}/advertisements/`).then(res =>res.json()),
      fetch(`${ipapii}/home-1-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-2-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-3-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-4-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-5-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-6-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-7-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-8-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-9-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-10-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-11-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-12-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-13-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-14-s/`).then(res =>res.json()),
      fetch(`${ipapii}/home-15-s/`).then(res =>res.json()),
  ])
      .then(([res1,res2,res3,res4,res5,res6,res7,res8,res9,res10,res11,res12,res13,res14,res15,res16,res17,res18,res19]) =>{
          setState({
              allnew:res1,
              logform:res2,
              story:res3,
              arrayadvertisements:res4,
              home1s:res5,
              home2s:res6,
              home3s:res7,
              home4s:res8,
              home5s:res9,
              home6s:res10,
              home7s:res11,
              home8s:res12,
              home9s:res13,
              home10s:res14,
              home11s:res15,
              home12s:res16,
              home13s:res17,
              home14s:res18,
              home15s:res19,
          })
      })
},[])
let {allnew,logform,story,arrayadvertisements,home1s,home2s,home3s,home4s,home5s,home6s,home7s,home8s,home9s,home10s,home11s,home12s,home13s,home14s,home15s} = state;
if(!allnew && !logform && !story && !arrayadvertisements && !home1s && !home2s && !home3s && !home4s && !home5s && !home6s && !home7s && !home8s && !home9s && !home10s && !home11s && !home12s && !home13s && !home14s && !home15s) return 'loading...';
var allhome =[...state.allnew,...state.home1s,...state.home2s,...state.home3s,...state.home4s,...state.home5s,...state.home6s,...state.home7s,...state.home8s,...state.home9s,...state.home10s,...state.home11s,...state.home12s,...state.home13s,...state.home14s,...state.home15s];
var arraybrandstuff =[];
var arraylogform =[];
var arraystory =[];
function filter(x)
{
  x.forEach((a,b) => {
      if(a.DanhMuc === "HangHieus")
      {
        arraybrandstuff.push(a);
      }
  });
}
filter(allhome);
var array = arraybrandstuff;
arraybrandstuff = array.reverse();
console.log(array);
function filterlogform(x)
{
  x.forEach((a,b) => {
      if(a.DanhMuc === "HangHieus")
      {
        arraylogform.push(a);
      }
  });
}
filterlogform(state.logform);
var arrraylogform = arraylogform.reverse();

function filterstory(x)
{
  x.forEach((a,b) => {
      if(a.DanhMuc === "HangHieus")
      {
        arraystory.push(a);
      }
  });
}
filterstory(state.story);
var arrraystory = arraystory.reverse();
  return(
      <>
          <main>
  <div className="container">
    <div className="page__home">
      <div className="page__home-header">
        <h1><a href>Hàng Hiệu</a></h1>
        <ul>
          <li><a href>TIN TỨC XUẤT BẢN</a></li>
          <li><a href>SÁCH HAY </a></li>
          <li><a href>TÁC GIẢ</a></li>
        </ul>
      </div>
      <Item1 brandstuff={arraybrandstuff[0]} arrayadvertisements={arrayadvertisements}></Item1>
      <div className="page__home-listnew">
        <div className="right__left">
          <Item2 brandstuff={arrraylogform[0]}></Item2>
          <Item3 brandstuff={arrraystory[0]}></Item3>
        </div>
        <div className="right__right">
          <Item4 brandstuff={arrraylogform[1]}></Item4>
          <Item5 brandstuff={arrraystory[1]}></Item5>
        </div>
      </div>
    </div>
  </div>
</main>
<div className="new">
  <div className="container">
    <div className="new-title">
      <h3>Tin Mới</h3>
    </div>
    <div className="new-content">
      <div className="new-content-left">
      {
          arraybrandstuff.map((x,y)=>
            <Itembrandstuff key={x._id} {...x}></Itembrandstuff>
          )
        }
      </div>
      <div className="new-content-advertisement">
      </div>
    </div>
  </div>
</div>
      </>
  );
}

export default Brandstuff;