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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/contact"element={<Contact />} />
        <Route path="/service"element={<Services />} />
        <Route path="/blog"   element={<Blog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
