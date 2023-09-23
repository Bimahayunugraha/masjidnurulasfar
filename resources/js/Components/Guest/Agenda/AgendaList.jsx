import imageKajianMualaf from "../../../../../public/assets/img/jpg/pengajian-mualaf.jpg";
import imageKajianMuslimah from "../../../../../public/assets/img/jpg/kajian-muslimah.jpg";
import imageTpaAnak from "../../../../../public/assets/img/jpg/tpa-anak.jpg";
import AgendaListItem from "./AgendaListItem";
import dotPaternIcon from "../../../../../public/assets/img/svg/dot-pattern-1.svg";
import decoratorPaternIcon1 from "../../../../../public/assets/img/svg/svg-decorator-blob-4.svg";
import decoratorPaternIcon2 from "../../../../../public/assets/img/svg/svg-decorator-blob-5.svg";

export default function AgendaList(props) {
    return (
        <div className="relative overflow-hidden">
            <div className=" px-6 py-20 md:px-10 md:py-24">
                <div className="container mx-auto max-w-screen-lg">
                    <h2 className="mb-10 text-center text-xl font-black tracking-wide text-primary-soft-violet sm:text-3xl">
                        Agenda Rutin Masjid Nurul Asfar
                    </h2>
                </div>
                <div className="container mx-auto max-w-screen-xl">
                    <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
                        {props.agendaData?.slice(0, 2).map((agenda) => {
                            return (
                                <AgendaListItem
                                    key={agenda.id}
                                    agenda={agenda}
                                    aspect="landscape"
                                />
                            );
                        })}
                    </div>
                    <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3">
                        {props.agendaData?.slice(2).map((agenda) => {
                            return (
                                <AgendaListItem
                                    key={agenda.id}
                                    agenda={agenda}
                                    aspect="square"
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <img
                src={dotPaternIcon}
                alt="Decoration-1"
                className="absolute left-10 top-0 -z-10 w-24 -translate-x-20 translate-y-8 rotate-90 transform fill-current text-primary-500 opacity-25"
            />
            <img
                src={dotPaternIcon}
                alt="Decoration-2"
                className="absolute right-10 top-0 -z-10 w-24 translate-x-20 translate-y-24 rotate-45 transform fill-current text-primary-500 opacity-25"
            />
            <img
                src={decoratorPaternIcon1}
                alt="Decoration-1"
                className="absolute bottom-5 left-10 -z-10 w-32 -translate-x-full transform opacity-25"
            />
            <img
                src={decoratorPaternIcon2}
                alt="Decoration-2"
                className="absolute bottom-5 right-10 -z-10 w-32 translate-x-2/3 translate-y-8 transform opacity-5"
            />
        </div>
    );
}
