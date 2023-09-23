import { Head, Link } from "@inertiajs/react";

export default function DetailAgenda(props) {
    return (
        <div className="relative overflow-hidden">
            <Head
                title={`Detail Agenda - [${props.agendaDetailData?.title}]`}
            />
            <div className="py-20 md:py-20">
                <div className="container mx-auto">
                    <div className="z-10 mb-5 w-full px-0 md:px-0">
                        <nav
                            className="relative flex flex-wrap"
                            aria-label="Breadcrumb"
                        >
                            <ol className="inline-flex flex-wrap items-center space-x-1">
                                <li>
                                    <div className="flex items-center">
                                        <Link
                                            href={route("agenda-masjid")}
                                            className="mr-3 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-blue-500 hover:bg-blue-400 hover:text-white"
                                        >
                                            <i className="fa-solid fa-arrow-left text-xl"></i>
                                        </Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <p className="text-sm font-medium text-gray-700 hover:text-gray-800">
                                            Detail
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
                                            {props.agendaDetailData?.title}
                                        </p>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="mt-10 max-w-7xl px-4 sm:px-6 md:mt-3 lg:px-8">
                        <div className="flex flex-col md:-mx-4 md:flex-row">
                            <div className="px-4">
                                <div>
                                    <div className="mb-14 flex h-64 w-full items-center rounded-lg md:h-96">
                                        <div>
                                            <img
                                                className="h-80 w-full rounded-lg object-cover shadow-4 md:h-96"
                                                src={
                                                    props.agendaDetailData
                                                        ?.imageSrc
                                                }
                                                alt={
                                                    props.agendaDetailData
                                                        ?.imageName
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 md:flex-1">
                                <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
                                    {props.agendaDetailData?.title}
                                </h2>
                                <div className="mt-4 flex items-center">
                                    <span className="relative flex h-3 w-3">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                                    </span>
                                    <span className="ml-3 text-xs text-gray-600 lg:text-sm">
                                        <span className="inline-flex items-center justify-center">
                                            <i className="fa-regular fa-calendar-days mr-2"></i>
                                            {props.agendaDetailData?.schedule}
                                        </span>
                                    </span>
                                </div>
                                <p className="mt-5 flex items-center text-sm text-gray-600">
                                    {props.agendaDetailData?.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
