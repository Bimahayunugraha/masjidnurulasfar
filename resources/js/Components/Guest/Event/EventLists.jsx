import React, { useEffect, useRef, useState } from "react";
import image from "../../../../../public/assets/img/jpg/pengajian-mualaf.jpg";
import { motion } from "framer-motion";
import NewestEventListItem from "./NewestEventListItem";
import EventListItem from "./EventListItem";
import { dataNotFound } from "@/Utils/globalVariables";

export default function EventLists() {
    const carousel = useRef();
    const [width, setwidth] = useState(0);

    useEffect(() => {
        setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    const eventsData = [
        {
            id: 1,
            event_title: "Event 1",
            slug: "event-1",
            event_date: "2021-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            id: 2,
            event_title: "Event 2",
            slug: "event-2",
            event_date: "2023-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            id: 3,
            event_title: "Event 3",
            slug: "event-3",
            event_date: "2023-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            id: 4,
            event_title: "Event 4",
            slug: "event-4",
            event_date: "2023-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            id: 5,
            event_title: "Event 5",
            slug: "event-5",
            event_date: "2023-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            id: 6,
            event_title: "Event 6",
            slug: "event-6",
            event_date: "2023-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
    ];

    return (
        <div className="relative overflow-hidden">
            <div className="py-20 px-4 md:py-24 md:px-10">
                <div className="container mx-auto">
                    <div className="">
                        <h2 className="mb-4 text-base font-black tracking-wide text-primary-soft-violet sm:text-lg">
                            Event Terbaru
                        </h2>
                        <motion.div
                            ref={carousel}
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            className="flex min-w-full gap-3"
                        >
                            {eventsData.slice(0, 5).map((event) => {
                                return (
                                    <NewestEventListItem
                                        key={event.id}
                                        eventData={event}
                                        drag={true}
                                    />
                                );
                            })}
                        </motion.div>
                    </div>
                    <div className="mt-5">
                        <h2 className="mb-4 text-base font-black tracking-wide text-primary-soft-violet sm:text-lg">
                            Semua Event
                        </h2>
                        {eventsData.length > 0 ? (
                            <div className="mb-6 grid grid-cols-1 gap-3 pt-0 sm:grid-cols-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:grid-cols-4">
                                {eventsData.map((item) => {
                                    return (
                                        <EventListItem
                                            key={item.id}
                                            eventData={item}
                                        />
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="pt-36 pb-6">
                                <div className={dataNotFound}>
                                    <i className="fi fi-rr-info mr-3 text-sm"></i>
                                    Data event tidak ditemukan
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
