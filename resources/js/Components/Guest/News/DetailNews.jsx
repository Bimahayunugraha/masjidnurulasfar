import React from "react";
import { Head, Link } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Pagination, Controller, Navigation } from "swiper";
import { truncate } from "@/Utils/truncate";
import { formatDefaultDate, formatDefaultDateTime } from "@/Utils/dateFormat";
import parse from "html-react-parser";

export default function DetailNews(props) {
    console.log(props);
    return (
        <div className="relative isolate overflow-hidden bg-white py-20 sm:py-20 lg:overflow-visible lg:px-0">
            <Head
                title={`Detail Berita - [${props.newsDetailData?.news_title}]`}
            />

            <div className="container mx-auto">
                <div className="z-10 mb-5 w-full px-0 md:px-0">
                    <nav
                        className="relative flex flex-wrap"
                        aria-label="Breadcrumb"
                    >
                        <ol className="inline-flex flex-wrap items-center space-x-1">
                            <li>
                                <div className="flex items-center">
                                    <Link
                                        href={route("berita-masjid")}
                                        className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-blue-500 hover:bg-blue-400 hover:text-white"
                                    >
                                        <i className="fa-solid fa-arrow-left text-xl"></i>
                                    </Link>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <p className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                        Detail Berita
                                    </p>
                                    <svg
                                        aria-hidden="true"
                                        className="h-6 w-6 text-gray-400"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                </div>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <p className="text-sm font-medium text-gray-700 hover:text-gray-800 md:mt-0">
                                        {props.newsDetailData?.news_title}
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="mx-auto max-w-2xl px-4 pb-16 pt-0 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-0 lg:pb-24 lg:pt-0">
                    <div className="lg:col-span-9 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pr-8">
                        <div className="mx-auto max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-0">
                            <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg shadow lg:block">
                                <img
                                    src={props.newsDetailData?.news_images[0]}
                                    alt={
                                        props.newsDetailData
                                            ?.news_images_name[0]
                                    }
                                    className="h-full w-full object-cover object-center"
                                />
                            </div>
                            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow">
                                    <img
                                        src={
                                            props.newsDetailData?.news_images[1]
                                        }
                                        alt={
                                            props.newsDetailData
                                                ?.news_images_name[1]
                                        }
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow">
                                    <img
                                        src={
                                            props.newsDetailData?.news_images[2]
                                        }
                                        alt={
                                            props.newsDetailData
                                                ?.news_images_name[2]
                                        }
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>
                            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow">
                                    <img
                                        src={
                                            props.newsDetailData?.news_images[3]
                                        }
                                        alt={
                                            props.newsDetailData
                                                ?.news_images_name[3]
                                        }
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow">
                                    <img
                                        src={
                                            props.newsDetailData?.news_images[4]
                                        }
                                        alt={
                                            props.newsDetailData
                                                ?.news_images_name[4]
                                        }
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                            </div>

                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                pagination={{
                                    clickable: true,
                                    dynamicBullets: true,
                                }}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    765: {
                                        slidesPerView: 2,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                    },
                                }}
                                modules={[Pagination, Controller, Navigation]}
                                className="mySwiper"
                                loop={true}
                                navigation={true}
                            >
                                {props.newsDetailData?.news_images.map(
                                    (image, index) => {
                                        return (
                                            <SwiperSlide key={index}>
                                                <div className="aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4 block rounded-lg shadow sm:overflow-hidden lg:hidden">
                                                    <img
                                                        src={image}
                                                        alt="Gambar Berita"
                                                        className="h-80 w-full rounded-lg object-cover object-center"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        );
                                    }
                                )}
                            </Swiper>
                        </div>
                        <h1 className="mt-3 text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
                            {props.newsDetailData?.news_title}
                        </h1>
                        <div className="relative mb-2 mt-3 inline-flex items-center space-x-3 text-sm md:space-x-4">
                            <div className="relative inline-flex items-center">
                                <i className="fa-solid fa-user flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                                <span className="ml-2 text-sm leading-relaxed">
                                    {props.newsDetailData?.news_author}
                                </span>
                            </div>
                            <div className="relative inline-flex items-center">
                                <i className="fa-solid fa-clock flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                                <span className="ml-2 text-sm leading-relaxed">
                                    {formatDefaultDateTime(
                                        props.newsDetailData?.news_date
                                    )}
                                </span>
                            </div>
                            <div className="relative inline-flex items-center">
                                <i className="fa-solid fa-thumbtack flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                                <span className="ml-2 text-sm leading-relaxed">
                                    {props.newsDetailData?.news_category}
                                </span>
                            </div>
                        </div>
                        <div className="pb-10 pt-4 lg:pb-16 lg:pt-3">
                            <article className="mx-auto max-w-screen-lg">
                                <div className="prose prose-sm lg:prose-base prose-a:text-blue-500">
                                    {parse(
                                        props.newsDetailData?.news_content.toString()
                                    )}
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="mt-4 lg:sticky lg:top-4 lg:col-span-3 lg:mt-0 lg:overflow-hidden">
                        <h2 className="text-sm font-black tracking-wide text-primary-soft-violet sm:text-base">
                            Berita Lainnya
                        </h2>

                        {props.otherNewsData.map((item) => {
                            return (
                                <Link
                                    href={route(
                                        "detail-berita-masjid",
                                        item.slug
                                    )}
                                    className="flex flex-row items-center rounded-lg p-2 hover:bg-gray-50 md:max-w-xl md:flex-row"
                                    key={item.id}
                                >
                                    <img
                                        className="float-left w-[80px] rounded-lg object-cover shadow md:w-[80px]"
                                        src={item.news_thumbnail}
                                        alt={item.image_name}
                                    />
                                    <div className="flex flex-col justify-between px-4 leading-normal">
                                        <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                                            {truncate(item.news_title, 50)}
                                        </h5>
                                        <p className="mb-2 text-sm font-medium text-gray-700">
                                            {item.news_author}
                                        </p>
                                        <div className="flex items-center">
                                            <span className="relative flex h-3 w-3">
                                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                                                <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                                            </span>
                                            <span className="ml-2 text-xs text-gray-600">
                                                {item.news_category} •{" "}
                                                {formatDefaultDate(
                                                    item.news_date
                                                )}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
