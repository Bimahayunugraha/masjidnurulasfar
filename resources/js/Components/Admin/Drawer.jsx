import { sidebarCollections } from "@/Mocks/sidebarCollections";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import SideLink from "./SideLink";
import BrandNavbar from "../../../../public/assets/img/png/LogoWarnaHorizontal.png";

export default function Drawer({ drawerTrigger, handledrawerTrigger }) {
    const isActive = true;

    return (
        <div className="sm:block md:hidden">
            <div
                className={
                    drawerTrigger
                        ? "pointer-events-auto fixed inset-0 z-50 bg-gray-600 opacity-75 transition-opacity duration-300 ease-linear"
                        : "pointer-events-none fixed inset-0 z-50 bg-gray-600 opacity-0 transition-opacity duration-300 ease-linear"
                }
                onClick={handledrawerTrigger}
            ></div>
            <div
                className={
                    drawerTrigger
                        ? "fixed inset-0 left-0 z-50 h-screen w-full max-w-[250px] translate-x-0 transform overflow-hidden bg-white p-4 shadow-lg duration-300 ease-in-out"
                        : "fixed inset-0 left-0 z-50 h-screen w-full max-w-[250px] -translate-x-full transform overflow-hidden bg-white p-4 duration-300 ease-in-out"
                }
            >
                <Link
                    href={route("dashboard")}
                    className="flex items-center pl-2.5"
                    onClick={handledrawerTrigger}
                >
                    <img
                        src={BrandNavbar}
                        alt="Brand Masjid Nurul Asfar"
                        className="mr-3 h-6 sm:h-8"
                    />
                </Link>
                <button
                    type="button"
                    className="absolute top-2.5 right-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:rounded-lg hover:bg-gray-200 hover:text-gray-900"
                    onClick={handledrawerTrigger}
                >
                    <i className="fi fi-rr-cross-small flex items-center justify-center text-base"></i>
                </button>
                <div className="flex-col justify-between overflow-y-auto py-4 sm:relative sm:flex md:h-full">
                    <div className="relative">
                        <ul>
                            {sidebarCollections.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <SideLink
                                            href={route(item.route)}
                                            title={item.name}
                                            onClick={handledrawerTrigger}
                                            active={route().current(item.route)}
                                        >
                                            {isActive ===
                                            route().current(item.route)
                                                ? item.iconActive
                                                : item.iconInactive}
                                            <span className="ml-3">
                                                {item.name}
                                            </span>
                                        </SideLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
