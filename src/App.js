import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import '../src/App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SolutionsPage from './pages/SolutionsPage';
import Team from './pages/Team';
import TrainingKit from './ProductComponents/TrainingKit';
import ProductsAndOfferings from './ProductComponents/ProductsAndOfferings';
// import VLSICoursePage from './TrainingComponents/VLSICoursePage';
// import AimlCoursePage from './TrainingComponents/AimlCoursePage';
// import EmbeddedSystemsPage from './TrainingComponents/EmbeededSystemsPage';
import GenAICoursePage from './TrainingComponents/GenAICoursePage';
import TrainingProgram from "./pages/TrainingProgram";
import CareerPage from './pages/CareerPage';
import VLSIPage from './TrainingComponents/VLSIPage';
import EmbeddedIOTPage from './TrainingComponents/EmbeddedIOTPage';
import PCBPage from './TrainingComponents/PCBPage';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/career' element={<CareerPage />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/solutions' element={<SolutionsPage />} />
          <Route path='/team' element={<Team />} />
          <Route path='/training-program' element={<TrainingProgram />} />
          <Route path='/training-kits' element={<TrainingKit />} />
          <Route path='/products-and-offerings' element={<ProductsAndOfferings />} />
          {/* <Route path="/vlsi-course" element={<VLSICoursePage />} /> */}
          {/* <Route path="/aiml-course" element={<AimlCoursePage />} /> */}
          {/* <Route path="/embedded-systems" element={<EmbeddedSystemsPage />} /> */}
          <Route path="/genaipage" element={<GenAICoursePage />} />/
          <Route path="/pcbpage" element={<PCBPage />} />/
          <Route path="/vlsipage" element={<VLSIPage />} />/
          <Route path="/embeddediot" element={<EmbeddedIOTPage />} />/


        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
