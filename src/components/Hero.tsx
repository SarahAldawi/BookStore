import React, { FC } from "react";

const Hero: FC = () => {
  return (
    <div className="py-20 px-4 text-center text-ReddenedEarth">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to LitLender</h1>
        <p className="text-lg md:text-xl lg:text-2xl">
          Your premier online platform for lending and borrowing books across a
          myriad of genres.
        </p>
      </div>
    </div>
  );
};

export default Hero;
