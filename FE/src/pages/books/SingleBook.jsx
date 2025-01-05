import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksAPI";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import BookCard from "../books/BookCard";

const SingleBook = () => {
    const { id } = useParams();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
    const books = useSelector((state) => state.books.allBooks || []); // Default to an empty array
    const dispatch = useDispatch();

    // Filter books of the same category, excluding the current book
    const sameCategoryBooks = books.filter(
        (b) => b.category === book?.category && b.id !== book?.id
    );

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (isLoading) {
        return <div className="text-center py-10">Loading book details...</div>;
    }

    if (isError || !book) {
        return (
            <div className="text-center py-10 text-red-500">
                Error loading book details. Please try again later.
            </div>
        );
    }

    return (
        <>
            {/* Book Details */}
            <div className="flex ml-[60px]">
                <div className="max-w-lg shadow-md px-10">
                    <h1 className="text-2xl font-bold mb-6">{book?.title || "Unknown Title"}</h1>

                    <div>
                        <img
                            src={getImgUrl(book?.coverImage)}
                            alt={book?.title || "Book Cover"}
                            className="mb-8"
                        />

                        <div className="mb-5">
                            <p className="text-gray-700 mb-2">
                                <strong>Author:</strong> {book?.author || "Unknown"}
                            </p>
                            <p className="text-gray-700 mb-4">
                                <strong>Published:</strong>{" "}
                                {book?.createdAt
                                    ? new Date(book.createdAt).toLocaleDateString()
                                    : "Unknown"}
                            </p>
                            <p className="text-gray-700 mb-4 capitalize">
                                <strong>Category:</strong> {book?.category || "Uncategorized"}
                            </p>
                            <p className="text-gray-700">
                                <strong>Description:</strong> {book?.description || "No description"}
                            </p>
                        </div>

                        <button
                            onClick={() => handleAddToCart(book)}
                            className="btn-primary px-6 flex items-center gap-1"
                        >
                            <FiShoppingCart />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Books of the Same Category */}
            <div className="py-10 px-12">
                <h2 className="text-xl font-bold mb-6">Books in the Same Category</h2>
                {sameCategoryBooks.length > 0 ? (
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 40 },
                            1024: { slidesPerView: 3, spaceBetween: 50 },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {sameCategoryBooks.map((book, index) => (
                            <SwiperSlide key={index}>
                                <BookCard book={book} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="text-gray-500">No books found in this category.</div>
                )}
            </div>
        </>
    );
};

export default SingleBook;
