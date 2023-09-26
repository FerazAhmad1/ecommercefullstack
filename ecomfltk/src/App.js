import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Store } from "./components/Store";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </div>
  );
}

export default App;
