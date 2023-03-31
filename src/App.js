import "./App.css";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { Route, Routes } from "react-router-dom";
import Gmail from "./pages/Gmail";
import Images from "./pages/Images";
import GoogleHomePage from "./pages/GoogleHomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" exact element={<GoogleHomePage />} />
        <Route path="/gmail" element={<Gmail />} />
        <Route path="/images" element={<Images />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
