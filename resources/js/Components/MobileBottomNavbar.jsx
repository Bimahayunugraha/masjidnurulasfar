import { mobileNavbarCollections } from "@/Mocks/navbarCollections";
import { Link } from "@inertiajs/react";
import ActionDropdown from "./Admin/ActionDropdown";
import MobileMenuDropup from "./MobileMenuDropup";

export default function MobileBottomNavbar() {
    const active = true;

    return (
        <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-white shadow-4 transition-transform sm:block md:block lg:hidden">
            <div className="mx-auto grid h-full max-w-lg grid-cols-5 font-medium">
                {mobileNavbarCollections.map((item, idx) => {
                    return (
                        <Link
                            href={route(item.route)}
                            className={
                                active === route().current(item.route)
                                    ? "group inline-flex flex-col items-center justify-center bg-primary-violet bg-opacity-10 px-5 transition-all duration-300 ease-in-out hover:bg-primary-violet hover:bg-opacity-20"
                                    : "group inline-flex flex-col items-center justify-center px-5 transition-all duration-300 ease-in-out hover:bg-gray-50"
                            }
                            key={idx}
                        >
                            {active === route().current(item.route)
                                ? item.iconActive
                                : item.iconInActive}
                            <span
                                className={
                                    active === route().current(item.route)
                                        ? "text-sm text-primary-violet transition-all duration-300 ease-in-out group-hover:text-primary-violet"
                                        : "text-sm text-gray-500 transition-all duration-300 ease-in-out group-hover:text-primary-violet"
                                }
                            >
                                {item.name}
                            </span>
                        </Link>
                    );
                })}

                <Link
                    href={route("agenda-masjid")}
                    className={
                        active === route().current("agenda-masjid") ||
                        active === route().current("detail-agenda-masjid")
                            ? "group inline-flex flex-col items-center justify-center bg-primary-violet bg-opacity-10 px-5 transition-all duration-300 ease-in-out hover:bg-primary-violet hover:bg-opacity-20"
                            : "group inline-flex flex-col items-center justify-center px-5 transition-all duration-300 ease-in-out hover:bg-gray-50"
                    }
                >
                    {active === route().current("agenda-masjid") ||
                    active === route().current("detail-agenda-masjid") ? (
                        <i className="fa-solid fa-calendar-days mb-1 text-lg text-primary-violet transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
                    ) : (
                        <i className="fa-light fa-calendar-days mb-1 text-lg text-gray-500 transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
                    )}
                    <span
                        className={
                            active === route().current("agenda-masjid") ||
                            active === route().current("detail-agenda-masjid")
                                ? "text-sm text-primary-violet transition-all duration-300 ease-in-out group-hover:text-primary-violet"
                                : "text-sm text-gray-500 transition-all duration-300 ease-in-out group-hover:text-primary-violet"
                        }
                    >
                        Agenda
                    </span>
                </Link>
                <Link
                    href={route("berita-masjid")}
                    className={
                        active === route().current("berita-masjid") ||
                        active === route().current("detail-berita-masjid")
                            ? "group inline-flex flex-col items-center justify-center bg-primary-violet bg-opacity-10 px-5 transition-all duration-300 ease-in-out hover:bg-primary-violet hover:bg-opacity-20"
                            : "group inline-flex flex-col items-center justify-center px-5 transition-all duration-300 ease-in-out hover:bg-gray-50"
                    }
                >
                    {active === route().current("berita-masjid") ||
                    active === route().current("detail-berita-masjid") ? (
                        <i className="fa-solid fa-newspaper mb-1 text-lg text-primary-violet transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
                    ) : (
                        <i className="fa-light fa-newspaper mb-1 text-lg text-gray-500 transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
                    )}
                    <span
                        className={
                            active === route().current("berita-masjid") ||
                            active === route().current("detail-berita-masjid")
                                ? "text-sm text-primary-violet transition-all duration-300 ease-in-out group-hover:text-primary-violet"
                                : "text-sm text-gray-500 transition-all duration-300 ease-in-out group-hover:text-primary-violet"
                        }
                    >
                        Berita
                    </span>
                </Link>
                <Link
                    href={route("contact")}
                    className={
                        active === route().current("contact")
                            ? "group inline-flex flex-col items-center justify-center bg-primary-violet bg-opacity-10 px-5 transition-all duration-300 ease-in-out hover:bg-primary-violet hover:bg-opacity-20"
                            : "group inline-flex flex-col items-center justify-center px-5 transition-all duration-300 ease-in-out hover:bg-gray-50"
                    }
                >
                    {active === route().current("contact") ? (
                        <i className="fa-solid fa-address-book mb-1 text-lg text-primary-violet transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
                    ) : (
                        <i className="fa-light fa-address-book mb-1 text-lg text-gray-500 transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
                    )}
                    <span
                        className={
                            active === route().current("contact")
                                ? "text-sm text-primary-violet transition-all duration-300 ease-in-out group-hover:text-primary-violet"
                                : "text-sm text-gray-500 transition-all duration-300 ease-in-out group-hover:text-primary-violet"
                        }
                    >
                        Kontak
                    </span>
                </Link>

                {/* <div className="group inline-flex flex-col items-center justify-center hover:bg-gray-50">
                    <MobileMenuDropup>
                        <MobileMenuDropup.Trigger>
                            <button
                                type="button"
                                className="group inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 focus:bg-primary-violet focus:bg-opacity-10 focus:text-primary-violet focus:outline-none"
                            >
                                <i className="fa-solid fa-ellipsis mb-1 text-lg text-gray-500 transition-all duration-300 ease-in-out group-hover:text-primary-violet"></i>
                                <span className="text-sm text-gray-500 group-hover:text-primary-violet">
                                    Lainnya
                                </span>
                            </button>
                        </MobileMenuDropup.Trigger>

                        <MobileMenuDropup.Content>
                            <MobileMenuDropup.Link
                                href={route("event-masjid")}
                                className={
                                    active ===
                                        route().current("event-masjid") ||
                                    active ===
                                        route().current("detail-event-masjid")
                                        ? "relative inline-flex items-center bg-primary-violet bg-opacity-10 text-primary-violet hover:bg-primary-violet hover:bg-opacity-20 focus:bg-gray-50"
                                        : "relative inline-flex items-center hover:bg-gray-50 focus:bg-gray-50"
                                }
                            >
                                <i className="fa-regular fa-ribbon flex h-4 w-4 items-center justify-center"></i>
                                <span className="ml-3">Event</span>
                            </MobileMenuDropup.Link>
                            <MobileMenuDropup.Link
                                href={route("article-masjid")}
                                className={
                                    active ===
                                        route().current("article-masjid") ||
                                    active ===
                                        route().current("detail-article-masjid")
                                        ? "relative inline-flex items-center bg-primary-violet bg-opacity-10 text-primary-violet hover:bg-primary-violet hover:bg-opacity-20 focus:bg-gray-50"
                                        : "relative inline-flex items-center hover:bg-gray-50 focus:bg-gray-50"
                                }
                            >
                                <i className="fa-regular fa-newspaper flex h-4 w-4 items-center justify-center"></i>

                                <span className="ml-3">Artikel</span>
                            </MobileMenuDropup.Link>
                        </MobileMenuDropup.Content>
                    </MobileMenuDropup>
                </div> */}
            </div>
        </div>

        // <div className="fixed bottom-0 left-0 z-50 h-16 w-full border-t border-gray-200 bg-white shadow-4 transition-transform sm:block md:block lg:hidden">
        //     <div className="mx-auto grid h-full max-w-lg grid-cols-5 p-2 font-medium">
        //         {mobileNavbarCollections.map((item, idx) => {
        //             return (
        //                 <Link href={route(item.route)} key={idx}>
        //                     <div className="mx-auto cursor-pointer">
        //                         <div
        //                             className={
        //                                 active === route().current(item.route)
        //                                     ? "mx-auto flex h-8 w-8 max-w-[48px] items-center justify-center rounded-full bg-primary-violet bg-opacity-10 text-primary-violet transition-all duration-300 ease-in-out"
        //                                     : "mx-auto flex h-8 w-8 max-w-[48px] items-center justify-center rounded-full bg-gray-50 transition-all duration-300 ease-in-out"
        //                             }
        //                         >
        //                             {active === route().current(item.route)
        //                                 ? item.iconActive
        //                                 : item.iconInActive}
        //                         </div>
        //                         <div
        //                             className={
        //                                 active === route().current(item.route)
        //                                     ? "text-center text-xs font-medium text-primary-violet transition-all duration-300 ease-in-out"
        //                                     : "text-center text-xs font-normal text-gray-500 transition-all duration-300 ease-in-out"
        //                             }
        //                         >
        //                             {item.name}
        //                         </div>
        //                     </div>
        //                 </Link>
        //             );
        //         })}

        //         <MobileMenuDropup>
        //             <MobileMenuDropup.Trigger>
        //                 <button className="mx-auto cursor-pointer">
        //                     <div className="mx-auto flex h-8 w-8 max-w-[48px] items-center justify-center rounded-full bg-gray-50 transition-all duration-300 ease-in-out">
        //                         <i className="fa-solid fa-ellipsis inline text-xs"></i>
        //                     </div>
        //                     <div className="text-center text-xs font-normal text-gray-500 transition-all duration-300 ease-in-out">
        //                         Lainnya
        //                     </div>
        //                 </button>
        //             </MobileMenuDropup.Trigger>

        //             <MobileMenuDropup.Content>
        //                 <MobileMenuDropup.Link className="relative inline-flex items-center border-b border-gray-200 hover:bg-green-50 focus:bg-green-50">
        //                     <i className="fa-regular fa-circle-info flex h-4 w-4 items-center justify-center"></i>
        //                     <span className="ml-3">Detail</span>
        //                 </MobileMenuDropup.Link>
        //                 <MobileMenuDropup.Link className="relative inline-flex items-center border-b border-gray-200 hover:bg-yellow-50 focus:bg-yellow-50">
        //                     <i className="fa-regular fa-pen flex h-4 w-4 items-center justify-center"></i>

        //                     <span className="ml-3">Edit</span>
        //                 </MobileMenuDropup.Link>
        //                 <MobileMenuDropup.Link className="relative inline-flex items-center hover:bg-red-50 focus:bg-red-50">
        //                     <i className="fa-regular fa-trash-can flex h-4 w-4 items-center justify-center"></i>

        //                     <span className="ml-3">Delete</span>
        //                 </MobileMenuDropup.Link>
        //             </MobileMenuDropup.Content>
        //         </MobileMenuDropup>
        //     </div>
        // </div>
    );
}
