import { useRef } from "react";
import { Link } from "@inertiajs/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import decoratorBlob1 from "../../../../../public/assets/img/svg/svg-decorator-blob-1.svg";
import decorationImage1 from "../../../../../public/assets/img/png/decoration-image-1.png";
import imageMasjid1 from "../../../../../public/assets/img/jpeg/masjid-nurul-asfar-1.jpeg";

export default function Hero() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty("--progress", 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Swiper
            className="mySwiper"
            modules={[EffectFade, Autoplay]}
            effect="fade"
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
            <SwiperSlide>
                {/* <div
                    style={{ backgroundImage: `url(${imageMasjid1})` }}
                    className="relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144"
                >
                    <div className="z-10 absolute inset-0 bg-black opacity-90">
                        <div className="px-4 flex flex-1 flex-col justify-center items-center">
                            <h1 className="tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug mt-24 sm:mt-0">
                                Lorem ipsum dolor sit amet.
                            </h1>
                            <Link className="rounded-full px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 font-bold shadow transition duration-300 bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:outline-none focus:shadow-outline">
                                Mulai
                            </Link>
                        </div>
                    </div>
                </div> */}
                <div className="hero-container-2 relative z-[3] flex min-h-[100vh] w-full items-center bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gray-900 before:bg-opacity-90 lg:bg-fixed lg:before:bg-gray-900 lg:before:bg-opacity-90 lg:after:absolute lg:after:top-0 lg:after:bottom-0 lg:after:w-[40%]">
                    <div className="container z-[1] mx-auto max-w-4xl">
                        <div>
                            <div className="flex w-full flex-1 flex-col items-center justify-start px-4 md:justify-center">
                                <h2 className="line m-0 text-3xl font-bold leading-[1.2] text-white">
                                    Assalamualaikum, Selamat Datang di Masjid
                                    Nurul Asfar
                                </h2>
                                <blockquote className="b my-[40px] border-l-4 border-indigo-500 pl-[20px] text-lg text-gray-400 md:text-center lg:text-gray-400">
                                    <p>
                                        Sebagai tempat bernaung dan advokasi
                                        bagi para mualaf.
                                    </p>
                                </blockquote>
                                <div className="text-center lg:text-start"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="hero-container-1 relative z-[3] flex min-h-[100vh] w-full items-center bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-gray-900 before:bg-opacity-90 lg:bg-fixed lg:before:bg-gray-900 lg:before:bg-opacity-90 lg:after:absolute lg:after:top-0 lg:after:bottom-0 lg:after:w-[40%]">
                    <div className="container z-[1] mx-auto max-w-4xl">
                        <div>
                            <div className="flex w-full flex-1 flex-col items-center justify-start px-4 md:justify-center">
                                <h2 className="line m-0 text-3xl font-bold leading-[1.2] text-white">
                                    Masjid untuk Wisata Religi
                                </h2>
                                <blockquote className="b my-[40px] border-l-4 border-indigo-500 pl-[20px] text-lg text-gray-400 md:text-center lg:text-gray-400">
                                    <p>
                                        Masjid Nurul Asfar dijadikan sebagai
                                        tempat wisata religi oleh pemerintah
                                        desa setempat untuk membantu para
                                        mualaf.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    );
}
