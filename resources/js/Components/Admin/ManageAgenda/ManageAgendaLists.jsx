import PrimaryButton from "@/Components/PrimaryButton";
import React, { useEffect, useRef, useState } from "react";
import SecondaryHeader from "../SecondaryHeader";
import imageKajianMualaf from "../../../../../public/assets/img/jpg/pengajian-mualaf.jpg";
import imageKajianMuslimah from "../../../../../public/assets/img/jpg/kajian-muslimah.jpg";
import imageTpaAnak from "../../../../../public/assets/img/jpg/tpa-anak.jpg";
import { dataNotFound } from "@/Utils/globalVariables";
import ManageAgendaListsItem from "./ManageAgendaListsItem";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { maxLengthCheck } from "@/Utils/maxLengthCheck";
import { useForm } from "@inertiajs/react";
import TertiaryButton from "@/Components/TertiaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import InputError from "@/Components/InputError";
import FileInput from "@/Components/FileInput";
import Swal from "sweetalert2";

export default function ManageAgendaLists(props) {
    const [modalCreateTrigger, setModalCreateTrigger] = useState(false);
    const [error, setError] = useState("");
    const [images, setImages] = useState(null);
    const imageRef = useRef(null);
    const { data, setData, post, processing, reset } = useForm({
        agenda_title: "",
        agenda_image: null,
        agenda_schedule: "",
        agenda_description: "",
    });

    const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
    const MAX_FILE_SIZE_IMAGE = 3072;
    const MAX_TITLE_AGENDA = 100;

    const handleModalCreateTrigger = () => {
        setModalCreateTrigger(!modalCreateTrigger);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("manage-agenda.store"));
        handleModalCreateTrigger();
        reset();
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
            title: "Data agenda berhasil ditambahkan",
        });
    };

    const handleUploadImage = (e) => {
        e.preventDefault();

        const file = e.target.files[0];
        if (!file) return;

        const fileSizeKiloBytes = file.size / 1024;

        if (!file.type.match(imageTypeRegex)) {
            setError("Tipe file tidak sesuai");
            return;
        } else if (fileSizeKiloBytes > MAX_FILE_SIZE_IMAGE) {
            setError("Ukuran file tidak lebih dari 3 mb");
            return;
        } else {
            setError("");
        }

        setData("agenda_image", file);
    };

    useEffect(() => {
        let fileReader,
            isCancel = false;
        if (data.agenda_image) {
            fileReader = new FileReader();
            fileReader.onload = (e) => {
                const { result } = e.target;
                if (result && !isCancel) {
                    setImages(result);
                }
            };
            fileReader.readAsDataURL(data.agenda_image);
        }
        return () => {
            isCancel = true;
            if (fileReader && fileReader.readyState === 1) {
                fileReader.abort();
            }
        };
    }, [data.agenda_image]);

    const handleDeleteImage = () => {
        setImages("");
        imageRef.current.value = "";
    };

    return (
        <div className="container mx-auto px-6">
            <SecondaryHeader>
                <div className="flex items-center">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-sm font-medium text-neutral-100-2 md:pl-52 md:text-lg">
                            Kelola Agenda
                        </h2>
                    </div>
                    <div className="md:pl-52">
                        <div className="mb-2 flex items-center">
                            <div className="inline-flex items-center text-sm font-medium text-neutral-100-2">
                                <PrimaryButton
                                    type="button"
                                    className="px-3 py-1.5 text-[10px] md:px-3 md:py-1"
                                    onClick={handleModalCreateTrigger}
                                >
                                    <i className="fa-regular fa-plus text-sm md:text-lg"></i>
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </SecondaryHeader>

            <Modal show={modalCreateTrigger} onClose={handleModalCreateTrigger}>
                <form
                    onSubmit={handleSubmit}
                    className="relative flex max-h-full w-full flex-col overflow-hidden"
                >
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-xl border-b-2 border-neutral-100 border-opacity-100 p-3">
                        <h2 className="p-1.5 text-center text-base font-medium text-gray-900 md:text-lg">
                            Tambah Agenda
                        </h2>
                        <button
                            type="button"
                            className="cursor-pointer rounded-full bg-transparent p-2 text-xl hover:bg-gray-200"
                            onClick={handleModalCreateTrigger}
                        >
                            <i className="fa-solid fa-xmark flex h-6 w-6 items-center justify-center text-gray-800"></i>
                        </button>
                    </div>

                    <div className="space-y-6 overflow-y-auto scroll-smooth p-6">
                        <div className="relative">
                            <div className="flex items-center justify-between">
                                <InputLabel htmlFor="agenda_title">
                                    <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                        Judul Agenda
                                    </span>
                                </InputLabel>
                                <h1 className="text-end text-xs font-normal text-dark-4 md:text-sm">
                                    {data.agenda_title.length}/
                                    {MAX_TITLE_AGENDA}
                                </h1>
                            </div>

                            <TextInput
                                id="agenda_title"
                                type="text"
                                name="agenda_title"
                                maxLength={MAX_TITLE_AGENDA}
                                onInput={maxLengthCheck}
                                onChange={(e) =>
                                    setData("agenda_title", e.target.value)
                                }
                                className="mt-1 block w-full"
                                placeholder="Masukkan judul agenda"
                                value={data.agenda_title}
                                required
                            />

                            <InputError className="mt-2" />
                        </div>
                        <div className="relative">
                            <div className="flex items-center justify-between">
                                <InputLabel htmlFor="agenda_schedule">
                                    <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                        Jadwal Agenda
                                    </span>
                                </InputLabel>
                            </div>

                            <TextInput
                                id="agenda_schedule"
                                type="text"
                                name="agenda_schedule"
                                onChange={(e) =>
                                    setData("agenda_schedule", e.target.value)
                                }
                                className="mt-1 block w-full"
                                placeholder="Masukkan jadwal agenda"
                                value={data.agenda_schedule}
                                required
                            />

                            <InputError className="mt-2" />
                        </div>
                        <div className="relative">
                            {images ? (
                                <div className="my-5 flex w-full items-center justify-center">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="relative">
                                            <div className="relative h-52 w-80 overflow-hidden rounded-lg">
                                                <img
                                                    className="h-52 w-full rounded-lg border border-neutral-60 object-cover object-center md:w-80"
                                                    src={images}
                                                    alt="workout-image"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <button
                                                type="button"
                                                className="absolute -right-2 -top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-500 text-sm font-bold text-white"
                                                onClick={handleDeleteImage}
                                            >
                                                <i className="fa-solid fa-xmark"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="my-5 flex w-full items-center justify-center">
                                    <div className="flex h-52 w-80 flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-80">
                                        <div className="flex flex-col items-center justify-center pb-5 pt-6">
                                            <i className="fa-regular fa-image text-2xl text-neutral-80"></i>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <FileInput
                                id="event_image"
                                name="event_image"
                                onChange={handleUploadImage}
                                accept="image/png, image/jpg, image/jpeg"
                                ref={imageRef}
                                required
                            />

                            <div className="mb-2 flex items-center space-x-4">
                                {error && (
                                    <span className="text-sm text-secondary-red">
                                        {error}
                                    </span>
                                )}
                                <div className="min-w-0 flex-1">
                                    <p className="text-end text-xs font-medium text-neutral-100-2 md:text-sm">
                                        Max size: 3MB | Tipe file: png, jpg &
                                        jpeg
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <InputLabel htmlFor="agenda_description">
                                <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                    Deskripsi Agenda
                                </span>
                            </InputLabel>
                            <textarea
                                id="agenda_description"
                                name="agenda_description"
                                type="text"
                                rows="5"
                                className="mt-1 block w-full rounded-lg border-neutral-60 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Tulis deskripsi agenda..."
                                required
                                value={data.agenda_description}
                                onChange={(e) =>
                                    setData(
                                        "agenda_description",
                                        e.target.value
                                    )
                                }
                            ></textarea>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 flex-wrap items-center justify-end space-x-2 rounded-b-xl border-t-2 border-neutral-100 border-opacity-100 p-3">
                        <TertiaryButton className="ml-3" disabled={processing}>
                            Simpan
                        </TertiaryButton>
                        <SecondaryButton
                            type="button"
                            onClick={handleModalCreateTrigger}
                        >
                            Batal
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>

            <div>
                <div>
                    {props.agendaData.length > 0 ? (
                        <div className="mb-6 grid grid-cols-1 gap-3 pt-20 sm:grid-cols-2 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
                            {props.agendaData.map((item, index) => {
                                return (
                                    <ManageAgendaListsItem
                                        key={index}
                                        agenda={item}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <div className="pb-6 pt-36">
                            <div className={dataNotFound}>
                                <i className="fi fi-rr-info mr-3 text-sm"></i>
                                Data agenda tidak ditemukan
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
