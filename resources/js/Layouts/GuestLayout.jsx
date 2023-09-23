import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="mx-auto flex h-screen flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0">
            <div className="w-full rounded-20 bg-white shadow-4 sm:max-w-md md:mt-0 xl:p-0">
                <Link
                    href="/"
                    className="flex items-center justify-center pt-6 text-2xl font-semibold"
                >
                    <ApplicationLogo className="w-20 fill-current" />
                </Link>
                <div className="space-y-4 p-6 sm:p-6 md:space-y-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
