import { Link } from "@inertiajs/react";
import imageMasjid from "../../../../../public/assets/img/jpg/masjid-nurul-asfar-1.jpg";
import decoratorBlob1 from "../../../../../public/assets/img/svg/svg-decorator-blob-1.svg";
import decoratorBlob2 from "../../../../../public/assets/img/svg/dot-pattern-1.svg";
import { truncate } from "@/Utils/truncate";

export default function About() {
    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto px-6 pt-10 pb-20 md:px-10 md:py-16">
                <div className="flex max-w-screen-xl flex-col md:items-center lg:flex-row">
                    <div className="relative flex-shrink-0 text-center lg:w-6/12 lg:pr-12 lg:text-left">
                        <span className="text-center font-bold uppercase tracking-widest text-primary-500 md:text-left">
                            Profile
                        </span>
                        <h2 className="mt-4 text-center text-2xl font-black leading-tight tracking-wide text-primary-soft-violet sm:text-2xl md:text-left lg:text-2xl">
                            Profile Singkat{" "}
                            <span className="text-primary-500">
                                Masjid Nurul Asfar
                            </span>
                        </h2>
                        <p className="mt-4 text-center text-sm font-medium leading-relaxed text-secondary-100 md:text-left md:text-base lg:text-lg">
                            {truncate(
                                `Masjid Nurul Asfar merupakan masjid yang berada di dusun Daratan II, Desa Sendangarun, Kecamatan Minggir, Kabupaten Sleman. Masjid Nurul Asfar berdiri pada tahun 1994. Seiring berjalannya waktu Masjid Asfar menjadi masjid yang sering membantu mualaf dalam ibadah. Pada tahun 2019, Masjid Nurul Asfar berhasil mengumpulkan 18 Mualaf dan sampai tahun 2021 total tedapat 30 Mualaf. Kemudian, dengan adanya perkembangan Mualaf, akhirnya dibuatlah kajian Kajian Mualaf rutin yang dilaksanakan setiap hari Ahad Pon. Dari jumlah para Mualaf yang semakin bertambah, tidak dipungkiri lagi jika masih terdapat evaluasi atau perubahan-perubahan hingga fokus nya Desa ini kepada para Mualaf dapat bermanfaat bagi seluruh masyarakat.`,
                                410
                            )}
                        </p>
                        <div className="mt-8 inline-flex items-center justify-center text-center transition duration-300 sm:flex-row lg:justify-start">
                            <Link
                                href={route("profile-masjid")}
                                className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3 text-sm font-bold text-gray-100 transition-all duration-300 hover:bg-primary-600 hover:drop-shadow-xl lg:px-10"
                            >
                                Lihat selengkapnya{" "}
                                <span>
                                    <i className="fa-regular fa-arrow-right ml-2 text-sm"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="relative mt-12 flex flex-col justify-center lg:mt-0">
                        <div className="relative flex max-w-3xl items-center justify-center md:justify-end lg:max-w-none">
                            <img
                                src={imageMasjid}
                                alt="Gambar Masjid Nurul Asfar"
                                className="z-20 rounded-2xl border shadow-2xl"
                            />

                            <img
                                src={decoratorBlob2}
                                alt="decorate-1"
                                className="pointer-events-none absolute right-0 bottom-0 z-10 h-32 w-32 translate-x-10 translate-y-10 transform fill-current text-primary-500 opacity-25"
                            />
                        </div>
                    </div>
                </div>
                <img
                    src={decoratorBlob1}
                    alt="decorate-2"
                    className="pointer-events-none absolute left-20 bottom-0 z-10 h-64 w-64 -translate-x-2/3 transform opacity-5"
                />
            </div>
        </div>
    );
}
