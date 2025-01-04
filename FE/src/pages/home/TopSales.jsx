import { useState } from 'react'
import BookCard from '../books/BookCard'
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksAPI';
const categories = ["Choose a gender", "Business", "Fiction", "Horror", "Adventure"]

const TopSales = () => {
    const { data: books = [] } = useFetchAllBooksQuery();

    const [selectedCategory, setSelectedCategory] = useState("Choose a gender");

    // Filter books based on the selected category
    const filteredBooks = selectedCategory === "Choose a gender"
        ? books
        : books.filter((book) => book.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <>
            <div className="py-10 px-12">
                <h2 className="text-3xl font-semibold mb-6">Top Sales</h2>

                {/* Category filtering */}
                <div className="mb-10 flex items-center">
                    <select
                        name="category"
                        id="category"
                        className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                        onChange={(e) => setSelectedCategory(e.target.value)}>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Swiper for displaying books */}
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        1180: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        }
                    }}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        //Điều kiện render: Chỉ render slider nếu filteredBooks.length > 0.
                        filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                            <SwiperSlide key={index}>
                                <BookCard book={book} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>
        </>
    )
}

TopSales.propTypes = {
    book: PropTypes.object, // or PropTypes.any if you don't have a specific shape
};

export default TopSales;
