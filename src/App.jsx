import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import HomePage from "./pages/homePage";
import About from "./pages/about";
import Service from "./pages/servicess";
import Portfolio from "./pages/portfolio";
import Add from "./pages/add";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/add" element={<Add />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
