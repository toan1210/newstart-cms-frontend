import React, { useEffect, useState } from 'react';
import useAuth from '../../core/useAuth';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Itemvideo from './components/itemvideo';
// import { Container } from './styles';

function Video() {
  let {ip} = useAuth();
  let [state,setState] = useState({
    video:null,
    loanding:true,
    arrayadvertisements:null,
   }
)
useEffect(() =>{
  Promise.all([
    fetch(`${ip}traditional/traditionalapi`).then((res) => res.json()),
    fetch(`${ip}arrayadvertisements/arrayadvertisementsapi`).then((res) =>res.json())
  ])
  .then(([res1,res2,res3]) =>{
    setState({
       video:res1,
        arrayadvertisements:res2,
    })
})
},[])
let {video,arrayadvertisements,test} = state;
if(!video && !arrayadvertisements && !test) return 'loading...';
var arrayvideo =[];
function filter(x)
{
  x.forEach((a,b) => {
      if(a.category === "Videos")
      {
        arrayvideo.push(a);
      }
  });
}
filter(state.video);
var array = arrayvideo;
var arrayvideo = array.reverse();
  return (
      <>
    <main>
  <div className="container">
    <div className="page__home">
      <div className="page__home-header">
        <h1><a href>Video</a></h1>
        <ul>
          <li><a href>TIN TỨC XUẤT BẢN</a></li>
          <li><a href>SÁCH HAY </a></li>
          <li><a href>TÁC GIẢ</a></li>
        </ul>
      </div>
      <Item1 video={arrayvideo[0]} arrayadvertisements={arrayadvertisements}></Item1>
      <div className="page__home-listnew">
        <div className="right__left">
          <Item2 video={arrayvideo[1]}></Item2>
          <Item3 video={arrayvideo[2]}></Item3>
        </div>
        <div className="right__right">
          <Item4 video={arrayvideo[3]}></Item4>
          <Item5 video={arrayvideo[4]}></Item5>
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
          arrayvideo.map((x,y)=>
          y<=30?<Itemvideo key={x._id} {...x}></Itemvideo>:null
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

export default Video;