import classes from "./Caraousel.module.scss";
import Slider from "react-slick";
import caraousel1 from "../../img/caraousel-1.jpg";
import caraousel2 from "../../img/caraousel-2.jpg";
import caraousel3 from "../../img/caraousel-3.jpg";
import caraousel4 from "../../img/caraousel-4.jpg";

const Caraousel = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className={classes.slider}>
    <Slider {...settings} className={classes.caraousel}>
      <img src={caraousel1} alt="caraousel item" />
      <img src={caraousel2} alt="caraousel item" />
      <img src={caraousel3} alt="caraousel item" />
      <img src={caraousel4} alt="caraousel item" />
    </Slider>
    </section>
  );
};

export default Caraousel;
