import { cx } from "@/Utils/all";
import { truncate } from "@/Utils/truncate";
import { Link } from "@inertiajs/react";
import Label from "./Label";

export default function AgendaListItem({ agenda, aspect }) {
    const { imageSrc, title, slug, schedule, description, imageName } = agenda;

    return (
        <Link
            href={route("detail-agenda-masjid", slug)}
            className="group relative transition-all duration-300"
        >
            <div
                className={cx(
                    "overflow-hidden rounded-xl border shadow-2 transition-all duration-300 hover:scale-105",
                    aspect === "landscape" ? "aspect-video" : "aspect-square"
                )}
            >
                <img
                    src={imageSrc}
                    alt={imageName}
                    className="objec-center h-full w-full object-cover transition-all"
                />
            </div>
            <div className="">
                <div className="mt-4 flex items-center">
                    <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                    </span>
                    <span className="ml-3 text-xs text-gray-600 lg:text-sm">
                        <span className="inline-flex items-center justify-center">
                            <i className="fa-regular fa-calendar-days mr-2"></i>
                            {schedule}
                        </span>
                    </span>
                </div>
            </div>
            <h2 className="text-brand-primary mt-1 text-xl font-semibold tracking-normal transition-all duration-300 group-hover:text-primary-violet">
                <span className="link-underline link-underline-blue">
                    {title}
                </span>
            </h2>
            <div>
                <p className="mt-2 text-base text-gray-500 line-clamp-3">
                    {truncate(description, 100)}
                </p>
            </div>
        </Link>
    );
}
