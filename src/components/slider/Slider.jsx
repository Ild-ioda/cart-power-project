import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import card from "./../../img/icons/cardMedia.png";

const SimpleCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={card} alt="slide1" />
      </div>
      <div>
        <img src={card} alt="slide2" />
      </div>
      <div>
        <img src={card} alt="slide3" />
      </div>
      <div>
        <img src={card} alt="slide4" />
      </div>
      <div>
        <img src={card} alt="slide5" />
      </div>
      <div>
        <img src={card} alt="slide6" />
      </div>
      <div>
        <img src={card} alt="slide7" />
      </div>
      <div>
        <img src={card} alt="slide8" />
      </div>
    </Slider>
  );
};

const App = () => {
  return (
    <div>
      <SimpleCarousel />
    </div>
  );
};

export default App;
