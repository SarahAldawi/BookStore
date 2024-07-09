import React, { FC, useState } from "react";
import { searchByTitle } from "../api/queries";
import { useReadingList } from "../Context/ReadingListContext";
interface Book {
  key: string;
  title: string;
  author_name: string;
}

const Search: FC = () => {
  const [searchResults, setSearchResults] = useState<Book[]>([]);
  const [searchTermTitle, setSearchTermTitle] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { addToReadingList } = useReadingList();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const results = await searchByTitle(searchTermTitle);
      setSearchResults(results);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Error fetching results. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchTermTitle}
            onChange={(e) => setSearchTermTitle(e.target.value)}
          />
          <button
            type="submit"
            className="border-none"
            style={{ outline: "none", boxShadow: "none" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </label>
      </form>
      {loading && <p className="mt-2">Searching...</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-4 flex justify-end">
        {searchResults?.docs?.length > 0 ? (
          <ul className="w-full max-w-md">
            {searchResults.docs.map((book) => (
              <li key={book.key} className="border-b py-2 flex items-center justify-between">
                <strong>{book.title}</strong> by {book.author_name}
                <button className="btn btn-neutral bg-ReddenedEarth border-inherit" onClick={() => addToReadingList(book)}>
                  add to reading list
                </button>
              </li>
            ))}
          </ul>
        ) : (
          !loading && <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
