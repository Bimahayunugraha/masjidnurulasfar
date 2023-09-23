import { Head, Link } from "@inertiajs/react";
import React from "react";
import image from "../../../../../public/assets/img/jpg/pengajian-mualaf.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Pagination, Controller, Navigation } from "swiper";
import { truncate } from "@/Utils/truncate";

export default function DetailEvent() {
    const detailEventData = {
        id: 1,
        event_title: "Event 1",
        event_date: "2021-01-01",
        event_thumbnail: image,
        event_images: [
            {
                src: image,
                alt: "Two each of gray, white, and black shirts laying flat.",
            },
            {
                src: image,
                alt: "Model wearing plain black basic tee.",
            },
            {
                src: image,
                alt: "Model wearing plain gray basic tee.",
            },
            {
                src: image,
                alt: "Model wearing plain white basic tee.",
            },
            {
                src: image,
                alt: "Model wearing plain white basic tee.",
            },
        ],
        excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        description:
            'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    };

    const eventsData = [
        {
            id: 1,
            event_title: "Event 1",
            slug: "event-1",
            event_date: "2021-01-01",
            event_thumbnail: image,
            event_images: [
                {
                    src: image,
                    alt: "Two each of gray, white, and black shirts laying flat.",
                },
                {
                    src: image,
                    alt: "Model wearing plain black basic tee.",
                },
                {
                    src: image,
                    alt: "Model wearing plain gray basic tee.",
                },
                {
                    src: image,
                    alt: "Model wearing plain white basic tee.",
                },
                {
                    src: image,
                    alt: "Model wearing plain white basic tee.",
                },
            ],
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        },
        {
            id: 2,
            event_title: "Event 2",
            slug: "event-2",
            event_date: "2021-01-01",
            event_thumbnail: image,
            event_images: [
                {
                    src: image,
                    alt: "Two each of gray, white, and black shirts laying flat.",
                },
                {
                    src: image,
                    alt: "Model wearing plain black basic tee.",
                },
                {
                    src: image,
                    alt: "Model wearing plain gray basic tee.",
                },
                {
                    src: image,
                    alt: "Model wearing plain white basic tee.",
                },
                {
                    src: image,
                    alt: "Model wearing plain white basic tee.",
                },
            ],
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        },
        {
            id: 3,
            event_title: "Event 3",
            slug: "event-3",
            event_date: "2021-01-01",
            event_thumbnail: image,
            event_images: [
                {
                    src: image,
                    alt: "Two each of gray, white, and black shirts laying flat.",
                },
                {
                    src: image,
                    alt: "Model wearing plain black basic tee.",
                },
                {
                    src: image,
                    alt: "Model wearing plain gray basic tee.",
                },
                {
                    src: image,
                    alt: "Model wearing plain white basic tee.",
                },
                {
                    src: image,
                    alt: "Model wearing plain white basic tee.",
                },
            ],
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
        },
    ];

    return (
        <div className="relative overflow-hidden">
            <Head title={`Detail Event - [${detailEventData.event_title}]`} />
            <div className="py-20 md:py-20">
                <div className="container mx-auto">
                    <div className="bg-white">
                        <div className="pt-2">
                            <div className="z-10 mb-5 w-full px-0 md:px-0">
                                <nav
                                    className="relative flex flex-wrap"
                                    aria-label="Breadcrumb"
                                >
                                    <ol className="inline-flex flex-wrap items-center space-x-1">
                                        <li>
                                            <div className="flex items-center">
                                                <Link
                                                    href={route("event-masjid")}
                                                    className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-blue-500 hover:bg-blue-400 hover:text-white"
                                                >
                                                    <i className="fa-solid fa-arrow-left text-xl"></i>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <p className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                                    Detail event
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
                                                    {
                                                        detailEventData.event_title
                                                    }
                                                </p>
                                            </div>
                                        </li>
                                    </ol>
                                </nav>
                            </div>

                            {/* Image gallery */}
                            <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-2">
                                <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg shadow lg:block">
                                    <img
                                        src={
                                            detailEventData.event_images[0].src
                                        }
                                        alt={
                                            detailEventData.event_images[0].alt
                                        }
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow">
                                        <img
                                            src={
                                                detailEventData.event_images[1]
                                                    .src
                                            }
                                            alt={
                                                detailEventData.event_images[1]
                                                    .alt
                                            }
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow">
                                        <img
                                            src={
                                                detailEventData.event_images[2]
                                                    .src
                                            }
                                            alt={
                                                detailEventData.event_images[2]
                                                    .alt
                                            }
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                </div>
                                <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow">
                                        <img
                                            src={
                                                detailEventData.event_images[3]
                                                    .src
                                            }
                                            alt={
                                                detailEventData.event_images[3]
                                                    .alt
                                            }
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg shadow">
                                        <img
                                            src={
                                                detailEventData.event_images[4]
                                                    .src
                                            }
                                            alt={
                                                detailEventData.event_images[4]
                                                    .alt
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
                                    modules={[
                                        Pagination,
                                        Controller,
                                        Navigation,
                                    ]}
                                    className="mySwiper"
                                    loop={true}
                                    navigation={true}
                                >
                                    {detailEventData.event_images.map(
                                        (image, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <div className="aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4 block rounded-lg shadow sm:overflow-hidden lg:hidden">
                                                        <img
                                                            src={image.src}
                                                            alt={image.alt}
                                                            className="h-full w-full rounded-lg object-cover object-center"
                                                        />
                                                    </div>
                                                </SwiperSlide>
                                            );
                                        }
                                    )}
                                </Swiper>
                            </div>

                            {/* Product info */}
                            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-2 lg:pt-16 lg:pb-24">
                                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                        {detailEventData.event_title}
                                    </h1>
                                </div>
                                {/* Options */}
                                <div className="mt-4 lg:row-span-3 lg:mt-0">
                                    <h2 className="sr-only">
                                        Product information
                                    </h2>
                                    <div className="relative mb-3 space-x-2 text-sm">
                                        <div className="inline-flex items-center">
                                            <div className="mr-3 flex-shrink-0">
                                                <span className="text-secondary-navy">
                                                    <i className="fa-solid fa-clock"></i>
                                                </span>
                                            </div>
                                            <div className="flex-1 text-base leading-relaxed">
                                                {detailEventData.event_date}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                                    {/* Description and details */}
                                    <div>
                                        <h3 className="sr-only">Description</h3>

                                        <div className="space-y-6">
                                            <p className="text-base text-gray-900">
                                                {detailEventData.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 className="mt-3 text-base font-black tracking-wide text-primary-soft-violet sm:text-lg">
                        Event Lainnya
                    </h2>
                    <div className="mb-6 grid grid-cols-1 gap-3 pt-0 sm:grid-cols-2 md:grid-cols-2 md:gap-3 xl:grid-cols-3 2xl:grid-cols-3">
                        {eventsData.map((item) => {
                            return (
                                <div
                                    className="flex flex-row items-center rounded-lg md:max-w-xl md:flex-row"
                                    key={item.id}
                                >
                                    <img
                                        className="h-32 w-48 rounded-lg object-cover md:h-32 md:w-48"
                                        src={item.event_thumbnail}
                                        alt=""
                                    />
                                    <div className="flex flex-col justify-between p-4 leading-normal">
                                        <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
                                            {truncate(item.event_title, 50)}
                                        </h5>
                                        <div className="relative mb-1 space-x-2 text-sm">
                                            <div className="inline-flex items-center">
                                                <div className="mr-3 flex-shrink-0">
                                                    <span className="text-secondary-navy">
                                                        <i className="fa-solid fa-clock"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-1 text-sm leading-relaxed text-gray-400">
                                                    {item.event_date}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="mb-3 whitespace-pre-line break-all text-sm font-normal text-gray-700">
                                            {item.excerpt}
                                        </p>
                                        <div className="inline-flex items-center text-center transition duration-300 sm:flex-row">
                                            <Link
                                                href={route(
                                                    "detail-event-masjid",
                                                    item.slug
                                                )}
                                                className="inline-flex items-center text-center text-sm font-medium text-blue-600 transition duration-300 hover:text-blue-700"
                                            >
                                                <span className="hover:underline">
                                                    Baca lebih lajut
                                                </span>
                                                <i className="fa-solid fa-arrow-right ml-2 text-base"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
