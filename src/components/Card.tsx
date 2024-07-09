import { FC } from "react";
import { Article } from "../api/queries";
import Search from "./Search";

interface CardProps {
  data: Article;
}
const Card: FC<CardProps> = () => {
  return (
    <div className="pt-20 pb-10 px-4 mt-4 flex justify-center mx-auto">
      <Search />
    </div>
  );
};

export default Card;
