import React, { useEffect, useState } from 'react';
import useAuth from '../../core/useAuth';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Itemcuisine from './components/itemcuisine';
// import { Container } from './styles';

function Index() {
    let {ip} =useAuth();
    let [state,setState] = useState({
      allnew:null,
      logform:null,
      story:null,
      arrayadvertisements:null,
    }
  )
  useEffect(() =>{
    Promise.all([
      fetch(`${ip}traditional/traditionalapi`).then(res =>res.json()),
      fetch(`${ip}longform/longformapi`).then(res =>res.json()),
      fetch(`${ip}story/storyapi`).then(res =>res.json()),
      fetch(`${ip}arrayadvertisements/arrayadvertisementsapi`).then(res =>res.json()),
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
var arraycuisine =[];
var arraylogform =[];
var arraystory =[];
var arrayadvertisementss = state.arrayadvertisements;
function filter(x)
{
  x.forEach((a,b) => {
      if(a.category === "AmThucs")
      {
        arraycuisine.push(a);
      }
  });
}
filter(state.allnew);
var array = arraycuisine;
arraycuisine = array.reverse();

function filterlogform(x)
{
  x.forEach((a,b) => {
      if(a.category === "AmThucs")
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
      if(a.category === "AmThucs")
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
        <h1><a href>Ẩm Thực</a></h1>
        <ul>
          <li><a href>TIN TỨC XUẤT BẢN</a></li>
          <li><a href>SÁCH HAY </a></li>
          <li><a href>TÁC GIẢ</a></li>
        </ul>
      </div>
      <Item1 cuisine={arraycuisine[0]}arrayadvertisements={arrayadvertisementss}></Item1>
      <div className="page__home-listnew">
        <div className="right__left">
          <Item2 cuisine={arrraylogform[0]}></Item2>
          <Item3 cuisine={arrraystory[0]}></Item3>
        </div>
        <div className="right__right">
          <Item4 cuisine={arrraylogform[1]}></Item4>
          <Item5 cuisine={arrraystory[1]}></Item5>
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
          arraycuisine.map((x,y)=>
          y<=30?<Itemcuisine key={x._id} {...x}></Itemcuisine>:null
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

export default Index;