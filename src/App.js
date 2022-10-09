import './App.css';
import ListEmployees from './components/ListEmployees';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import AddEmployee from './components/AddEmployee';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
          <div className='container'>
            <Routes>
              <Route  path="/" element={<ListEmployees/>}></Route>
              <Route path="/employees" element={<ListEmployees/>}></Route>
              <Route path="/add-employee" element={<AddEmployee/>}></Route>
              <Route path='/update-employee/:id' element={<AddEmployee/>}></Route>
            </Routes>
          </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
