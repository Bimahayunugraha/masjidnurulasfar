/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { mainNavbarCollections } from "@/Mocks/navbarCollections";
import { Link } from "@inertiajs/react";
import BrandNavbar1 from "../../../public/assets/img/png/LogoPutihHorizontal.png";
import BrandNavbar2 from "../../../public/assets/img/png/LogoWarnaHorizontal.png";

export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    const active = false;

    useEffect(() => {
        window.addEventListener("scroll", stickyNavbar);

        return () => window.removeEventListener("scroll", stickyNavbar);
    });

    const stickyNavbar = () => {
        if (window.scrollY > 50) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    return (
        <nav
            className={
                scroll
                    ? "nav-container active absolute top-0 left-0 right-0 z-20 w-full border-b border-gray-200 bg-white px-0 py-4 sm:px-4 md:py-0 md:px-2"
                    : "fixed top-0 left-0 z-20 w-full border-none bg-white bg-opacity-90 px-0 py-4 backdrop-blur-md sm:px-4 md:py-0 md:px-2"
            }
        >
            <div className="container mx-auto">
                <div className="nav-brand relative flex flex-wrap items-center justify-between">
                    <Link
                        href="/"
                        className="flex items-center transition-all duration-300"
                    >
                        <img
                            src={BrandNavbar2}
                            className="mr-3 h-8 sm:h-10"
                            alt="Flowbite Logo"
                        />
                    </Link>
                    <div
                        className="hidden w-full md:block md:w-auto"
                        id="navbar-multi-level"
                    >
                        <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:text-sm md:font-medium">
                            {mainNavbarCollections.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <Link
                                            href={route(item.route)}
                                            title={item.name}
                                            className={
                                                active ===
                                                route().current(item.route)
                                                    ? "nav-links block rounded-lg py-2 px-4 text-primary-soft-violet transition-all duration-150 ease-in-out hover:bg-slate-700 hover:text-gray-300"
                                                    : "block rounded-lg bg-slate-700 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-slate-800 hover:text-gray-100"
                                            }
                                            aria-current="page"
                                        >
                                            {item.name}
                                        </Link>
                                    </li>
                                );
                            })}
                            <li>
                                <Link
                                    href={route("agenda-masjid")}
                                    title="Agenda"
                                    className={
                                        active ===
                                            route().current("agenda-masjid") &&
                                        active ===
                                            route().current(
                                                "detail-agenda-masjid"
                                            )
                                            ? "nav-links block rounded-lg py-2 px-4 text-primary-soft-violet transition-all duration-150 ease-in-out hover:bg-slate-700 hover:text-gray-300"
                                            : "block rounded-lg bg-slate-700 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-slate-800 hover:text-gray-100"
                                    }
                                    aria-current="page"
                                >
                                    Agenda
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={route("berita-masjid")}
                                    title="Artikel"
                                    className={
                                        active ===
                                            route().current("berita-masjid") &&
                                        active ===
                                            route().current(
                                                "detail-berita-masjid"
                                            )
                                            ? "nav-links block rounded-lg py-2 px-4 text-primary-soft-violet transition-all duration-150 ease-in-out hover:bg-slate-700 hover:text-gray-300"
                                            : "block rounded-lg bg-slate-700 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-slate-800 hover:text-gray-100"
                                    }
                                    aria-current="page"
                                >
                                    Berita
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href={route("contact")}
                                    title="Kontak Kami"
                                    className={
                                        active === route().current("contact")
                                            ? "nav-links block rounded-lg py-2 px-4 text-primary-soft-violet transition-all duration-150 ease-in-out hover:bg-slate-700 hover:text-gray-300"
                                            : "block rounded-lg bg-slate-700 py-2 px-4 text-white transition-all duration-150 ease-in-out hover:bg-slate-800 hover:text-gray-100"
                                    }
                                    aria-current="page"
                                >
                                    Kontak Kami
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
