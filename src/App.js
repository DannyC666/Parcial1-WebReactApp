import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//pages
import{Home} from "../src/pages/Home"
import {FormPage} from "../src/pages/FormPage"
import {Detail} from "../src/pages/Detail"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    // d-flex justify-content-center align-items-center vh-100
    <div className="">
      <BrowserRouter>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<FormPage />} />
         <Route path="/menu" element={<Detail />} />
         
       </Routes>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
