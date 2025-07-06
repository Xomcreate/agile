import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Header   from './MainComponent/Header';
import Footer   from './MainComponent/Footer';
import Home     from './MainComponent/Home';
import About    from './MainComponent/About';
import Contact  from './MainComponent/Contact';
import Services from './MainComponent/Services';
import Blog     from './MainComponent/Blog';
import Testimonial from './MainComponent/Testimonial';
import Admin from './DashboardComponets/Admin';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact"element={<Contact />} />
        <Route path="/service"element={<Services />} />
         <Route path="/test"   element={<Testimonial />} />
        <Route path="/blog"   element={<Blog />} />
         <Route path="/aggiebby"   element={<Admin />} />
         

      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
