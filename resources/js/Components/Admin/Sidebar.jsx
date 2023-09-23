import { sidebarCollections } from "@/Mocks/sidebarCollections";
import { sidebarActive, sidebarInActive } from "@/Utils/globalVariables";
import { Link } from "@inertiajs/react";

export default function Sidebar() {
    const active = true;

    return (
        <aside className="fixed top-0 bottom-0 left-0 z-30 mt-14 hidden w-52 leading-none transition-all duration-300 sm:hidden md:block">
            <div className="relative z-40 hidden h-full flex-col justify-between overflow-y-auto bg-white py-2 px-3 sm:flex md:h-full">
                <div className="relative">
                    <ul>
                        {sidebarCollections.map((item, idx) => {
                            return (
                                <li key={idx}>
                                    <Link
                                        href={route(item.route)}
                                        title={item.name}
                                        className={
                                            active ===
                                            route().current(item.route)
                                                ? sidebarActive
                                                : sidebarInActive
                                        }
                                    >
                                        {active === route().current(item.route)
                                            ? item.iconActive
                                            : item.iconInactive}
                                        <span className="ml-3">
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </aside>
    );
}
