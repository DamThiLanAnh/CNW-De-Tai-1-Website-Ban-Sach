import { FiShoppingCart } from "react-icons/fi";
import { useParams } from "react-router-dom";
import { getImgUrl } from '../../utils/getImgUrl';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';
import { useFetchAllBooksQuery, useFetchBookByIdQuery } from '../../redux/features/books/booksApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BookCard from '../books/BookCard';

const SingleBook = () => {
    const { id } = useParams();
    const { data: books = [] } = useFetchAllBooksQuery();
    const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);
    const dispatch = useDispatch();
    // console.log(books)
    // Filter books by the same category, excluding the current book
    const filteredBooks = books.filter(
        (b) => b.category === book?.category
    );

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError || !book) return <div>Error loading book information.</div>;

    return (
        <>
            {/* Book Details */}
            <div className="max-w-full shadow-md px-10 p-2 flex">
                {/* Left side: Image and Title */}
                <div className="w-1/3 pr-6">
                    <h1 className="text-2xl font-bold mb-2 pb-3">{book.title}</h1>
                    <img
                        src={getImgUrl(book.coverImage)}
                        alt={book.title}
                        className="mb-6 px-5"
                    />
                </div>

                {/* Right side: Author, Published, Category, Description */}
                <div className="w-2/3 pt-11">
                    <div className="mb-5">
                        <p className="text-gray-700 mb-2">
                            <strong>Author:</strong> {book.author || 'Harper Lee'}
                        </p>
                        <p className="text-gray-700 mb-4">
                            <strong>Published:</strong>{' '}
                            {book.createdAt ? new Date(book.createdAt).toLocaleDateString() : '6/1/2025'}
                        </p>
                        <p className="text-gray-700 mb-4 capitalize">
                            <strong>Category:</strong> {book.category || 'Uncategorized'}
                        </p>
                        <p className="text-gray-700">
                            <strong>Description:</strong> {book.description || 'No description available.'}
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

            {/* Books in the Same Category */}
            <div className="mt-10">
                <h2 className="text-xl font-bold mb-6">Books in the Same Category</h2>
                {filteredBooks.length > 0 ? (
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 40 },
                            1024: { slidesPerView: 3, spaceBetween: 50 },
                            1180: { slidesPerView: 3, spaceBetween: 50 },
                        }}
                        modules={[Navigation]}
                        className="mySwiper"
                    >
                        {filteredBooks.map((book, index) => (
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
