import banner_img from "../../assets/banner.png";

function Banner() {
    return (
        <div className="flex flex-col md:flex-row-reverse py-16 justify-between items-center gap-8 px-12">
            <div className="md:w-1/2 w-full flex items-center md:justify-center">
                <img src={banner_img} alt="Banner" className="max-w-full h-auto" />
            </div>
            {/* Nội dung bên trái */}
            <div className="md:w-1/2 w-full">

                <h1 className="text-4xl font-bold text-blue-900">
                    New Releases This Week
                </h1>
                <p className="text-gray-600">
                    It`s time to update your reading list with some of the latest and greatest releases in the literary world.
                    From heart-pumping thrillers to captivating memoirs, this week`s new releases offer something for everyone.
                </p>
                <div className="py-10">
                    <button className="btn-primary">Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
