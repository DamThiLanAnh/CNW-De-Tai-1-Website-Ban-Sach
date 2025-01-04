import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import BookCard from '../books/BookCard';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksAPI';
const Recommened = () => {
    const { data: books = [] } = useFetchAllBooksQuery();
    return (
        <div className='px-12 py-14'>
            <h2 className="text-3xl font-semibold mb-6">Gợi ý cho bạn</h2>
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
                    books.length > 0 && books.slice(5, 10).map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard book={book} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Recommened 