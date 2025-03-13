import {CardDetail} from "../components/CardDetail";
import {CarouselImages} from "../components/CarouselImages/CarouselImages"

const { useEffect, useState } = require("react");

export function Detail() {

    const [food, setFood] = useState([]);
    useEffect(()=>{
        const URL = "https://gist.githubusercontent.com/DannyC666/d75847ee72c5e99c049ad8d431022051/raw/8a2b9c2676b3d754860dbe3a37e385b39a1984e4/food.json";
        fetch(URL).then(data => data.json()).then(data => {
          setFood(data);
        })
    }, []);
    // console.log(food)

    const [imageCarousel, setImageCarousel] = useState([]);
    useEffect(()=>{
        const URL = "https://gist.githubusercontent.com/DannyC666/f4359903776fbac44dde763b2beda30f/raw/9d838a5607c85c34503d70e5e9cb45dea85b0f61/carouselMock.json";
        fetch(URL).then(data => data.json()).then(data => {
          setImageCarousel(data);
        })
    }, []);
    console.log(imageCarousel)



    return (

      <div>
        <nav className="navbar sticky-top bg-body-tertiary ">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"> Menu</a>
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