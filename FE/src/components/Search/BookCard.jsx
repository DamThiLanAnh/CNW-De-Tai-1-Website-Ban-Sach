import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
const BookCard = ({ book }) => {
  return (
    <Link to={`/books/${book?._id}`}>
      <div className="cursor-pointer w-full pt-1 pb-1 pl-2 pr-2 flex justify-between items-center">
        <div className="flex gap-4 items-start">
          <img
            src={getImgUrl(book?.coverImage)}
            alt="product"
            className="w-[20%] rounded-md object-cover"
          />
          <div className="flex flex-col items-start gap-[10px]">
            <p className="text-[1rem] font-semibold hover:text-blue-600 cursor-pointer">
              {book.title}
            </p>
            <p className="font-normal text-sm ">
              ${book?.newPrice}
              <span className="line-through font-normal ml-2 text-gray-400">
                ${book?.oldPrice}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
