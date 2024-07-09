import { FC } from "react";
import { useReadingList } from "../Context/ReadingListContext";

const YourBooks: FC = () => {
    const { readingList, removeFromReadingList } = useReadingList();
    const handleRemoveClick =
        (bookKey: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
            removeFromReadingList(bookKey);
        };
    return (
        <>
            <h2>Reading List</h2>
            <div className="mt-4 flex justify-end">
                <ul className="w-full w-full">
                    {readingList.map((book) => (
                        <li
                            key={book.key}
                            className="border-b py-2 flex items-center justify-between"
                        >
                            <strong>{book.title}</strong> by {book.author_name}
                            <button
                                className="btn btn-warning border-inherit"
                                onClick={handleRemoveClick(book.key)}
                            >
                                Remove from the reading list{" "}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default YourBooks;
