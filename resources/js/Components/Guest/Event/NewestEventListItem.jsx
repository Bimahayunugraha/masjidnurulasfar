import React from "react";
import { motion } from "framer-motion";
import { truncate } from "@/Utils/truncate";
import { Link } from "@inertiajs/react";

export default function NewestEventListItem({ drag, eventData }) {
    const { event_title, slug, event_date, event_image, excerpt } = eventData;
    return (
        <motion.div
            href="#"
            className={`flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row ${
                drag && "cursor-grab active:cursor-grabbing"
            } min-w-[18rem] md:min-w-[36rem]`}
        >
            <img
                className="h-60 w-full rounded-t-lg object-cover md:h-auto md:w-56 md:rounded-none md:rounded-l-lg"
                src={event_image}
                alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {truncate(event_title, 50)}
                </h5>
                <div className="relative mb-1 space-x-2 text-sm">
                    <div className="inline-flex items-center">
                        <div className="mr-3 flex-shrink-0">
                            <span className="text-secondary-navy">
                                <i className="fa-solid fa-clock"></i>
                            </span>
                        </div>
                        <div className="flex-1 text-sm leading-relaxed text-gray-400">
                            {event_date}
                        </div>
                    </div>
                </div>
                <p className="mb-3 whitespace-pre-line break-all font-normal text-gray-700 dark:text-gray-400">
                    {excerpt}
                </p>
                <div className="inline-flex items-center text-center transition duration-300 sm:flex-row">
                    <Link
                        href={route("detail-event-masjid", slug)}
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
