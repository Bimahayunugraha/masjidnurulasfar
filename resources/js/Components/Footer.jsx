import { Link } from "@inertiajs/react";
import BrandNavbar from "../../../public/assets/img/png/LogoWarnaHorizontal.png";
import decorateBlob from "../../../public/assets/img/svg/svg-decorator-blob-9.svg";

export default function Footer() {
    return (
        <div className="relative px-6 text-gray-800 md:px-10">
            <div className="container relative z-10 mx-auto max-w-screen-xl pt-16 pb-10">
                <div className="flex flex-wrap justify-between">
                    <div className="mb-16 w-full text-center md:w-2/5 md:text-left lg:mb-0">
                        <div className="flex items-center justify-center lg:justify-start">
                            <img
                                src={BrandNavbar}
                                alt="logo"
                                className="mr-3 h-6 sm:h-10"
                            />
                        </div>
                        <p className="mx-auto mt-4 max-w-xs text-center text-sm font-medium leading-loose lg:mx-0 lg:mr-4 lg:text-left">
                            Website profile dari Masjid Nurul Asfar yang
                            merupakan masjid untuk tempat bernaung dan
                            beradvokasi bagi para mualaf.
                        </p>
                        <div className="mt-4 text-center lg:text-left">
                            <a
                                href="https://api.whatsapp.com/send/?phone=6281328820723&text&app_absent=0"
                                target="_blank"
                                rel="noreferrer"
                                className="mr-4 inline-block h-10 w-10 cursor-pointer rounded-full bg-gray-100 p-2 text-gray-900 transition duration-300 last:mr-0 hover:bg-gray-200"
                            >
                                <i className="fa-brands fa-whatsapp flex items-center justify-center text-base"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/masjidnurulasfar/"
                                className="mr-4 inline-block h-10 w-10 cursor-pointer rounded-full bg-gray-100 p-2 text-gray-900 transition duration-300 last:mr-0 hover:bg-gray-200"
                            >
                                <i className="fa-brands fa-instagram flex items-center justify-center text-base"></i>
                            </a>
                            <a
                                href="https://www.youtube.com/@masjidnurulasfar"
                                className="mr-4 inline-block h-10 w-10 cursor-pointer rounded-full bg-gray-100 p-2 text-gray-900 transition duration-300 last:mr-0 hover:bg-gray-200"
                            >
                                <i className="fa-brands fa-youtube flex items-center justify-center text-base"></i>
                            </a>
                        </div>
                    </div>
                    <div className="mb-8 w-1/2 text-sm sm:text-base md:mb-0 md:w-1/5 md:text-left">
                        <h5 className="font-bold uppercase">Tautan Terkait</h5>
                        <ul className="mt-4 text-sm font-medium">
                            <li className="mt-3">
                                <Link
                                    href={route("home")}
                                    className="border-b border-transparent pb-1 transition-all duration-300 ease-in-out hover:border-blue-500 hover:text-blue-600 focus:border-gray-400 focus:text-blue-400"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link
                                    href={route("profile-masjid")}
                                    className="border-b border-transparent pb-1 transition duration-300 hover:border-blue-500 hover:text-blue-600 focus:border-gray-400 focus:text-blue-400"
                                >
                                    Profile Masjid
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link
                                    href={route("agenda-masjid")}
                                    className="border-b border-transparent pb-1 transition duration-300 hover:border-blue-500 hover:text-blue-600 focus:border-gray-400 focus:text-blue-400"
                                >
                                    Agenda Masjid
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link
                                    href={route("berita-masjid")}
                                    className="border-b border-transparent pb-1 transition duration-300 hover:border-blue-500 hover:text-blue-600 focus:border-gray-400 focus:text-blue-400"
                                >
                                    Berita Masjid
                                </Link>
                            </li>
                            <li className="mt-3">
                                <Link
                                    href={route("contact")}
                                    className="border-b border-transparent pb-1 transition duration-300 hover:border-blue-500 hover:text-blue-600 focus:border-gray-400 focus:text-blue-400"
                                >
                                    Kontak Kami
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-8 w-1/2 text-sm sm:text-base md:mb-0 md:w-1/5 md:text-left">
                        <h5 className="font-bold uppercase">Hubungi Kami</h5>
                        <ul className="mt-4 text-sm font-medium">
                            <li className="mt-1">
                                <span className="mx-auto mt-4 max-w-xs text-center text-sm font-medium leading-loose lg:mx-0 lg:mr-4 lg:text-left">
                                    +62 813-2882-0723, +62 821-3603-6612, +62
                                    858-6813-3596
                                </span>
                            </li>
                            <li className="mt-1">
                                <a
                                    href="mailto:nurulasfar22@gmail.com"
                                    className="mx-auto mt-4 max-w-xs text-center text-sm font-medium leading-loose lg:mx-0 lg:mr-4 lg:text-left"
                                >
                                    nurulasfar22@gmail.com
                                </a>
                            </li>
                            <li className="mt-1">
                                <span className="mx-auto mt-4 max-w-xs text-center text-sm font-medium leading-loose lg:mx-0 lg:mr-4 lg:text-left">
                                    Jl Kawula Pitados, Daratan II, Sendangarum,
                                    Minggir, Sleman Regency, Special Region of
                                    Yogyakarta
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-8 w-1/2 text-sm sm:text-base md:mb-0 md:w-1/5 md:text-left">
                        <h5 className="font-bold uppercase">Kantor</h5>
                        <ul className="mt-4 text-sm font-medium">
                            <li className="mt-3">
                                <p className="mx-auto mt-4 max-w-xs text-sm font-medium leading-loose lg:mx-0 lg:mr-4 lg:text-left">
                                    Kampus Terpadu UMY Jl. Brawijaya, Kasihan,
                                    Bantul Yogyakarta 55183
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="my-8 border-b border-gray-800"></div>
                <div className="flex flex-col items-center justify-between pb-0 text-sm font-normal sm:flex-row">
                    <div>&copy; Copyright 2023, Masjid Nurul Asfar.</div>
                    <div>Kelompok KKN Konversi Masjid Mualaf TI UMY.</div>
                </div>
            </div>
            <div className="absolute inset-0 overflow-hidden rounded-lg">
                <img
                    src={decorateBlob}
                    alt="decorator-1"
                    className="absolute top-0 left-0 h-80 w-80 -translate-x-20 -translate-y-32 transform opacity-10"
                />
                <img
                    src={decorateBlob}
                    alt="decorator-2"
                    className="absolute bottom-0 right-0 h-80 w-80 translate-x-32  translate-y-48 transform opacity-10"
                />
            </div>
        </div>
    );
}
