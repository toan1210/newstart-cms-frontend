 import React, { useContext, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Item1 from './components/item1';
import Item2 from './components/item2';
import Item3 from './components/item3';
import Item4 from './components/item4';
import Item5 from './components/item5';
import Multimedia from './components/multimedia';
import Fashion from './components/Fashion/Index';
import Technology from './components/Technology/Index';
import News from './components/News/Index';
import Living from './components/Living/Index';
import Tourism from './components/Tourism/Index';
import Brandstuff from './components/Brandstuff/Index';
import Economy from './components/Economy/Index';
import Cultural from './components/Cultural/Index';
import Entertain from './components/Entertain/Index';
import Sports from './components/Sports/Index';
import useAuth from '../../core/useAuth';
import Cuisine from './components/Cuisine/Index';
// import { Container } from './styles';
function Home() {
  let {ip} = useAuth();
  let [state, setState] = useState({
    home: [],
    logform:[],
    story: [],
    advertisement: [],
    loanding: true
  }
  )
  useEffect(() => {
    Promise.all([
      fetch(`${ip}traditional/traditionalapi`).then(res =>res.json()),
      fetch(`${ip}longform/longformapi`).then(res =>res.json()),
      fetch(`${ip}story/storyapi`).then(res =>res.json()),
      fetch(`${ip}arrayadvertisements/arrayadvertisementsapi`).then(res =>res.json()),
    ])
      .then(([res1, res2, res3, res4,]) => {
        setState({
          home: res1,
          logform:res2,
          story: res3,
          advertisement: res4,
          loanding: false,
        })
      })
  }, [])
  if (state.loanding) {
    return 'Loangding';
  }
  var arrayadvertisement = state.advertisement;
  var arrayhomehotnews =[];
  var arrayhome = [];
  var array = state.logform;
  arrayhome = array.reverse();
  function filterhome(x)
  {
    x.forEach((a,b) => {
      if(a.status === "true")
      {
        arrayhomehotnews.push(a);
      }
  });
  }
  filterhome(state.home)
  arrayhomehotnews = arrayhomehotnews.reverse();
  console.log("arrayhomehotnews",arrayhomehotnews);
  return (
    <>
      <main>
        <div className="container">
          <div className="page__home">
            <div className="page__home-header">
              <h1><a href>Tin Nổi Bật</a></h1>
              <ul>
                <li><a href>TIN TỨC XUẤT BẢN</a></li>
                <li><a href>SÁCH HAY </a></li>
                <li><a href>TÁC GIẢ</a></li>
              </ul>
            </div>
            <Item1 home={arrayhomehotnews[0]} arrayadvertisement={arrayadvertisement}> </Item1>
            <div className="page__home-listnew">
              <div className="right__left">
                <Item2 home={arrayhomehotnews[1]} ></Item2>
                <Item3 home={arrayhomehotnews[2]} ></Item3>
              </div>
              <div className="right__right">
                <Item4 home={arrayhomehotnews[3]} ></Item4>
                <Item5 home={arrayhomehotnews[4]} ></Item5>
              </div>
            </div>
          </div>
          <Multimedia home={arrayhome} ></Multimedia>
        </div>
      </main>
      <Technology story={state.story} arrayhome={arrayhome} arrayadvertisement={arrayadvertisement}></Technology>
       <Economy story={state.story} arrayhome={arrayhome} arrayadvertisement={arrayadvertisement}></Economy>
      <Cultural story={state.story} arrayhome={arrayhome} arrayadvertisement={arrayadvertisement}></Cultural>
      <Entertain story={state.story} arrayhome={arrayhome} arrayadvertisement={arrayadvertisement}></Entertain>
      <Living story={state.story} arrayhome={arrayhome} arrayadvertisement={arrayadvertisement}></Living>
      <Tourism story={state.story} arrayhome={arrayhome} arrayadvertisement={arrayadvertisement}></Tourism>
      <Brandstuff story={state.story} arrayhome={arrayhome} arrayadvertisement={arrayadvertisement}></Brandstuff>
      <Fashion story={state.story} arrayhome={arrayhome} arrayadvertisement={arrayadvertisement}></Fashion>
      <Sports story={state.story} arrayhome={arrayhome} arrayadvertisement={arrayadvertisement}></Sports>
      <Cuisine story={state.story} arrayhome={arrayhome} arrayadvertisement={arrayadvertisement}></Cuisine> 
    </>
  );
}

export default Home;