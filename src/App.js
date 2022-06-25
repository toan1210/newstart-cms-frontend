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
// import Login from "./components/Login";
// import Header from "./components/Header";
export let Context = React.createContext();
function App() {
  let ipapi="http://34.87.31.207/api";
  let ipapii="http://34.87.31.207";
  let iplink="http://34.87.31.207";
  let ip = "http://localhost:4001/";

  let apihome="http://localhost:4001/traditional/traditionalapi";
  let apidetailhome="http://localhost:4001/traditional/"
  return (
 <BrowserRouter>
     <Context.Provider  value={{ipapi,iplink,ipapii,apihome,apidetailhome,ip}}>
         {renderRouters(routers)}
     </Context.Provider>
     <Switch>
     {/* <Route path='/' >
        <Header/>
     </Route> */}
     {/* <Route path='/Login' >
        <Login/>
     </Route> */}
     </Switch>
 </BrowserRouter>
  );
}

export default App;
