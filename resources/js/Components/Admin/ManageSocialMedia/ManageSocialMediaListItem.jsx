import DangerButton from "@/Components/DangerButton";
import DangerModal from "@/Components/DangerModal";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TertiaryButton from "@/Components/TertiaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function ManageSocialMediaListItem({ dataSocialMedia }) {
    const { id, social_media_name, url } = dataSocialMedia;

    const {
        data,
        setData,
        patch,
        delete: destroy,
        processing,
        reset,
    } = useForm({
        social_media_name: dataSocialMedia.social_media_name,
        url: dataSocialMedia.url,
    });

    const [modalEditTrigger, setModalEditTrigger] = useState(false);
    const [modalDeleteTrigger, setModalDeleteTrigger] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route("manage-social-media.update", id));
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
            title: "Data sosial media berhasil diubah",
        });
    };

    const handleDelete = (e) => {
        e.preventDefault();

        destroy(route("manage-social-media.delete", id));
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
            title: "Data sosial media berhasil dihapus",
        });
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
            <div className="hidden flex-col border-b border-gray-200 px-6 py-3 md:flex-row md:items-center lg:flex">
                <div className="mr-3 inline-flex h-8 w-8 max-w-[48px] items-center justify-center rounded-full bg-blue-100 text-sm text-secondary-navy">
                    <i className="fa-regular fa-at"></i>
                </div>
                <div className="min-w-0 flex-1 flex-col items-center">
                    <a
                        href={url}
                        target="_blank"
                        rel="noreferrer"
                        className="border-b border-transparent text-xs font-medium text-neutral-100-2 transition-all duration-300 hover:border-primary-300 md:text-sm"
                    >
                        {social_media_name}
                    </a>
                </div>
                <div>
                    <div className="inline-flex items-center space-x-6">
                        <PrimaryButton
                            type="button"
                            className="px-3 py-1.5 md:px-3 md:py-1.5"
                            onClick={handleModalEditTrigger}
                        >
                            <i className="fa-regular fa-pen text-xs md:text-base"></i>
                        </PrimaryButton>
                        <DangerButton
                            className="px-3 py-1.5 md:px-3 md:py-1.5"
                            onClick={handleModalDeleteTrigger}
                        >
                            <i className="fa-light fa-trash-can text-xs md:text-base"></i>
                        </DangerButton>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-200 px-6 py-3 lg:border-none lg:px-0 lg:py-0">
                <div className="flex items-center justify-between lg:hidden">
                    <div className="mr-3 inline-flex h-8 w-8 max-w-[48px] items-center justify-center rounded-full bg-blue-100 text-sm text-secondary-navy">
                        <i className="fa-regular fa-at"></i>
                    </div>
                    <div className="min-w-0 flex-1 flex-col items-center">
                        <a
                            href={url}
                            target="_blank"
                            rel="noreferrer"
                            className="border-b border-transparent text-xs font-medium text-neutral-100-2 transition-all duration-300 hover:border-primary-300 md:text-sm"
                        >
                            {social_media_name}
                        </a>
                    </div>
                    <div className="inline-flex items-center space-x-6">
                        <PrimaryButton
                            type="button"
                            className="px-3 py-1.5 md:px-3 md:py-1.5"
                            onClick={handleModalEditTrigger}
                        >
                            <i className="fa-regular fa-pen text-xs md:text-base"></i>
                        </PrimaryButton>
                        <DangerButton
                            className="px-3 py-1.5 md:px-3 md:py-1.5"
                            onClick={handleModalDeleteTrigger}
                        >
                            <i className="fa-light fa-trash-can text-xs md:text-base"></i>
                        </DangerButton>
                    </div>
                </div>
            </div>

            <Modal show={modalEditTrigger} onClose={handleModalEditTrigger}>
                <form
                    onSubmit={handleSubmit}
                    className="relative flex max-h-full w-full flex-col overflow-hidden"
                >
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-xl border-b-2 border-neutral-100 border-opacity-100 p-3">
                        <h2 className="p-1.5 text-center text-base font-medium text-gray-900 md:text-lg">
                            Edit Sosial Media
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
                            <InputLabel htmlFor="social_media_name">
                                <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                    Nama Sosial Media
                                </span>
                            </InputLabel>

                            <TextInput
                                id="social_media_name"
                                type="text"
                                name="social_media_name"
                                onChange={(e) =>
                                    setData("social_media_name", e.target.value)
                                }
                                className="mt-1 block w-full"
                                placeholder="Masukkan nama sosial media"
                                defaultValue={social_media_name}
                                required
                            />
                        </div>
                        <div className="relative">
                            <InputLabel htmlFor="url">
                                <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                    URL
                                </span>
                            </InputLabel>

                            <TextInput
                                id="url"
                                type="text"
                                name="url"
                                onChange={(e) => setData("url", e.target.value)}
                                className="mt-1 block w-full"
                                placeholder="Masukkan url"
                                defaultValue={url}
                                required
                            />
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 flex-wrap items-center justify-end space-x-2 rounded-b-xl border-t-2 border-neutral-100 border-opacity-100 p-3">
                        <TertiaryButton className="ml-3" disabled={processing}>
                            Simpan Perubahan
                        </TertiaryButton>
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
