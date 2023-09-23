import { Link } from "@inertiajs/react";
import dotPaternIcon from "../../../../../public/assets/img/svg/dot-pattern-1.svg";
import { truncate } from "@/Utils/truncate";

export default function ProgramShort(props) {
    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto max-w-screen-xl py-20 lg:py-24">
                <div className="flex flex-col items-center">
                    <span className="text-center font-bold uppercase tracking-widest text-primary-500 md:text-left">
                        Agenda
                    </span>
                    <h2 className="text-center text-xl font-black tracking-wide text-primary-soft-violet sm:text-3xl">
                        Agenda Kegiatan Rutin
                    </h2>
                    <p className="mt-4 max-w-sm text-center font-medium text-gray-600">
                        Berikut adalah beberapa agenda kegiatan rutin di Masjid
                        Nurul Asfar.
                    </p>
                </div>
                <div className="mt-16">
                    {props.agendasData?.map((item, i) => {
                        return (
                            <div
                                reversed={i % 2 === 1}
                                className={
                                    props.reversed
                                        ? "mt-24 flex-row-reverse items-center justify-center md:flex"
                                        : "mt-24 flex-row items-center justify-center md:flex"
                                }
                                key={i}
                            >
                                <div
                                    style={{
                                        backgroundImage: `url(${item.imageSrc})`,
                                    }}
                                    className="md:h-144 mx-4 h-80 flex-shrink-0 rounded-xl border border-gray-300 bg-cover bg-center shadow-4 sm:mx-8 md:mx-4 md:w-1/2 lg:mx-8 lg:w-5/12 xl:w-1/3"
                                ></div>
                                <div className="mx-4 mt-4 sm:mx-8 md:mx-4 md:mt-0 md:max-w-md lg:mx-8">
                                    <h4 className="text-3xl font-bold text-primary-subtle-violet">
                                        {item.title}
                                    </h4>
                                    <p className="mt-2 text-base leading-loose">
                                        {truncate(item.description, 100)}
                                    </p>
                                    <Link
                                        href={route(
                                            "detail-agenda-masjid",
                                            item.slug
                                        )}
                                        className="mt-4 inline-block cursor-pointer border-b-2 border-transparent text-sm font-bold text-primary-500 transition duration-300 hover:border-primary-500"
                                    >
                                        Detail agenda
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                    <div className="flex flex-1 flex-col items-center justify-center px-4">
                        <Link
                            href={route("agenda-masjid")}
                            className="mt-12 flex items-center justify-center rounded-full bg-primary-violet bg-opacity-10 px-8 py-3 text-sm leading-tight tracking-wide text-primary-violet transition-all duration-300 hover:rounded-full hover:bg-indigo-200 hover:bg-opacity-20 hover:drop-shadow-lg"
                        >
                            Lihat agenda lengkap
                            <span>
                                <i className="fa-regular fa-arrow-right ml-2 text-sm"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            <img
                src={dotPaternIcon}
                alt="Decoration-1"
                className="absolute left-10 top-0 -z-10 w-24 -translate-x-20 translate-y-8 rotate-90 transform fill-current text-primary-500 opacity-25"
            />
            <img
                src={dotPaternIcon}
                alt="Decoration-2"
                className="absolute right-10 top-0 -z-10 w-24 translate-x-20 translate-y-24 rotate-45 transform fill-current text-primary-500 opacity-25"
            />
            <img
                src={dotPaternIcon}
                alt="Decoration-3"
                className="absolute bottom-0 left-10 -z-10 w-24 -translate-x-20 -translate-y-8 rotate-45 transform fill-current text-primary-500 opacity-25"
            />
            <img
                src={dotPaternIcon}
                alt="Decoration-4"
                className="absolute bottom-0 right-10 -z-10 w-24 -translate-y-24 translate-x-20 rotate-90 transform fill-current text-primary-500 opacity-25"
            />
        </div>
    );
}
