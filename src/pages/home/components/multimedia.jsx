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
  let {ip} =useAuth();
  let url ='';
  let [state,setState] = useState({
    logform:[],
    loanding:true
  }
)
// useEffect(() =>{
// fetch(`${ip}/log-forms/`)
// .then(res=>res.json())
// .then((res) => {
//   setState({
//     logform:[...res], 
//     loanding:false
//   })
// })
// },[])
// if(state.loanding)
// {
//   return 'Loangding';
// }
console.log("asdas",home)

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
          <Item1 arraylogform={home[0]}></Item1>
          <div className="home-content-right">
            <div className="content-right-item1">
              <Item2 arraylogform={home[1]}></Item2>
              <Item3 arraylogform={home[2]}></Item3>
            </div>
            <div className="content-right-item2">
              <Item4 arraylogform={home[3]}> </Item4>
              <Item5 arraylogform={home[4]}></Item5>
            </div>
          </div>
        </div>
      </div>
      </>
  );
}

export default Multimedia;