import React, { FC } from "react";
import PaperBook from "../assets/PaperBook.jpg";
import ebook from "../assets/ebook.jpg";
import shelves from "../assets/shelves.jpg";

const DesignSection: FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4 space-y-12">
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2 ">
            <h2 className="text-3xl font-bold mb-4">About LitLender</h2>
            <p className="text-lg font-semibold mb-4">
              At LitLender, we believe in the transformative power of literature
              and the importance of making diverse reading accessible to
              everyone.
            </p>
            <p className="text-gray-700">
              Our mission is to foster a vibrant community of readers who can
              share and discover books, transcending geographical boundaries and
              financial constraints.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={PaperBook}
              alt="PaperBook"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2 order-2 md:order-1">
            <img src={ebook} alt="ebook" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-4">Our Story </h2>
            <p className="text-lg font-semibold mb-4">
              LitLender was born out of a love for books and a recognition of
              the limitations many face in accessing new reading materials.{" "}
            </p>
            <p className="text-gray-700">
              Whether you're a voracious reader with a burgeoning personal
              library or someone seeking to explore new literary worlds,
              LitLender offers a solution that brings together book lovers from
              all walks of life. Founded by a group of passionate readers, our
              platform aims to democratize access to literature, promoting a
              culture of sharing and sustainability.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="md:w-1/2 ">
            <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg font-semibold mb-4">Diverse Genres</p>
            <p className="text-gray-700">
              From mystery to romance, sci-fi to historical fiction, self-help
              to fantasy, LitLender covers a wide range of genres. Our extensive
              catalog ensures that there is something for everyone, no matter
              your reading preference.
            </p>
            <p className="text-lg font-semibold mb-4"> Community-Driven</p>
            <p className="text-gray-700">
              At the heart of LitLender is our community. We encourage members
              to connect, share recommendations, and engage in discussions about
              their favorite reads. Our platform is designed to facilitate
              meaningful interactions and foster a sense of camaraderie among
              readers.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={shelves} alt="shelves" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignSection;
