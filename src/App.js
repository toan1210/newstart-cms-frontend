import React from "react";
import './App.css';
import './assets/style.css';
import {
  BrowserRouter ,
  Route,
  Switch
} from 'react-router-dom';
import renderRouters from './core/routersConfig.jsx';
import routers from './routers.jsx';
export let Context = React.createContext();
function App() {
  let ipapi="http://34.87.31.207/api";
  let ipapii="http://34.87.31.207";
  let iplink="http://34.87.31.207";
  let domain = "http://newstartv.com.vn";

  let apihome="http://localhost:4000/traditional/traditionalapi";
  let apidetailhome="http://localhost:4000/traditional/"
  return (
 <BrowserRouter>
     <Context.Provider  value={{ipapi,iplink,domain,ipapii,apihome,apidetailhome}}>
         {renderRouters(routers)}
     </Context.Provider>
 </BrowserRouter>
  );
}

export default App;
