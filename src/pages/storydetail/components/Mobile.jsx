import React, { useEffect } from 'react';
import Subitem11 from './subitem/Item11';
import Subitem12 from './subitem/Item12';
import Subitem13 from './subitem/Item13';
import Subitem14 from './subitem/Item14';
import Subitem15 from './subitem/Item15';
import Subitem16 from './subitem/Item16';
import Subitem17 from './subitem/Item17';
import Subitem18 from './subitem/Item18';
import Subitem19 from './subitem/Item19';
import Subitem20 from './subitem/Item20';
import Subitem21 from './subitem/Item21';
import Subitem22 from './subitem/Item22';
import Subitem23 from './subitem/Item23';
import Subitem24 from './subitem/Item24';
import Subitem25 from './subitem/Item25';
import Subitem1 from './subitemmobile/Item1';
import Subitem10 from './subitemmobile/Item10';
import Subitem2 from './subitemmobile/Item2';
import Subitem3 from './subitemmobile/Item3';
import Subitem4 from './subitemmobile/Item4';
import Subitem5 from './subitemmobile/Item5';
import Subitem6 from './subitemmobile/Item6';
import Subitem7 from './subitemmobile/Item7';
import Subitem8 from './subitemmobile/Item8';
import Subitem9 from './subitemmobile/Item9';
import Subitemtitle from './subitemmobile/Itemtitle';
let $ =window.$;
// import { Container } from './styles';

function Mobile({arraydetaillstory}) {
    useEffect(() =>{
        let slider = $("#root");
        let sliderwidth = slider.width();
        if(sliderwidth <= 767)
        {
           $('.containera').addClass('active');
           $('.storymobile').addClass('active1');
        }
        else if(sliderwidth >= 767)
        {
           $('.containera').removeClass('active');
           $('.storymobile').removeClass('active1');
        }
    },[])
  return (
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
          {
        typeof(arraydetaillstory.Content11)!== 'undefined'?
        <Subitem11 arraydetaillstory={arraydetaillstory}></Subitem11>:null
      }
       {
        typeof(arraydetaillstory.Content12)!== 'undefined'?
        <Subitem12  arraydetaillstory={arraydetaillstory}></Subitem12>:null
      }
       {
        typeof(arraydetaillstory.Content13)!== 'undefined'?
        <Subitem13  arraydetaillstory={arraydetaillstory}></Subitem13>:null
      }
       {
        typeof(arraydetaillstory.Content14)!== 'undefined'?
        <Subitem14  arraydetaillstory={arraydetaillstory}></Subitem14>:null
      }
       {
        typeof(arraydetaillstory.Content15)!== 'undefined'?
        <Subitem15  arraydetaillstory={arraydetaillstory}></Subitem15>:null
      }
       {
        typeof(arraydetaillstory.Content16)!== 'undefined'?
        <Subitem16  arraydetaillstory={arraydetaillstory}></Subitem16>:null
      }
       {
        typeof(arraydetaillstory.Content17)!== 'undefined'?
        <Subitem17  arraydetaillstory={arraydetaillstory}></Subitem17>:null
      }
       {
        typeof(arraydetaillstory.Content18)!== 'undefined'?
        <Subitem18  arraydetaillstory={arraydetaillstory}></Subitem18>:null
      }
       {
        typeof(arraydetaillstory.Content19)!== 'undefined'?
        <Subitem19  arraydetaillstory={arraydetaillstory}></Subitem19>:null
      }
       {
        typeof(arraydetaillstory.Content20)!== 'undefined'?
        <Subitem20  arraydetaillstory={arraydetaillstory}></Subitem20>:null
      }
        {
        typeof(arraydetaillstory.Content21)!== 'undefined'?
        <Subitem21  arraydetaillstory={arraydetaillstory}></Subitem21>:null
      }
       {
        typeof(arraydetaillstory.Content22)!== 'undefined'?
        <Subitem22  arraydetaillstory={arraydetaillstory}></Subitem22>:null
      }
       {
        typeof(arraydetaillstory.Content23)!== 'undefined'?
        <Subitem23  arraydetaillstory={arraydetaillstory}></Subitem23>:null
      }
       {
        typeof(arraydetaillstory.Content24)!== 'undefined'?
        <Subitem24  arraydetaillstory={arraydetaillstory}></Subitem24>:null
      }
       {
        typeof(arraydetaillstory.Content25)!== 'undefined'?
        <Subitem25  arraydetaillstory={arraydetaillstory}></Subitem25>:null
      }
      </>
  )
}

export default Mobile;