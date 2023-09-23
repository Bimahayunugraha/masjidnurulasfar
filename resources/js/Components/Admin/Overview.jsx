import { truncate } from "@/Utils/truncate";
import { Link } from "@inertiajs/react";
import React from "react";
import Calendar from "react-calendar";

export default function Overview(props) {
    return (
        <div className="container mx-auto px-6 py-6">
            <div>
                <div className="mb-6 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    <div className="rounded-xl bg-white p-4 shadow-4">
                        <div className="flex items-center space-x-4">
                            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-violet bg-opacity-10 p-6">
                                <span className="mt-1 text-xl">
                                    <i className="fa-light fa-ribbon text-primary-violet"></i>
                                </span>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-base font-medium text-neutral-80">
                                    Total Agenda
                                </p>

                                <p className="text-xl font-semibold text-secondary-navy">
                                    {props.agendasCount}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-4">
                        <div className="flex items-center space-x-4">
                            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-violet bg-opacity-10 p-6">
                                <span className="mt-1 text-xl">
                                    <i className="fa-light fa-at text-primary-violet"></i>
                                </span>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-base font-medium text-neutral-80">
                                    Total Sosial Media
                                </p>

                                <p className="text-xl font-semibold text-secondary-navy">
                                    {props.socialMediaCount}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-4">
                        <div className="flex items-center space-x-4">
                            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-violet bg-opacity-10 p-6">
                                <span className="mt-1 text-xl">
                                    <i className="fa-light fa-newspaper text-primary-violet"></i>
                                </span>
                            </div>
                            <div className="min-w-0 flex-1">
                                <p className="text-base font-medium text-neutral-80">
                                    Total Berita
                                </p>

                                <p className="text-xl font-semibold text-secondary-navy">
                                    {props.articlesCount}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-8 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                    <div className="rounded-xl bg-white p-4 shadow-4">
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex-1">
                                <div className="mb-5 flex items-center justify-between">
                                    <p className="text-base font-medium text-neutral-80">
                                        Agenda
                                    </p>
                                    <Link
                                        href={route("manage-agenda")}
                                        className="inline-flex items-center justify-center text-sm font-normal text-primary-violet hover:text-blue-600"
                                    >
                                        Lihat semua
                                        <i className="fa-solid fa-arrow-right ml-2"></i>
                                    </Link>
                                </div>
                                <ul className="max-w-md">
                                    {props.agendasData?.length > 0 ? (
                                        <ul className="max-w-md">
                                            {props.agendasData?.map((item) => {
                                                return (
                                                    <li
                                                        className="pb-3"
                                                        key={item.id}
                                                    >
                                                        <div className="flex items-center space-x-4">
                                                            <div className="inline-flex flex-shrink-0 items-center justify-center">
                                                                <span className="text-sm font-semibold text-white">
                                                                    <img
                                                                        className="h-10 w-10 rounded-full object-cover"
                                                                        src={
                                                                            item.imageSrc
                                                                        }
                                                                        alt={
                                                                            item.imageName
                                                                        }
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="min-w-0 flex-1">
                                                                <p className="text-sm font-medium text-neutral-80">
                                                                    {truncate(
                                                                        item.title,
                                                                        50
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    ) : (
                                        <div className="flex flex-wrap items-center justify-center px-6 py-4 text-xs font-semibold leading-7 text-neutral-80">
                                            <i className="fi fi-rr-info mr-3 text-sm"></i>
                                            Data agenda kosong
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-4">
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex-1">
                                <div className="mb-3 flex items-center justify-between">
                                    <p className="text-base font-medium text-neutral-80">
                                        Berita Terbaru
                                    </p>
                                    <Link
                                        href={route("manage-news")}
                                        className="inline-flex items-center justify-center text-sm font-normal text-primary-violet hover:text-blue-600"
                                    >
                                        Lihat semua
                                        <i className="fa-solid fa-arrow-right ml-2"></i>
                                    </Link>
                                </div>
                                <ul className="max-w-md">
                                    {props.articlesData?.length > 0 ? (
                                        <ul className="max-w-md">
                                            {props.articlesData?.map((item) => {
                                                return (
                                                    <li
                                                        className="pb-3"
                                                        key={item.id}
                                                    >
                                                        <div className="flex items-center space-x-4">
                                                            <div className="inline-flex flex-shrink-0 items-center justify-center">
                                                                <span className="text-sm font-semibold text-white">
                                                                    <img
                                                                        className="h-10 w-10 rounded-full object-cover"
                                                                        src={
                                                                            item.news_thumbnail
                                                                        }
                                                                        alt={
                                                                            item.image_name
                                                                        }
                                                                    />
                                                                </span>
                                                            </div>
                                                            <div className="min-w-0 flex-1">
                                                                <p className="text-sm font-medium text-neutral-80">
                                                                    {truncate(
                                                                        item.news_title,
                                                                        50
                                                                    )}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    ) : (
                                        <div className="flex flex-wrap items-center justify-center px-6 py-4 text-xs font-semibold leading-7 text-neutral-80">
                                            <i className="fi fi-rr-info mr-3 text-sm"></i>
                                            Data membership empty
                                        </div>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-white p-4 shadow-4">
                        <div className="flex items-center space-x-4">
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-center">
                                    <Calendar
                                        prev2Label={false}
                                        next2Label={false}
                                        showFixedNumberOfWeeks={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
