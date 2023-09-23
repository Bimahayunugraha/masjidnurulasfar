import { Link } from "@inertiajs/react";
import React from "react";

export default function EventListItem({ eventData }) {
    const { event_title, slug, event_date, event_image, excerpt } = eventData;

    return (
        <div className="rounded-xl border border-gray-200 bg-white shadow">
            <img className="rounded-t-xl" src={event_image} alt="Event Image" />

            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {event_title}
                </h5>

                <div className="relative mb-3 space-x-2 text-sm">
                    <div className="inline-flex items-center">
                        <div className="mr-3 flex-shrink-0">
                            <span className="text-secondary-navy">
                                <i className="fa-solid fa-clock"></i>
                            </span>
                        </div>
                        <div className="flex-1 text-sm leading-relaxed">
                            {event_date}
                        </div>
                    </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {excerpt}
                </p>
                <Link
                    href={route("detail-event-masjid", slug)}
                    className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 hover:drop-shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Baca lebih lanjut
                    <i className="fa-solid fa-arrow-right ml-2 text-base"></i>
                </Link>
            </div>
        </div>
    );
}
