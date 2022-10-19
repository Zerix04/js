// import Header from './componens/Header/Header.js';
// import Card from './componens/Card';
// import './App.css';

import Navbar from './componens/navbar/Navbar'
import Header from './componens/Header';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Home from './componens/Home';
import About from './componens/About';
import Galery from './componens/Galery';

function App() {
  return (
    <BrowserRouter>
      <div >

        <Navbar />
        <Header />

        <div className='container-fluid'>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="galery" element={<Galery />} />

          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;


