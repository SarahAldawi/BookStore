import { FC } from "react";
import Carousel from "../components/Carousel";
import { NavLink } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div>
      <Carousel />
      <div className="pt-20 pb-10 px-4 text-center text-ReddenedEarth">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-4">
            Discover, Organize, and Cherish Your Reading Journey
          </h1>
          <p className="text-lg md:text-l lg:text-2xl">
            Keep track of every book you've ever read, rate your favorites, and
            explore new recommendations tailored just for you.
          </p>
        </div>
      </div>
      <div className="max-w-screen-xl flex justify-center mx-auto">
        <NavLink to="Browse" className="mb-4">
          <button className=" bg-ReddenedEarth rounded-md hover:bg-Redwood focus:text-white px-4 py-2  text-white text-4xl font-extrabold ">
            Create Your Collection
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
