import React, { useEffect } from 'react';
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
        <div className="containerr">
        <div dangerouslySetInnerHTML={{__html:arraydetaillstory.content}}></div>
        </div>
      </>
  )
}

export default Item;