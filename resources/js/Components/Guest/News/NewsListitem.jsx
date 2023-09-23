import { formatDefaultDateTime } from "@/Utils/dateFormat";
import { removeTags } from "@/Utils/formatter";
import { truncate } from "@/Utils/truncate";
import { Link } from "@inertiajs/react";
import React from "react";

export default function NewseListitem({ newsData }) {
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
        <Link
            href={route("detail-berita-masjid", slug)}
            className="group relative rounded-xl p-1 transition-all duration-300 hover:rounded-xl hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
        >
            <div className="group relative">
                <img
                    className="rounded-xl shadow group-hover:opacity-75"
                    src={news_thumbnail}
                    alt={image_name}
                />
            </div>

            <div className="px-2 py-3">
                <h5 className="mb-1 text-base font-bold tracking-tight text-gray-900 transition-all duration-300 group-hover:text-primary-violet md:text-lg">
                    {truncate(news_title, 50)}
                </h5>

                <div className="relative mb-3 inline-flex items-center space-x-1 text-xs md:space-x-2">
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
                <p className="mb-3 text-sm font-normal text-gray-700">
                    {removeTags(news_excerpt).substr(0, 50)}...{" "}
                </p>
            </div>
        </Link>
    );
}
