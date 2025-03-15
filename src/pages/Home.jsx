import { Container, Col, Row } from "react-bootstrap";
import {} from "../components/InputCard"
import {HomeBtn} from "../components/HomeBtn/HomeBtn"
import styles from "./pageStyles/home.css"
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const goToDetail = (title, image) => {
    navigate("/detail", { state: { navbarTitle: title, navbarImage: image } });
    console.log(title)
  };

  return (
    <div 
      className="d-flex justify-content-center align-items-center vh-100 buttons-home-card"
      style={{
        backgroundImage: "url('https://th.bing.com/th/id/R.b44ebd204a04b2da18e1a5b5dbb96b72?rik=yRGLPcDuxmVI%2bQ&pid=ImgRaw&r=0')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "103%",
        height: "100vh",
        marginLeft: "-15px",
        padding: "0",
      }}
    >
      <Container className="menu-container d-flex justify-content-center align-items-center">
        <Row className="text-center w-100">


          <Col xs={4} className="menu-item">
            <HomeBtn onClick={() => goToDetail("MENU", "./assets/menuFoodIcon.svg")} buttonTitle={"MENU"}  imageRoute={"./assets/menuFoodIcon.svg"}/>
          </Col>
          <Col xs={4} className="menu-item">
            <HomeBtn onClick={() => goToDetail("STORES", "./assets/storeIcon.svg")} buttonTitle={"STORES"}  imageRoute={"./assets/storeIcon.svg"}/>
          </Col>
          <Col onClick={() => goToDetail("CART", "./assets/shoppingCart.svg")} xs={4} className="menu-item">
            <HomeBtn buttonTitle={"CART"} imageRoute={"./assets/shoppingCart.svg"}/>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

  
  export default Home;

    
