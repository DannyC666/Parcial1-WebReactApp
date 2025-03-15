import {CardDetail} from "../components/CardDetail";
import {CarouselImages} from "../components/CarouselImages/CarouselImages"
import styles from "./pageStyles/Detail.css"
import { useLocation } from "react-router-dom";
const { useEffect, useState } = require("react");



export function Detail({ navbarTitle, navbarImage }) {
    const location = useLocation();
    const navData = location.state || {};

    const [food, setFood] = useState([]);
    useEffect(()=>{
        const URL = "https://gist.githubusercontent.com/DannyC666/d75847ee72c5e99c049ad8d431022051/raw/8a2b9c2676b3d754860dbe3a37e385b39a1984e4/food.json";
        fetch(URL).then(data => data.json()).then(data => {
          setFood(data);
        })
    }, []);
    
    const [imageCarousel, setImageCarousel] = useState([]);
    useEffect(()=>{
        const URL = "https://gist.githubusercontent.com/DannyC666/f4359903776fbac44dde763b2beda30f/raw/9d838a5607c85c34503d70e5e9cb45dea85b0f61/carouselMock.json";
        fetch(URL).then(data => data.json()).then(data => {
          setImageCarousel(data);
        })
    }, []);
    
    return (

      <div>
        <nav className="navbar sticky-top navbar-styles">
          <div className="container-fluid d-flex justify-content-between align-items-center">
            
            <img src={navData.navbarImage || navbarImage} alt="Navbar Icon" className="navbar-icon"/>
            <a className="navbar-title" href="/home">{navData.navbarTitle || navbarTitle}</a>
           <img src={navData.navbarImage || navbarImage} alt="Navbar Icon" className="navbar-icon" />

          </div>
        </nav>

        <div>
          <CarouselImages items={imageCarousel}/>
        </div>

        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {food.slice(0, 4).map((item, index) => (
            <CardDetail 
              key={index} 
              titulo={item.nombre} 
              imageUrl={item.foto} 
            />
          ))}
        </div>

      </div>
      
    );
  }
  
  export default Detail;