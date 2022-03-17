import React, { useEffect, useState } from 'react';
import useAuth from '../../core/useAuth';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Itemeconomy from './components/itemeconomy';
// import { Container } from './styles';

function Economy() {
  let {ipapi,iplink} =useAuth();
  let [state,setState] = useState({
    allnew:null,
    logform:null,
    story:null,
    arrayadvertisements:null,
  }
)
useEffect(() =>{
  Promise.all([
      fetch(`${ipapi}/homes/`).then(res =>res.json()),
      fetch(`${ipapi}/log-forms/`).then(res =>res.json()),
      fetch(`${ipapi}/stories/`).then(res =>res.json()),
      fetch(`${ipapi}/advertisements/`).then(res =>res.json()),
  ])
      .then(([res1,res2,res3,res4]) =>{
          setState({
              allnew:res1,
              logform:res2,
              story:res3,
              arrayadvertisements:res4,
              loanding:false,
          })
      })
},[])
let {allnew,logform,story,arrayadvertisements} = state;
if(!allnew && !logform && !story && !arrayadvertisements ) return 'loading...';
var arrayeconomy =[];
var arraylogform =[];
var arraystory =[];
function filter(x)
{
  x.forEach((a,b) => {
      if(a.DanhMuc === "KinhTes")
      {
        arrayeconomy.push(a);
      }
  });
}
filter(state.allnew);
var array = arrayeconomy;
arrayeconomy = array.reverse();

function filterlogform(x)
{
  x.forEach((a,b) => {
      if(a.DanhMuc === "KinhTes")
      {
        arraylogform.push(a);
      }
  });
}
filterlogform(state.logform);
var arrraylogform = logform.reverse();

function filterstory(x)
{
  x.forEach((a,b) => {
      if(a.DanhMuc === "KinhTes")
      {
        arraystory.push(a);
      }
  });
}
filterstory(state.story);
var arrraystory = arraystory.reverse();
console.log(arrraystory);
  return(
      <>
                <main>
  <div className="container">
    <div className="page__home">
      <div className="page__home-header">
        <h1><a href>Kinh Tế</a></h1>
        <ul>
          <li><a href>TIN TỨC XUẤT BẢN</a></li>
          <li><a href>SÁCH HAY </a></li>
          <li><a href>TÁC GIẢ</a></li>
        </ul>
      </div>
      <Item1 economy={arrayeconomy[0]} arrayadvertisements={arrayadvertisements}></Item1>
      <div className="page__home-listnew">
        <div className="right__left">
          <Item2 economy={arrraylogform[0]}></Item2>
          <Item3 economy={arrraystory[0]}></Item3>
        </div>
        <div className="right__right">
          <Item4 economy={arrraylogform[1]}></Item4>
          <Item5 economy={arrraystory[1]}></Item5>
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
          arrayeconomy.map((x,y)=>
            <Itemeconomy key={x._id} {...x}></Itemeconomy>
          )
        }
      </div>
      <div className="new-content-advertisement">
      </div>
    </div>
  </div>
</div>
      </>
  )
}

export default Economy;