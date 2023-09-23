import { useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import decoratorBlob1 from "../../../../../public/assets/img/svg/svg-decorator-blob-9.svg";

export default function Contact() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("send-contact"));
        console.log(errors);
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });

        Toast.fire({
            icon: "success",
            title: "Pesan berhasil dikirim",
        });
    };

    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto py-20 lg:py-24">
                <div className="flex flex-col items-center">
                    <h2 className="text-center text-xl font-black tracking-wide text-primary-soft-violet sm:text-3xl">
                        Hubungi Kami
                    </h2>
                    <p className="mt-4 max-w-sm text-center font-medium text-gray-600">
                        Ingin tahu informasi lebih lanjut?
                    </p>
                </div>
                <div className="mx-auto max-w-screen-lg py-8">
                    <div className="relative rounded-lg bg-purple-50 py-16 lg:py-20">
                        <div className="relative z-10 px-4 sm:px-16">
                            <div className="text-center text-xl font-bold sm:text-2xl">
                                <h5 className="text-primary-500">
                                    Hubungi kami melalui whatsapp atau instagram
                                </h5>
                            </div>
                            <div className="mt-6 flex flex-col items-center justify-center md:flex-row">
                                <a
                                    href="https://api.whatsapp.com/send/?phone=6281328820723&text&app_absent=0"
                                    className="focus:shadow-outline mt-4 w-full rounded border border-transparent bg-[#25D366] px-6 py-3 text-center text-sm font-bold tracking-wide text-gray-100 shadow transition duration-300 first:mt-0 hover:bg-green-400 focus:outline-none sm:mt-0 sm:mr-8 sm:w-full sm:px-8 sm:py-4 sm:text-base sm:last:mr-0 lg:px-5 lg:py-4"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-whatsapp -ml-1 mr-2 text-lg"></i>
                                    WA Takmir
                                </a>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=6282136036612&text&app_absent=0"
                                    className="focus:shadow-outline mt-4 w-full rounded border border-transparent bg-[#25D366] px-6 py-3 text-center text-sm font-bold tracking-wide text-gray-100 shadow transition duration-300 first:mt-0 hover:bg-green-400 focus:outline-none sm:mt-0 sm:mr-8 sm:w-full sm:px-8 sm:py-4 sm:text-base sm:last:mr-0 lg:px-5 lg:py-4"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-whatsapp -ml-1 mr-2 text-lg"></i>
                                    WA Pengurus 1
                                </a>
                                <a
                                    href="https://api.whatsapp.com/send/?phone=6285868133596&text&app_absent=0"
                                    className="focus:shadow-outline mt-4 w-full rounded border border-transparent bg-[#25D366] px-6 py-3 text-center text-sm font-bold tracking-wide text-gray-100 shadow transition duration-300 first:mt-0 hover:bg-green-400 focus:outline-none sm:mt-0 sm:mr-8 sm:w-full sm:px-8 sm:py-4 sm:text-base sm:last:mr-0 lg:px-5 lg:py-4"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-whatsapp -ml-1 mr-2 text-lg"></i>
                                    WA Pengurus 2
                                </a>
                                <a
                                    href="https://www.instagram.com/masjidnurulasfar/"
                                    className="focus:shadow-outline mt-4 w-full rounded border border-transparent bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-center text-sm font-bold tracking-wide text-white transition duration-300 first:mt-0 hover:bg-gradient-to-l focus:outline-none sm:mt-0 sm:mr-8 sm:w-full sm:px-8 sm:py-4 sm:text-base sm:last:mr-0 lg:px-5 lg:py-4"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className="fa-brands fa-instagram -ml-1 mr-2 text-lg"></i>
                                    Instagram
                                </a>
                            </div>
                        </div>
                        <div className="absolute inset-0 overflow-hidden rounded-lg">
                            <img
                                src={decoratorBlob1}
                                alt="decorator-blob-1"
                                className="absolute bottom-0 left-0 h-80 w-80 -translate-x-20 translate-y-32 transform text-primary-500 opacity-5"
                            />
                            <img
                                src={decoratorBlob1}
                                alt="decorator-blob-2"
                                className="absolute top-0 right-0 h-80 w-80 translate-x-20  -translate-y-64 transform text-primary-500 opacity-5"
                            />
                        </div>
                    </div>
                </div>
                <div className="mx-auto max-w-screen-lg py-5">
                    <div className="relative rounded-xl bg-blue-50 p-6 lg:col-span-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-full">
                                <h2 className="mb-3 text-left text-xl font-bold tracking-wide text-primary-violet sm:text-2xl">
                                    Atau isi form dibawah ini
                                </h2>
                                <form onSubmit={submit}>
                                    <div className="space-y-6">
                                        <div className="grid grid-cols-12 gap-6">
                                            <div className="col-span-6 sm:col-span-6">
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-1.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
                                                        placeholder=" "
                                                        required
                                                        value={data.name}
                                                        onChange={handleChange}
                                                    />
                                                    <label
                                                        htmlFor="name"
                                                        className="absolute top-3 left-2.5 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                                                    >
                                                        Nama Lengkap
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-span-6 sm:col-span-6">
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-1.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
                                                        placeholder=" "
                                                        required
                                                        value={data.email}
                                                        onChange={handleChange}
                                                    />
                                                    <label
                                                        htmlFor="email"
                                                        className="absolute top-3 left-2.5 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                                                    >
                                                        Email
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="peer block w-full appearance-none rounded-t-lg border-0 border-b-2 border-gray-300 bg-gray-50 px-2.5 pb-1.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:focus:border-blue-500"
                                                placeholder=" "
                                                required
                                                value={data.subject}
                                                onChange={handleChange}
                                            />
                                            <label
                                                htmlFor="subject"
                                                className="absolute top-3 left-2.5 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                                            >
                                                Judul Pesan
                                            </label>
                                        </div>
                                        <div className="mb-4 w-full rounded-lg border border-gray-200 bg-gray-50">
                                            <div className="relative rounded-t-lg">
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    type="text"
                                                    rows="6"
                                                    className="peer block w-full appearance-none rounded-t-lg border-0 bg-gray-50 px-2.5 pb-1.5 pt-4 text-sm text-gray-900 focus:ring-0"
                                                    placeholder=" "
                                                    required
                                                    value={data.message}
                                                    onChange={handleChange}
                                                ></textarea>
                                                <label
                                                    htmlFor="message"
                                                    className="absolute top-3 left-2.5 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                                                >
                                                    <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                                        Pesan
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="flex items-center justify-between rounded-b-lg border-t bg-white px-3 py-2">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center rounded-lg bg-blue-700 py-2.5 px-4 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                                                >
                                                    Kirim Pesan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="absolute inset-0 overflow-hidden rounded-lg">
                            <img
                                src={decoratorBlob1}
                                alt="decorator-blob-1"
                                className="absolute top-0 right-0 h-80 w-80 translate-x-20 -translate-y-64 transform text-primary-500 opacity-5"
                            />
                            <img
                                src={decoratorBlob1}
                                alt="decorator-blob-2"
                                className="absolute bottom-0 left-0 h-80 w-80 -translate-x-20  translate-y-32 transform text-primary-500 opacity-5"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
