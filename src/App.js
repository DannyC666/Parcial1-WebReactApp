import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//pages
import{Home} from "../src/pages/Home"
import {FormPage} from "../src/pages/FormPage"
import {Detail} from "../src/pages/Detail"
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";


function App() {
  return (
    <div className="">
        
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<FormPage />} />
          <Route
            path="/detail"
            element={
              <Detail navbarTitle="Default Title" navbarImage="./assets/defaultIcon.svg" />
            }
          />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>


  
    </div>
  );
}

export default App;
