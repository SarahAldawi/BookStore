import React, { createContext, useContext, useState, FC } from "react";

interface Book {
    key: string;
    title: string;
    author_name: string;
}

interface ReadingListContextProps {
    readingList: Book[];
    addToReadingList: (book: Book) => void;
    removeFromReadingList: (key: string) => void;
}

const ReadingListContext = createContext<ReadingListContextProps | undefined>(
    undefined,
);

export const useReadingList = () => {
    const context = useContext(ReadingListContext);
    if (!context) {
        throw new Error(
            "useReadingList must be used within a ReadingListProvider",
        );
    }
    return context;
};

export const ReadingListProvider: FC = ({ children }) => {
    const [readingList, setReadingList] = useState<Book[]>([]);

    const addToReadingList = (book: Book) => {
        setReadingList((prevList) => [...prevList, book]);
    };

    const removeFromReadingList = (key: string) => {
        setReadingList((preList) => preList.filter((book) => book.key !== key));
    };
    return (
        <ReadingListContext.Provider
            value={{ readingList, addToReadingList, removeFromReadingList }}
        >
            {children}
        </ReadingListContext.Provider>
    );
};
