import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollToHash from "./components/ScrollToHash/ScrollToHash";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import PolicyPage from "./pages/PolicyPage/PolicyPage";

function App() {
  return (
    <div className="app-shell">
      <ScrollToHash />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/oferta/:slug" element={<ProductDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/regulamin" element={<PolicyPage />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
