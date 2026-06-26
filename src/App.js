import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

// Import Home normally (NOT lazy)
import Home from "./pages/Home";

// Lazy-loaded pages
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const SolutionsPage = lazy(() => import("./pages/SolutionsPage"));
const Team = lazy(() => import("./pages/Team"));
const TrainingProgram = lazy(() => import("./pages/TrainingProgram"));
const CareerPage = lazy(() => import("./pages/CareerPage"));

const TrainingKit = lazy(() => import("./ProductComponents/TrainingKit"));
const ProductsAndOfferings = lazy(() =>
  import("./ProductComponents/ProductsAndOfferings")
);

const GenAICoursePage = lazy(() =>
  import("./TrainingComponents/GenAICoursePage")
);
const PCBPage = lazy(() => import("./TrainingComponents/PCBPage"));
const VLSIPage = lazy(() => import("./TrainingComponents/VLSIPage"));
const EmbeddedIOTPage = lazy(() =>
  import("./TrainingComponents/EmbeddedIOTPage")
);

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Suspense
          fallback={
            <div className="page-loader">
              Loading...
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<CareerPage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/solutions" element={<SolutionsPage />} />
            <Route path="/team" element={<Team />} />
            <Route
              path="/training-program"
              element={<TrainingProgram />}
            />
            <Route path="/training-kits" element={<TrainingKit />} />
            <Route
              path="/products-and-offerings"
              element={<ProductsAndOfferings />}
            />

            <Route path="/genaipage" element={<GenAICoursePage />} />
            <Route path="/pcbpage" element={<PCBPage />} />
            <Route path="/vlsipage" element={<VLSIPage />} />
            <Route path="/embeddediot" element={<EmbeddedIOTPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </Router>
  );
}

export default App;