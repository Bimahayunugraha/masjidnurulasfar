import { useState } from "react";

const BASE_VALUE = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function ContactUs(props) {
    console.log(props);
    const [value, setValue] = useState(BASE_VALUE);

    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(JSON.stringify(value));
        setValue(BASE_VALUE);
    };

    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto py-20 lg:py-24">
                <div className="flex flex-col items-center">
                    <span className="text-center font-bold uppercase tracking-widest text-primary-500 md:text-left">
                        Kontak
                    </span>
                    <h2 className="text-center text-xl font-black tracking-wide text-primary-soft-violet sm:text-3xl">
                        Hubungi Kami
                    </h2>
                    <p className="mt-4 max-w-sm text-center font-medium text-gray-600">
                        Hubungi kami melalui kontak yang tersedia atau dapat
                        mengisi form dibawah ini.
                    </p>
                </div>
                <div className="mb-6 mt-16 grid grid-cols-1 gap-3 md:grid-cols-1 xl:grid-cols-12">
                    <div className="lg:col-span-6">
                        <div className="flex flex-col items-center md:flex-row md:space-x-4">
                            <div className="mb-4 w-full min-w-0 flex-1 rounded-xl bg-blue-50 p-4 md:mb-0">
                                <i className="fa-solid fa-location-dot pb-3 text-4xl text-primary-300"></i>
                                <p className="text-base font-medium text-neutral-80">
                                    Alamat
                                </p>
                                <div className="flex items-center text-left text-sm font-normal">
                                    <div className="mt-1 h-16 text-secondary-100">
                                        {props.contactData?.address}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full min-w-0 flex-1 rounded-xl bg-blue-50 p-4">
                                <i className="fa-solid fa-phone pb-3 text-4xl text-primary-300"></i>
                                <p className="text-base font-medium text-neutral-80">
                                    Kontak
                                </p>
                                <div className="flex items-center text-left text-sm font-normal">
                                    <div className="break-al mt-1 h-16 whitespace-pre-line text-secondary-100">
                                        {props.contactData?.contact}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col items-center md:flex-row md:space-x-4">
                            <div className="mb-4 w-full min-w-0 flex-1 rounded-xl bg-blue-50 p-4 md:mb-0">
                                <i className="fa-solid fa-envelope pb-3 text-4xl text-primary-300"></i>
                                <p className="text-base font-medium text-neutral-80">
                                    Email
                                </p>
                                <div className="flex items-center text-left text-sm font-normal">
                                    <a
                                        href={`mailto:${props.contactData?.email}`}
                                        className="mt-1 h-16 text-secondary-100"
                                    >
                                        {props.contactData?.email}
                                    </a>
                                </div>
                            </div>
                            <div className="w-full min-w-0 flex-1 rounded-xl bg-blue-50 p-4">
                                <i className="fa-solid fa-clock pb-3 text-4xl text-primary-300"></i>
                                <p className="text-base font-medium text-neutral-80">
                                    Jam Operasional
                                </p>
                                <div className="flex items-center text-left text-sm font-normal">
                                    <div className="break-al mt-1 h-16 whitespace-pre-line text-secondary-100">
                                        {props.contactData?.operational_hours}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl bg-blue-50 p-4 lg:col-span-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-full">
                                <form onSubmit={handleSubmit}>
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
                                                        onChange={handleChange}
                                                        value={value.name}
                                                    />
                                                    <label
                                                        htmlFor="name"
                                                        className="absolute left-2.5 top-3 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
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
                                                        onChange={handleChange}
                                                        value={value.email}
                                                    />
                                                    <label
                                                        htmlFor="email"
                                                        className="absolute left-2.5 top-3 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
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
                                                onChange={handleChange}
                                                value={value.subject}
                                            />
                                            <label
                                                htmlFor="subject"
                                                className="absolute left-2.5 top-3 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
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
                                                    onChange={handleChange}
                                                    value={value.message}
                                                ></textarea>
                                                <label
                                                    htmlFor="message"
                                                    className="absolute left-2.5 top-3 z-10 origin-[0] -translate-y-3 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-3 peer-focus:scale-75 peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
                                                >
                                                    <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                                        Pesan
                                                    </span>
                                                </label>
                                            </div>
                                            <div className="flex items-center justify-between rounded-b-lg border-t bg-white px-3 py-2">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-xs font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
                                                >
                                                    Kirim Pesan
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
