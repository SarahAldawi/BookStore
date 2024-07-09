import { FC } from "react";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2 (1).jpg";
import book3 from "../assets/book3 .jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";
import book6 from "../assets/book6.jpg";
const Carousel: FC = () => {
  return (
    <div className="mt-4 max-w-screen-xl flex justify-center mx-auto">
      <div className="carousel carousel-center rounded-box">
        <div className="carousel-item">
          <img src={book1} alt="book" />
        </div>
        <div className="carousel-item">
          <img src={book2} alt="book" />
        </div>
        <div className="carousel-item">
          <img src={book3} alt="book" />
        </div>
        <div className="carousel-item">
          <img src={book4} alt="book" />
        </div>
        <div className="carousel-item">
          <img src={book5} alt="book" />
        </div>
        <div className="carousel-item">
          <img src={book6} alt="book" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
