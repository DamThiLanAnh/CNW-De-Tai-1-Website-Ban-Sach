import React from "react";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";
import { useDebounce } from "../../hooks/useDebounce";
import { useSelector } from "react-redux";
import Loading from "../Loading/Loading";
const SearchHeader = ({books}) => {
  const [filteredBooks, setFilterdBooks] = useState([]);
  const [valueSearch, setValueSearch] = useState("");
  const finalSearchValue = useDebounce(valueSearch);
  const [isLoading, setIsLoading] = useState(false);
  const handleChangeSearchValue = (e) => {
    setValueSearch(e?.target?.value);
  };
  useEffect(() => {
    if (valueSearch.trim() === "") {
      setFilterdBooks([]);
      return;
    }
    setIsLoading(true);
    const listBooks = books.filter((book) =>
      book?.title?.toLowerCase()?.includes(valueSearch.toLowerCase())
    );
    setFilterdBooks(listBooks);
    setIsLoading(false);
  }, [finalSearchValue]);

  return (
    <div className="relative sm:w-72 w-40 border-gray-300 border rounded-md">
      {isLoading ? (
        <div className="absolute w-[14px] h-[14px] left-3 inset-y-2">
          <Loading />
        </div>
      ) : (
        <CiSearch className="absolute inline-block left-3 inset-y-2" />
      )}
      <input
        type="text"
        placeholder="Search here"
        className="w-full py-1 md:px-8 px-6 rounded-md 
                                focus:outline-none"
        onChange={handleChangeSearchValue}
        value={valueSearch}
      />
      {filteredBooks.length > 0 && valueSearch.trim() !== "" && (
        <SearchResult books={filteredBooks} isLoading={isLoading} />
      )}
    </div>
  );
};

export default SearchHeader;
