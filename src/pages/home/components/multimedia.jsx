import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../core/useAuth';
import Item1 from './multimediaitem/Item1';
import Item2 from './multimediaitem/Item2';
import Item3 from './multimediaitem/Item3';
import Item4 from './multimediaitem/Item4';
import Item5 from './multimediaitem/Item5';
// import { Container } from './styles';

function Multimedia({home}) {
  let {ipapi,iplink} =useAuth();
  let url ='';
  let [state,setState] = useState({
    logform:[],
    loanding:true
  }
)
useEffect(() =>{
fetch(`${ipapi}/log-forms/`)
.then(res=>res.json())
.then((res) => {
  setState({
    logform:[...res], 
    loanding:false
  })
})
},[])
if(state.loanding)
{
  return 'Loangding';
}
var arraylogform =[];
var array = state.logform;
arraylogform = array.reverse();

  return(
      <>
       <div className="home-multimedia">
        <div className="home-multimedia-title">
          <div className="multimedia__title">
            <img src="./img/40.png" alt="" srcSet />
          </div>
          <div className="slider-title-xemthem">
            <Link to={'/logform'}>Xem Thêm...</Link>
        </div>
        </div>
        <div className="home-content">
          <Item1 arraylogform={arraylogform[0]}></Item1>
          <div className="home-content-right">
            <div className="content-right-item1">
              <Item2 arraylogform={arraylogform[1]}></Item2>
              <Item3 arraylogform={arraylogform[2]}></Item3>
            </div>
            <div className="content-right-item2">
              <Item4 arraylogform={arraylogform[3]}> </Item4>
              <Item5 arraylogform={arraylogform[4]}></Item5>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Multimedia;