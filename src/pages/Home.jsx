import { Card, Container, Col, Row } from "react-bootstrap";
import {} from "../components/InputCard"
import { useLocation } from "react-router-dom";
import {CardDetail} from "../components/CardDetail/"
import styles from "./FormPage.css"
import {HomeBtn} from "../components/HomeBtn/HomeBtn"



export function Home() {
  const location = useLocation();
  console.log("Datos recibidos:", location.state);

    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Container className="menu-container d-flex justify-content-center align-items-center">
        <Row className="text-center w-100" >
          <Col xs={4} className="menu-item">
            <HomeBtn buttonTitle={"menu"} route={"/menu"}  imageRoute={"https://cdn.icon-icons.com/icons2/3871/PNG/512/menu_icon_244496.png"}/>
          </Col>
          <Col xs={4} className="menu-item">
            <HomeBtn buttonTitle={"stores"} route={"/stores"} imageRoute={"https://png.pngtree.com/png-clipart/20191120/original/pngtree-store-icon-in-line-style-png-image_5053711.jpg"}/>
            
          </Col>
          <Col xs={4} className="menu-item">
            <HomeBtn buttonTitle={"cart"} route={"/cart"} imageRoute={"https://static.vecteezy.com/system/resources/previews/019/787/018/original/shopping-cart-icon-shopping-basket-on-transparent-background-free-png.png"}/>
          </Col>


        </Row>
          
         
        
        </Container> 
        
         


{/* 
        <CardDetail> 


        </CardDetail> */}
        
        
      </div>
      
    );
  }
  
  export default Home;

    
