import decoratorBlob2 from "../../../../../public/assets/img/svg/dot-pattern-1.svg";
import qrScan from "../../../../../public/assets/img/jpg/qr-scan.jpg";

export default function Donation() {
    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto px-6 pt-10 pb-20 md:px-10 md:py-16">
                <div className="flex w-full flex-col md:items-center lg:flex-row">
                    <div className="relative mb-12 flex flex-col justify-center lg:mt-0">
                        <div className="relative flex max-w-3xl items-center justify-center md:justify-start lg:max-w-none">
                            <img
                                src={qrScan}
                                alt="Gambar Masjid Nurul Asfar"
                                className="z-20 w-80 rounded-2xl border shadow-2xl md:w-[450px]"
                            />

                            <img
                                src={decoratorBlob2}
                                alt="decorate-1"
                                className="pointer-events-none absolute right-0 bottom-0 z-10 h-32 w-32 translate-x-10 translate-y-10 transform fill-current text-primary-500 opacity-25"
                            />
                        </div>
                    </div>
                    <div className="relative flex-shrink-0 text-center lg:w-3/5 lg:pl-12 lg:text-left">
                        <span className="text-center font-bold uppercase tracking-widest text-primary-500 md:text-left">
                            Infaq
                        </span>
                        <h2 className="mt-4 text-center text-2xl font-black leading-tight tracking-wide text-primary-soft-violet sm:text-2xl md:text-left lg:text-2xl">
                            Infaq Masjid Nurul Asfar melalui{" "}
                            <span className="text-primary-500">Scan QRIS</span>
                        </h2>
                        <p className="mt-4 text-center text-sm font-normal leading-relaxed text-secondary-100 md:text-left md:text-base lg:text-lg">
                            Masjid Nurul Asfar menyediakan fasilitas Infaq bagi
                            Jama`ah Masjid ataupun masyarakat umum dengan
                            menggunakan QR Scan Barcode, disamping fasilitas
                            kotak infaq yang sudah tersedia. Infaq melalui QRIS
                            / QR Scan di Masjid Nurul Asfar adalah berinfaq
                            dengan metode Scan Barcode dan pembayarannya melalui
                            payment getawey seperti OVO, Gopay, Shopee Pay, Link
                            Aja, Dana dan juga melalui Mobile Banking Jama`ah
                            sekalian.
                            <br />
                            <br />
                            <span className="font-medium italic">
                                `Apapun harta yang kalian infakkan maka Allah
                                SWT akan menggantikannya dan Dia adalah
                                sebaik-baik pemberi rezeki.`
                            </span>
                            <br />
                            <span className="font-medium italic text-secondary-400">
                                - QS. Saba : 39 -
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
