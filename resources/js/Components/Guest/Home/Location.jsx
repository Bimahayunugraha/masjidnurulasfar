import decoratorPaternIcon1 from "../../../../../public/assets/img/svg/svg-decorator-blob-4.svg";
import decoratorPaternIcon2 from "../../../../../public/assets/img/svg/svg-decorator-blob-5.svg";

export default function Location() {
    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto max-w-screen-xl py-20 px-4 lg:py-24">
                <div className="flex flex-col items-center">
                    <span className="text-center font-bold uppercase tracking-widest text-primary-500 md:text-left">
                        Lokasi
                    </span>
                    <h2 className="text-center text-xl font-black tracking-wide text-primary-soft-violet sm:text-3xl">
                        Lokasi Masjid Nurul Asfar
                    </h2>
                    <p className="mt-4 max-w-sm text-center font-medium text-gray-600">
                        Jl Kawula Pitados, Daratan II, Sendangarum, Minggir,
                        Sleman Regency, Special Region of Yogyakarta
                    </p>
                </div>
                <div className="mt-16">
                    <div className="items-center justify-center md:flex">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4675660091916!2d110.25505821744385!3d-7.740126700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7af6c06e0b7ca5%3A0x981ce8ca995eb537!2sMasjid%20Nurul%20Asfar!5e0!3m2!1sid!2sid!4v1678899814005!5m2!1sid!2sid"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            height="500"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full"
                        ></iframe>
                    </div>
                </div>
            </div>
            <img
                src={decoratorPaternIcon1}
                alt="Decoration-1"
                className="absolute top-0 left-10 -z-10 w-32 -translate-x-full transform opacity-25"
            />
            <img
                src={decoratorPaternIcon2}
                alt="Decoration-2"
                className="absolute bottom-5 right-10 -z-10 w-32 translate-x-2/3 translate-y-8 transform opacity-5"
            />
        </div>
    );
}
