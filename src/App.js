import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';


function App() {
  // const [project, setProject] = useState(projects);

  // console.log(projects);

  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />          
          <Route path="/gallery" element={<Gallery />} />                    
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={< />} /> */}
        </Routes>
      </div>

    </Router>
  );
}

export default App;


