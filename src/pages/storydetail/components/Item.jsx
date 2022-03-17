import React, { useEffect } from 'react';
import Subitem1 from './subitem/Item1';
import Subitem10 from './subitem/Item10';
import Subitem2 from './subitem/Item2';
import Subitem3 from './subitem/Item3';
import Subitem4 from './subitem/Item4';
import Subitem5 from './subitem/Item5';
import Subitem6 from './subitem/Item6';
import Subitem7 from './subitem/Item7';
import Subitem8 from './subitem/Item8';
import Subitem9 from './subitem/Item9';
import Subitemtitle from './subitem/Itemtitle';
let $ = window.$;
// import { Container } from './styles';

function Item({arraydetaillstory}) {
  useEffect(()=>{
    // $(document).ready(function() {
    //   $('#fullpage').fullpage({
    //     autoScrolling:true,
    //     scrollHorizontally: true
    //   });
    //   $.fn.fullpage.setAllowScrolling(false);
    // });
  let menu = document.querySelector(".detailstory-header");
  let vitri = 0;
  window.onscroll = function(){
        var  windowscroll = window.pageYOffset;
          if(windowscroll > vitri)
          {
              menu.classList.add("activemenu");
              vitri=windowscroll;
          }
          else if(windowscroll < vitri)
          {
              menu.classList.remove("activemenu");
              vitri=windowscroll;
          }
  }

  },[])
  console.log(arraydetaillstory.Content3);
  return(
      <>
      {
        typeof(arraydetaillstory.TieuDe) !== 'undefined'?
        <Subitemtitle arraydetaillstory={arraydetaillstory}></Subitemtitle>:null
      }
      {
        typeof(arraydetaillstory.Content1)!== 'undefined'?
        <Subitem1 arraydetaillstory={arraydetaillstory}></Subitem1>:null
      }
       {
        typeof(arraydetaillstory.Content2)!== 'undefined'?
        <Subitem2  arraydetaillstory={arraydetaillstory}></Subitem2>:null
      }
       {
        typeof(arraydetaillstory.Content3)!== 'undefined'?
        <Subitem3  arraydetaillstory={arraydetaillstory}></Subitem3>:null
      }
       {
        typeof(arraydetaillstory.Content4)!== 'undefined'?
        <Subitem4  arraydetaillstory={arraydetaillstory}></Subitem4>:null
      }
       {
        typeof(arraydetaillstory.Content5)!== 'undefined'?
        <Subitem5  arraydetaillstory={arraydetaillstory}></Subitem5>:null
      }
       {
        typeof(arraydetaillstory.Content6)!== 'undefined'?
        <Subitem6  arraydetaillstory={arraydetaillstory}></Subitem6>:null
      }
       {
        typeof(arraydetaillstory.Content7)!== 'undefined'?
        <Subitem7  arraydetaillstory={arraydetaillstory}></Subitem7>:null
      }
      {
        typeof(arraydetaillstory.Content8)!== 'undefined'?
        <Subitem8  arraydetaillstory={arraydetaillstory}></Subitem8>:null
      }
      {
        typeof(arraydetaillstory.Content9)!== 'undefined'?
        <Subitem9  arraydetaillstory={arraydetaillstory}></Subitem9>:null
      }
      {
        typeof(arraydetaillstory.Content10)!== 'undefined'?
        <Subitem10  arraydetaillstory={arraydetaillstory}></Subitem10>:null
      }
      </>
  )
}

export default Item;