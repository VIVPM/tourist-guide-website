import {Routes,Route,BrowserRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import './App.css';
import User from './User';
import Body from './Body';
import Navabr from './Navbar'
import Header from './Header';
import Userform from './Userform';
import CardDetails from './Card1';
import Temp from './Temp';

import Home from './Home';
// import Footer from './Footer';
import Searchbar from './Searchbar'
import Adminspace from './Adminspace'
import Admin from './Admin'
import Addplace from './Addplace';
import Deleteplace from './Deleteplace'
import Addreview from './Addreview';
import Deleteuser from './Deleteuser';
import Dict from './Dict';

function App() {
  return (
    // <div className="App" style={{ backgroundImage: `url(${bckimg})` }}>
  // <div className="App">
  <>
    
      {/* <h2>Hello</h2> */}
    <BrowserRouter>
    <Navabr/>
      
    <Routes>
      <Route path='/userdetails' element={<Deleteuser/>}></Route>
      <Route path='/header' element={<Header/>}></Route>
      <Route path='/places' element={<Body/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/det' element={<CardDetails />}></Route>
      <Route path='/search' element={<Searchbar/>}></Route>
      <Route path='/Adminspace' element={<Adminspace/>}></Route>
      <Route path='/login' element={<Userform/>}></Route>
      <Route path='/Admin' element={<Admin/>}></Route>
      <Route path='/Addplace' element={<Addplace/>}></Route>
      <Route path='/Deleteplace' element={<Deleteplace/>}></Route>
      <Route path='/Addreview' element={<Addreview/>}></Route>
      <Route path='/Temp' element={<Temp/>}></Route>
      <Route path='/dict' element={<Dict/>}></Route>
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;                        
