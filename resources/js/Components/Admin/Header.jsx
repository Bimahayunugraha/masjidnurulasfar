import { Link, useForm } from "@inertiajs/react";
import BrandNavbar from "../../../../public/assets/img/png/LogoWarnaHorizontal.png";
import iconAvatar from "../../../../public/assets/img/png/profile.png";
import Dropdown from "@/Components/Dropdown";
import Swal from "sweetalert2";

export default function Header({ handledrawerTrigger, auth }) {
    const { post } = useForm();
    const handleLogout = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton:
                    "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
                cancelButton:
                    "text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800",
            },
            buttonsStyling: false,
        });

        swalWithBootstrapButtons
            .fire({
                title: "Apakah Anda yakin ingin logout?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Logout",
                cancelButtonText: "Batal",
                reverseButtons: true,
            })
            .then((result) => {
                if (result.isConfirmed) {
                    try {
                        post(route("logout"));
                        Swal.fire({
                            icon: "success",
                            title: "Logout berhasil",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    } catch (error) {
                        return Swal.fire({
                            icon: "error",
                            title: "Maaf",
                            text: "Anda gagal logout",
                        });
                    }
                }
            });
    };

    return (
        <header className="fixed left-0 top-0 z-40 flex h-14 w-full items-center justify-between bg-white bg-opacity-90 px-4 py-2 backdrop-blur-sm md:px-6">
            <div className="flex w-1/2 items-center">
                <button
                    type="button"
                    className="cursor-pointer rounded-full p-2 hover:bg-gray-200 md:hidden"
                    onClick={handledrawerTrigger}
                >
                    <i className="fa-solid fa-bars flex h-6 w-6 items-center justify-center text-gray-800"></i>
                </button>
                <Link
                    href={route("dashboard")}
                    className="flex items-center self-center whitespace-nowrap pl-2 md:hidden"
                >
                    <img
                        src={BrandNavbar}
                        alt="Brand Masjid Nurul Asfar"
                        className="mr-3 h-6 sm:h-8"
                    />
                </Link>
                <Link
                    href={route("dashboard")}
                    className="flex cursor-pointer items-center self-center whitespace-nowrap pl-1"
                >
                    <img
                        src={BrandNavbar}
                        alt="Brand Masjid Nurul Asfar"
                        className="mr-3 hidden h-8 sm:h-10 md:block"
                    />
                </Link>
            </div>
            <div className="flex items-center transition-all duration-300">
                <div className="relative">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <span className="inline-flex rounded-md">
                                <button className="relative flex h-9 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-100">
                                    <span className="font-medium text-gray-600">
                                        <img src={iconAvatar} alt="avatar" />
                                    </span>
                                </button>
                            </span>
                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <h2 className="block w-full border-b px-4 py-2 text-left text-sm font-semibold leading-5 text-gray-700 transition duration-150 ease-in-out focus:bg-gray-100 focus:outline-none">
                                {auth && auth.user.name}
                            </h2>
                            <Dropdown.Link href={route("profile.edit")}>
                                Profile
                            </Dropdown.Link>
                            <Dropdown.Link as="button" onClick={handleLogout}>
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                </div>
            </div>
        </header>
    );
}
