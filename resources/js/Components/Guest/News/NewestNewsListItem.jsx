import React from "react";
import { motion } from "framer-motion";
import { truncate } from "@/Utils/truncate";
import { Link } from "@inertiajs/react";
import { removeTags } from "@/Utils/formatter";
import { formatDefaultDateTime } from "@/Utils/dateFormat";

export default function NewestNewsListItem({ drag, newsData }) {
    console.log(newsData.slug);
    const {
        slug,
        news_title,
        news_category,
        news_thumbnail,
        image_name,
        news_author,
        news_excerpt,
        news_date,
    } = newsData;

    return (
        <motion.div
            className={`flex flex-col items-center rounded-lg bg-white md:max-w-xl md:flex-row ${
                drag && "cursor-grab active:cursor-grabbing"
            } min-w-[18rem] md:min-w-[36rem]`}
        >
            <img
                className="h-60 w-full rounded-lg object-cover shadow md:h-auto md:w-56 md:rounded-lg"
                src={news_thumbnail}
                alt={image_name}
            />
            <div className="flex flex-col justify-between px-0 py-4 leading-normal md:px-4">
                <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white md:text-lg">
                    {truncate(news_title, 50)}
                </h5>
                <div className="relative mb-3 inline-flex items-center space-x-1 text-xs md:space-x-1">
                    <div className="relative inline-flex items-center">
                        <i className="fa-solid fa-user flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                        <span className="ml-2 leading-relaxed">
                            {news_author}
                        </span>
                    </div>
                    <div className="relative inline-flex items-center">
                        <i className="fa-solid fa-clock flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                        <span className="ml-2 leading-relaxed">
                            {formatDefaultDateTime(news_date)}
                        </span>
                    </div>
                    <div className="relative inline-flex items-center">
                        <i className="fa-solid fa-thumbtack flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                        <span className="ml-2 leading-relaxed">
                            {news_category}
                        </span>
                    </div>
                </div>
                <p className="mb-3 whitespace-pre-line break-all text-sm font-normal text-gray-700 dark:text-gray-400">
                    {removeTags(news_excerpt).substr(0, 50)}...{" "}
                </p>
                <div className="inline-flex items-center text-center transition duration-300 sm:flex-row">
                    <Link
                        href={route("detail-berita-masjid", slug)}
                        className="inline-flex items-center text-center text-sm font-medium text-blue-600 transition duration-300 hover:text-blue-700"
                    >
                        <span className="hover:underline">
                            Baca lebih lajut
                        </span>
                        <i className="fa-solid fa-arrow-right ml-2 text-base"></i>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}
