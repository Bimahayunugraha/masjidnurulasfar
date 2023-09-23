import Label from "@/Components/Guest/Agenda/Label";
import DangerButton from "@/Components/DangerButton";
import DangerModal from "@/Components/DangerModal";
import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TertiaryButton from "@/Components/TertiaryButton";
import TextInput from "@/Components/TextInput";
import { maxLengthCheck } from "@/Utils/maxLengthCheck";
import { truncate } from "@/Utils/truncate";
import { Link, useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import ActionDropdown from "../ActionDropdown";
import Swal from "sweetalert2";

export default function ManageAgendaListsItem({ agenda }) {
    // const {
    //     imageSrc,
    //     subtitle,
    //     title,
    //     slug,
    //     schedule,
    //     description,
    //     imageName,
    // } = agenda;

    const {
        data,
        setData,
        post,
        delete: destroy,
        processing,
        reset,
    } = useForm({
        agenda_title: agenda.title,
        agenda_image: null,
        agenda_schedule: agenda.schedule,
        agenda_description: agenda.description,
    });
    const [modalDetailTrigger, setModalDetailTrigger] = useState(false);
    const [modalEditTrigger, setModalEditTrigger] = useState(false);
    const [modalDeleteTrigger, setModalDeleteTrigger] = useState(false);
    const [error, setError] = useState("");
    const [images, setImages] = useState(null);
    const imageRef = useRef(null);

    const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
    const MAX_FILE_SIZE_IMAGE = 3072;
    const MAX_TITLE_AGENDA = 100;

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("manage-agenda.update", agenda.id) + "?_method=PATCH", {
            agenda_title: data.agenda_title,
            agenda_image: data.agenda_image,
            agenda_schedule: data.agenda_schedule,
            agenda_description: data.agenda_description,
        });
        handleModalEditTrigger();
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
            title: "Data agenda berhasil diubah",
        });
    };

    const handleDelete = (e) => {
        e.preventDefault();

        destroy(route("manage-agenda.delete", agenda.id));
        handleModalDeleteTrigger();
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
            title: "Data agenda berhasil dihapus",
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

    const handleModalDetailTrigger = () => {
        setModalDetailTrigger(!modalDetailTrigger);
    };

    const handleModalEditTrigger = () => {
        setModalEditTrigger(!modalEditTrigger);
        reset();
    };

    const handleModalDeleteTrigger = () => {
        setModalDeleteTrigger(!modalDeleteTrigger);
    };

    return (
        <div>
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-100 bg-gray-200 shadow-2">
                <img
                    src={agenda.imageSrc}
                    alt={agenda.imageName}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <div className="mb-1 mt-3 flex items-center space-x-4">
                <div className="min-w-0 flex-1">
                    <h2 className="text-brand-primary mt-1 text-xl font-semibold tracking-normal">
                        <Link href={route("detail-agenda-masjid", agenda.slug)}>
                            <span className="link-underline link-underline-blue">
                                {agenda.title}
                            </span>
                        </Link>
                    </h2>
                </div>
                <div className="inline-flex items-center">
                    <div className="group relative">
                        <ActionDropdown>
                            <ActionDropdown.Trigger>
                                <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-neutral-100-2 focus:bg-gray-100 focus:outline-none">
                                    <i className="fa-regular fa-ellipsis-vertical"></i>
                                </button>
                            </ActionDropdown.Trigger>

                            <ActionDropdown.Content>
                                <ActionDropdown.Link
                                    className="relative inline-flex items-center border-b border-gray-200 hover:bg-green-50 focus:bg-green-50"
                                    onClick={handleModalDetailTrigger}
                                >
                                    <i className="fa-regular fa-circle-info flex h-4 w-4 items-center justify-center"></i>
                                    <span className="ml-3">Detail</span>
                                </ActionDropdown.Link>
                                <ActionDropdown.Link
                                    className="relative inline-flex items-center border-b border-gray-200 hover:bg-yellow-50 focus:bg-yellow-50"
                                    onClick={handleModalEditTrigger}
                                >
                                    <i className="fa-regular fa-pen flex h-4 w-4 items-center justify-center"></i>

                                    <span className="ml-3">Edit</span>
                                </ActionDropdown.Link>
                                <ActionDropdown.Link
                                    className="relative inline-flex items-center hover:bg-red-50 focus:bg-red-50"
                                    onClick={handleModalDeleteTrigger}
                                >
                                    <i className="fa-regular fa-trash-can flex h-4 w-4 items-center justify-center"></i>

                                    <span className="ml-3">Delete</span>
                                </ActionDropdown.Link>
                            </ActionDropdown.Content>
                        </ActionDropdown>
                    </div>
                </div>
            </div>
            <div className="relative mb-3 mt-1 space-x-2 text-sm">
                <div className="inline-flex items-center justify-center">
                    <div className="mr-3 flex-shrink-0">
                        <span className="text-secondary-navy">
                            <i className="fa-solid fa-calendar"></i>
                        </span>
                    </div>
                    <div className="flex-1 leading-relaxed">
                        {agenda.schedule}
                    </div>
                </div>
            </div>
            <div>
                <p className="mt-2 text-base text-gray-500 line-clamp-3">
                    {truncate(agenda.description, 50)}
                </p>
            </div>

            <Modal show={modalDetailTrigger} onClose={handleModalDetailTrigger}>
                <div className="flex flex-shrink-0 items-center justify-between rounded-t-xl border-b-2 border-neutral-100 border-opacity-100 p-3">
                    <h2 className="p-1.5 text-center text-base font-medium text-gray-900 md:text-lg">
                        Detail Agenda
                    </h2>
                    <button
                        type="button"
                        className="cursor-pointer rounded-full bg-transparent p-2 text-xl hover:bg-gray-200"
                        onClick={handleModalDetailTrigger}
                    >
                        <i className="fa-solid fa-xmark flex h-6 w-6 items-center justify-center text-gray-800"></i>
                    </button>
                </div>

                <div className="relative overflow-y-auto scroll-smooth p-6">
                    {images ? (
                        <div className="flex w-full items-center justify-center">
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
                        <div className="flex w-full items-center justify-center">
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-neutral-60 bg-gray-200">
                                <img
                                    src={agenda.imageSrc}
                                    alt={agenda.imageName}
                                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                        </div>
                    )}
                    <div className="mb-2 mt-3">
                        <span className="inline-flex items-center justify-center text-sm">
                            <i className="fa-regular fa-calendar-days mr-2"></i>
                            {agenda.schedule}
                        </span>
                    </div>
                    <div className="mb-2 mt-3 flex items-center space-x-4">
                        <h5 className="break-all text-base font-bold tracking-tight text-neutral-100-2 md:text-lg">
                            {agenda.title}
                        </h5>
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="whitespace-pre-line break-words text-justify text-sm font-normal text-neutral-80">
                            {agenda.description}
                        </p>
                    </div>
                </div>
            </Modal>

            <Modal show={modalEditTrigger} onClose={handleModalEditTrigger}>
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
                            onClick={handleModalEditTrigger}
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
                                defaultValue={agenda.title}
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
                                defaultValue={agenda.schedule}
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
                                                    alt="Agenda Image"
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
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="relative">
                                            <div className="relative h-52 w-80 overflow-hidden rounded-lg">
                                                <img
                                                    className="h-52 w-full rounded-lg border border-neutral-60 object-cover object-center md:w-80"
                                                    src={agenda.imageSrc}
                                                    alt="Agenda Image"
                                                    loading="lazy"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <FileInput
                                id="agenda_image"
                                name="agenda_image"
                                onChange={handleUploadImage}
                                accept="image/png, image/jpg, image/jpeg"
                                ref={imageRef}
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
                                defaultValue={agenda.description}
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
                        <TertiaryButton className="ml-3">Simpan</TertiaryButton>
                        <SecondaryButton
                            type="button"
                            onClick={handleModalEditTrigger}
                        >
                            Batal
                        </SecondaryButton>
                    </div>
                </form>
            </Modal>
            <DangerModal
                show={modalDeleteTrigger}
                onClose={handleModalDeleteTrigger}
            >
                <form className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Apakah Anda yakin ingin menghapus data ini?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        Data yang telah dihapus tidak dapat dikembalikan.
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={handleModalDeleteTrigger}>
                            Batal
                        </SecondaryButton>

                        <DangerButton
                            className="ml-3 px-4 py-2"
                            disabled={processing}
                            onClick={handleDelete}
                        >
                            Hapus Data
                        </DangerButton>
                    </div>
                </form>
            </DangerModal>
        </div>
    );
}
