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
  let iplink="http://34.87.31.207";
  return (
 <BrowserRouter>
     <Context.Provider  value={{ipapi,iplink}}>
         {renderRouters(routers)}
     </Context.Provider>
 </BrowserRouter>
  );
}

export default App;
