import './App.css'
import { Routes, Route } from "react-router-dom";
import Header from './pages/Header';
import Contact from './pages/Contact';
import Footer from "./pages/Footer";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <>
      <Header />  

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
