import { memo } from "react";
import BookCard from "./BookCard";

const SearchResult = ({ books = [] }) => {
  if (books.length === 0) return <div>NoData</div>;

  return (
    <div className="max-h-[300px] overflow-auto flex flex-col gap-4 bg-white absolute top-[120%] left-0 shadow-2xl rounded-br-md rounded-bl-md">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
};

export default memo(SearchResult);
