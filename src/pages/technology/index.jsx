import React, { useEffect, useState } from 'react';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Itemtechnology from './components/itemtechnology';
import ReactMarkdown from 'react-markdown';
import useAuth from '../../core/useAuth';
// import { Container } from './styles';
function Technology() {
  let {ip} = useAuth();
  let [state,setState] = useState({
    technology:null,
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
      .then(([res1,res2,res3]) =>{
          setState({
              technology:res1,
              logform:res2,
              story:res3,
              loanding:false,
          })
      })
},[])

let {allnew,logform,story,arrayadvertisements} = state;
if(!allnew && !logform && !story  && !arrayadvertisements ) return 'loading...';
var arraytechnology =[];
var arraylogform =[];
var arraystory =[];
function filter(x)
{
  x.forEach((a,b) => {
      if(a.category === "CongNghes")
      {
        arraytechnology.push(a);
      }
  });
}
filter(state.technology);
var array = arraytechnology;
arraytechnology = array.reverse();
console.log(arraytechnology);

function filterlogform(x)
{
  x.forEach((a,b) => {
      if(a.category === "CongNghes")
      {
        arraylogform.push(a);
      }
  });
}
filterlogform(state.logform);
var arrraylogform = arraylogform.reverse();
console.log("arrraylogform",arrraylogform);

function filterstory(x)
{
  x.forEach((a,b) => {
      if(a.category === "CongNghes")
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
        <h1><a href>Công Nghệ</a></h1>
        <ul>
          <li><a href>TIN TỨC XUẤT BẢN</a></li>
          <li><a href>SÁCH HAY </a></li>
          <li><a href>TÁC GIẢ</a></li>
        </ul>
      </div>
      <Item1 technology={arraytechnology[0]}> </Item1>
      <div className="page__home-listnew">
        <div className="right__left">
          <Item2 technology={arrraylogform[0]} ></Item2>
          <Item3 technology={arrraystory[0]} ></Item3> 
        </div>
        <div className="right__right">
          <Item4  technology={arrraylogform[1]} ></Item4>
          <Item5 technology={arrraystory[1]} ></Item5>
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
          arraytechnology.map((x,y)=>
            <Itemtechnology key={x._id} {...x}></Itemtechnology>
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

export default Technology;