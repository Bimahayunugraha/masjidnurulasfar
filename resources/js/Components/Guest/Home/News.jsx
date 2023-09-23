import React from "react";
import { Link } from "@inertiajs/react";
import { truncate } from "@/Utils/truncate";
import { formatDefaultDateTime } from "@/Utils/dateFormat";
import { removeTags } from "@/Utils/formatter";

export default function News(props) {
    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto max-w-screen-xl py-20 lg:py-24">
                <div className="flex flex-col items-center">
                    <span className="text-center font-bold uppercase tracking-widest text-primary-500 md:text-left">
                        Berita
                    </span>
                    <h2 className="text-center text-xl font-black tracking-wide text-primary-soft-violet sm:text-3xl">
                        Berita Terbaru Kami
                    </h2>
                </div>
                <div className="mt-16">
                    <div className="mb-6 grid grid-cols-1 gap-3 pt-0 sm:grid-cols-2 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:grid-cols-3">
                        {props.newsData?.map((news) => {
                            return (
                                <Link
                                    href={route(
                                        "detail-berita-masjid",
                                        news.slug
                                    )}
                                    className="group relative rounded-xl bg-white shadow-4 transition-all duration-300"
                                    key={news.id}
                                >
                                    <img
                                        className="rounded-t-xl"
                                        src={news.news_thumbnail}
                                        alt={news.image_name}
                                    />

                                    <div className="p-5">
                                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-primary-violet">
                                            {news.news_title}
                                        </h5>

                                        <div className="relative mb-3 inline-flex items-center space-x-3 text-sm md:space-x-4">
                                            <div className="relative inline-flex items-center">
                                                <i className="fa-solid fa-user flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                                                <span className="ml-2 text-sm leading-relaxed">
                                                    {news.news_author}
                                                </span>
                                            </div>
                                            <div className="relative inline-flex items-center">
                                                <i className="fa-solid fa-clock flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                                                <span className="ml-2 text-sm leading-relaxed">
                                                    {formatDefaultDateTime(
                                                        news.news_date
                                                    )}
                                                </span>
                                            </div>
                                            <div className="relative inline-flex items-center">
                                                <i className="fa-solid fa-thumbtack flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                                                <span className="ml-2 text-sm leading-relaxed">
                                                    {news.news_category}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                            {removeTags(
                                                news.news_excerpt
                                            ).substr(0, 50)}
                                            ...{" "}
                                        </p>
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
