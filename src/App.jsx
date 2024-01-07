import React from 'react'
import "./App.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/pages/home/Home';
import List from './Components/pages/list/List';
import Hotel from './Components/pages/hotel/Hotel';

const App = () => {
  return (

    <BrowserRouter>
    <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/hotels' element={<List/>}/>
<Route path='/hotels/:id' element={<Hotel/>}/>
    </Routes>
    </BrowserRouter>

    )
}

export default App