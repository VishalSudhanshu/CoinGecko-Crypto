import BannerImage from "../../assets/banner1.jpeg";

function Banner(){
    return (
        <div className="sm:block hidden">
            <img src={BannerImage}
            className="h-full w-full"/>
            <div className="absolute md:top-28 lg:top-36 top-24 right-0 left-0 text-center  ">
                <h1 className="text-2xl md:text-5xl text-white font-semibold pb-4">
                    Crypto Tracker
                </h1>
                <p className="text-sm text-white ">Get all infor regarding cryptocurrencies</p>
            </div>
        </div>
    )
}

export default Banner;