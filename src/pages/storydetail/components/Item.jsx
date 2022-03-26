import React, { useEffect } from 'react';
import Subitem1 from './subitem/Item1';
import Subitem10 from './subitem/Item10';
import Subitem11 from './subitem/Item11';
import Subitem12 from './subitem/Item12';
import Subitem13 from './subitem/Item13';
import Subitem14 from './subitem/Item14';
import Subitem15 from './subitem/Item15';
import Subitem16 from './subitem/Item16';
import Subitem17 from './subitem/Item17';
import Subitem18 from './subitem/Item18';
import Subitem19 from './subitem/Item19';
import Subitem2 from './subitem/Item2';
import Subitem20 from './subitem/Item20';
import Subitem21 from './subitem/Item21';
import Subitem22 from './subitem/Item22';
import Subitem23 from './subitem/Item23';
import Subitem24 from './subitem/Item24';
import Subitem25 from './subitem/Item25';
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
  return(
      <>
      {
        typeof(arraydetaillstory.Img1[0])!== 'undefined'?
        <Subitem1 arraydetaillstory={arraydetaillstory}></Subitem1>:null
      }
       {
        typeof(arraydetaillstory.Img2[0])!== 'undefined'?
        <Subitem2  arraydetaillstory={arraydetaillstory}></Subitem2>:null
      }
       {
        typeof(arraydetaillstory.Img3[0])!== 'undefined'?
        <Subitem3  arraydetaillstory={arraydetaillstory}></Subitem3>:null
      }
       {
        typeof(arraydetaillstory.Img4[0])!== 'undefined'?
        <Subitem4  arraydetaillstory={arraydetaillstory}></Subitem4>:null
      }
       {
        typeof(arraydetaillstory.Img5[0])!== 'undefined'?
        <Subitem5  arraydetaillstory={arraydetaillstory}></Subitem5>:null
      }
       {
        typeof(arraydetaillstory.Img6[0])!== 'undefined'?
        <Subitem6  arraydetaillstory={arraydetaillstory}></Subitem6>:null
      }
       {
        typeof(arraydetaillstory.Img7[0])!== 'undefined'?
        <Subitem7  arraydetaillstory={arraydetaillstory}></Subitem7>:null
      }
      {
        typeof(arraydetaillstory.Img8[0])!== 'undefined'?
        <Subitem8  arraydetaillstory={arraydetaillstory}></Subitem8>:null
      }
      {
        typeof(arraydetaillstory.Img9[0])!== 'undefined'?
        <Subitem9  arraydetaillstory={arraydetaillstory}></Subitem9>:null
      }
      {
        typeof(arraydetaillstory.Img10[0])!== 'undefined'?
        <Subitem10  arraydetaillstory={arraydetaillstory}></Subitem10>:null
      }
       {
        typeof(arraydetaillstory.Img11[0])!== 'undefined'?
        <Subitem11 arraydetaillstory={arraydetaillstory}></Subitem11>:null
      }
       {
        typeof(arraydetaillstory.Img12[0])!== 'undefined'?
        <Subitem12  arraydetaillstory={arraydetaillstory}></Subitem12>:null
      }
       {
        typeof(arraydetaillstory.Img13[0])!== 'undefined'?
        <Subitem13  arraydetaillstory={arraydetaillstory}></Subitem13>:null
      }
       {
        typeof(arraydetaillstory.Img14[0])!== 'undefined'?
        <Subitem14  arraydetaillstory={arraydetaillstory}></Subitem14>:null
      }
       {
        typeof(arraydetaillstory.Img15[0])!== 'undefined'?
        <Subitem15  arraydetaillstory={arraydetaillstory}></Subitem15>:null
      }
       {
        typeof(arraydetaillstory.Img16[0])!== 'undefined'?
        <Subitem16  arraydetaillstory={arraydetaillstory}></Subitem16>:null
      }
       {
        typeof(arraydetaillstory.Img17[0])!== 'undefined'?
        <Subitem17  arraydetaillstory={arraydetaillstory}></Subitem17>:null
      }
      {
        typeof(arraydetaillstory.Img18[0])!== 'undefined'?
        <Subitem18  arraydetaillstory={arraydetaillstory}></Subitem18>:null
      }
      {
        typeof(arraydetaillstory.Img19[0])!== 'undefined'?
        <Subitem19  arraydetaillstory={arraydetaillstory}></Subitem19>:null
      }
      {
        typeof(arraydetaillstory.Img20[0])!== 'undefined'?
        <Subitem20  arraydetaillstory={arraydetaillstory}></Subitem20>:null
      }
        {
        typeof(arraydetaillstory.Img21[0])!== 'undefined'?
        <Subitem21  arraydetaillstory={arraydetaillstory}></Subitem21>:null
      }
       {
        typeof(arraydetaillstory.Img22[0])!== 'undefined'?
        <Subitem22  arraydetaillstory={arraydetaillstory}></Subitem22>:null
      }
      {
        typeof(arraydetaillstory.Img23[0])!== 'undefined'?
        <Subitem23  arraydetaillstory={arraydetaillstory}></Subitem23>:null
      }
      {
        typeof(arraydetaillstory.Img24[0])!== 'undefined'?
        <Subitem24  arraydetaillstory={arraydetaillstory}></Subitem24>:null
      }
      {
        typeof(arraydetaillstory.Img25[0])!== 'undefined'?
        <Subitem25  arraydetaillstory={arraydetaillstory}></Subitem25>:null
      }
      
      </>
  )
}

export default Item;