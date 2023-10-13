
import './App.css';
import Navigation from './component/Navigation';
import Home from './pages/Home';
import {BrowserRouter, Route, Router, Routes} from 'react-router-dom'

import AddNewProduct from './pages/AddNewProduct';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/product/add' element={<AddNewProduct/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
