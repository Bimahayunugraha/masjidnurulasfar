import { sidebarActive, sidebarInActive } from "@/Utils/globalVariables";
import { Link } from "@inertiajs/react";

export default function SideLink({
    active = false,
    children,
    className = "",
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                "mb-1 flex items-center rounded-lg p-2 text-sm font-normal transition-all duration-300 ease-in-out " +
                (active
                    ? "bg-primary-violet bg-opacity-10 text-primary-violet hover:bg-indigo-200 "
                    : "text-neutral-80 hover:bg-indigo-100 ") +
                className
            }
        >
            {children}
        </Link>
    );
}
