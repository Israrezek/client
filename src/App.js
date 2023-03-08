import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import Landing from './components/layouts/Landing';
import Footer from './components/layouts/Footer';

import { BrowserRouter} from 'react-router-dom'
import Routers from './components/routers';


function App() {
  const appName = "EIBFS-Devconnector";
  return (
    <div className="App">
    <BrowserRouter>
    <Header appName = {appName} ></Header>
    <Routers></Routers>
    <Footer appName= {appName}></Footer>
    </BrowserRouter>
    </div> 
  );
}

export default App;