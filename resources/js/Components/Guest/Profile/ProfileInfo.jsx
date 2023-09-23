import imageMasjid from "../../../../../public/assets/img/jpg/masjid-nurul-asfar-3.jpg";
import profileMasjid from "../../../../../public/assets/img/png/LogoWarnaHorizontal.png";
import PIVMasjidNurulAsfa from "../../../../../public/assets/file/pdf/PIV Nurul Asfar.pdf";
import FileSaver from "file-saver";
import dotPaternIcon from "../../../../../public/assets/img/svg/dot-pattern-1.svg";

export default function ProfileInfo() {
    const saveFile = () => {
        FileSaver.saveAs(PIVMasjidNurulAsfa, "PIV Nurul Asfar.pdf");
    };
    return (
        <div className="relative overflow-hidden">
            <div className="py-20 md:py-24">
                <div className="container mx-auto max-w-screen-lg px-6 md:px-10">
                    <h2 className="mb-10 text-center text-xl font-black tracking-wide text-primary-soft-violet sm:text-3xl">
                        Profil Singkat Masjid Nurul Asfar
                    </h2>
                </div>
                <div className="relative z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
                    <img
                        src={imageMasjid}
                        alt="Gambar Masjid Nurul Asfar"
                        className="object-cover"
                        loading="lazy"
                    />
                </div>
                <div className="container mx-auto max-w-screen-lg px-8 py-5 lg:py-8 xl:px-5">
                    <article className="mx-auto max-w-screen-lg">
                        <div className="prose prose-base mx-auto my-3 lg:prose-base prose-a:text-blue-500">
                            <h1 className="text-lg font-bold leading-snug tracking-tight md:text-2xl">
                                Sejarah Singkat Masjid Nurul Asfar
                            </h1>
                            <p>
                                Masjid Nurul Asfar merupakan masjid yang berada
                                di dusun Daratan II, Desa Sendangarun, Kecamatan
                                Minggir, Kabupaten Sleman. Masjid Nurul Asfar
                                berdiri pada tahun 1994. Seiring berjalannya
                                waktu Masjid Asfar menjadi masjid yang sering
                                membantu mualaf dalam ibadah. Pada tahun 2019,
                                Masjid Nurul Asfar berhasil mengumpulkan 18
                                Mualaf dan sampai tahun 2021 total tedapat 30
                                Mualaf. Kemudian, dengan adanya perkembangan
                                Mualaf, akhirnya dibuatlah kajian Kajian Mualaf
                                rutin yang dilaksanakan setiap hari Ahad Pon.
                                Dari jumlah para Mualaf yang semakin bertambah,
                                tidak dipungkiri lagi jika masih terdapat
                                evaluasi atau perubahan-perubahan hingga fokus
                                nya Desa ini kepada para Mualaf dapat bermanfaat
                                bagi seluruh masyarakat.
                            </p>
                            <h1 className="pt-5 text-lg font-bold leading-snug tracking-tight md:text-2xl">
                                Visi Masjid Nurul Asfar
                            </h1>

                            <ul className="list-inside list-disc space-y-1">
                                <li>
                                    Sebagai pusat kegiatan dakwah dan
                                    pemberdayaan umat.
                                </li>
                            </ul>
                            <h1 className="pt-5 text-lg font-bold leading-snug tracking-tight md:text-2xl">
                                Misi Masjid Nurul Asfar
                            </h1>
                            <ul className="list-inside list-disc space-y-1">
                                <li>
                                    Menjadikan Masjid Nurul Asfar sebagai tempat
                                    pendidikan serta pembinaan bagi para mualaf
                                    dan jama`ah umum untuk meningkatkan
                                    ketaqwaan umat Islam kepada Allah SWT.`
                                </li>
                                <li>
                                    Menjadikan Masjid Nurul Asfar sebagai tempat
                                    pengembangan Ukhuwah Islamiyah.
                                </li>
                                <li>
                                    Pemberdayaan umat Islam untuk meningkatkan
                                    kemakmuran Masjid serta pemberdayaan ekonomi
                                    umat.
                                </li>
                            </ul>
                            <h1 className="pt-5 text-lg font-bold leading-snug tracking-tight md:text-2xl">
                                Sejarah Lengkap Masjid Nurul Asfar
                            </h1>
                            <p>
                                Untuk penjelasan lebih lanjut tentang sejarah
                                Masjid Nurul Asfar, silahkan dapat ditonton
                                melalui video dibawah ini:
                            </p>
                            <iframe
                                src={`https://www.youtube.com/embed/B3xj25h0s40`}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="Profile Masjid Nurul Asfar"
                                className="aspect-video h-full w-full"
                            />
                            {/* <div className="inline-flex items-center space-x-2">
                                <button
                                    type="button"
                                    className="inline-block rounded-10 bg-secondary-navy px-3 py-2 text-center text-sm font-normal text-white hover:bg-blue-800"
                                    onClick={saveFile}
                                >
                                    <i className="fa-light fa-download mr-2"></i>
                                    Download Karakter Visual Masjid Nurul Asfar
                                </button>
                            </div> */}
                        </div>
                    </article>
                </div>
            </div>
            <img
                src={dotPaternIcon}
                alt="Decoration-1"
                className="absolute top-0 left-10 -z-10 w-24 -translate-x-20 translate-y-8 rotate-90 transform fill-current text-primary-500 opacity-25"
            />
            <img
                src={dotPaternIcon}
                alt="Decoration-2"
                className="absolute top-0 right-10 -z-10 w-24 translate-x-20 translate-y-24 rotate-45 transform fill-current text-primary-500 opacity-25"
            />
            <img
                src={dotPaternIcon}
                alt="Decoration-3"
                className="absolute bottom-0 left-10 -z-10 w-24 -translate-x-20 -translate-y-8 rotate-45 transform fill-current text-primary-500 opacity-25"
            />
            <img
                src={dotPaternIcon}
                alt="Decoration-4"
                className="absolute bottom-0 right-10 -z-10 w-24 translate-x-20 -translate-y-24 rotate-90 transform fill-current text-primary-500 opacity-25"
            />
        </div>
    );
}
