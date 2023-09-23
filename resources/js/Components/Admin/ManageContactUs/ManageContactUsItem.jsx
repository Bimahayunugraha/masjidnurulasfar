import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TertiaryButton from "@/Components/TertiaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import SecondaryHeader from "../SecondaryHeader";
import Swal from "sweetalert2";

export default function ManageContactUsItem(props) {
    const [modalEditTrigger, setModalEditTrigger] = useState(false);
    const { data, setData, post, processing } = useForm({
        address: props.contactData?.address,
        contact: props.contactData?.contact,
        email: props.contactData?.email,
        operational_hours: props.contactData?.operational_hours,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("manage-contact.update"));
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
            title: "Data kontak berhasil diubah",
        });
    };

    const handleModalEditTrigger = () => {
        setModalEditTrigger(!modalEditTrigger);
    };

    return (
        <div className="container mx-auto px-6">
            <SecondaryHeader>
                <div className="flex items-center">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-sm font-medium text-neutral-100-2 md:pl-52 md:text-lg">
                            Kelola Kontak
                        </h2>
                    </div>
                    <div className="md:pl-52">
                        <div className="mb-2 flex items-center">
                            <div className="inline-flex items-center text-sm font-medium text-neutral-100-2">
                                <PrimaryButton
                                    type="button"
                                    className="px-3 py-1.5 text-[10px] md:px-3 md:py-1"
                                    onClick={handleModalEditTrigger}
                                >
                                    <i className="fa-regular fa-pencil text-sm md:text-lg"></i>
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </SecondaryHeader>
            <Modal show={modalEditTrigger} onClose={handleModalEditTrigger}>
                <form
                    onSubmit={handleSubmit}
                    className="relative flex max-h-full w-full flex-col overflow-hidden"
                >
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-xl border-b-2 border-neutral-100 border-opacity-100 p-3">
                        <h2 className="p-1.5 text-center text-base font-medium text-gray-900 md:text-lg">
                            Edit Kontak
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
                            <InputLabel htmlFor="address">
                                <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                    Alamat Masjid
                                </span>
                            </InputLabel>

                            <TextInput
                                id="address"
                                type="text"
                                name="address"
                                onChange={handleChange}
                                className="mt-1 block w-full"
                                placeholder="Masukkan alamat"
                                defaultValue={props.contactData?.address}
                                required
                            />
                        </div>
                        <div className="relative">
                            <InputLabel htmlFor="contact">
                                <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                    Kontak
                                </span>
                            </InputLabel>
                            <textarea
                                id="contact"
                                name="contact"
                                type="text"
                                rows="5"
                                className="mt-1 block w-full rounded-lg border-neutral-60 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Masukkan kontak"
                                required
                                defaultValue={props.contactData?.contact}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="relative">
                            <InputLabel htmlFor="email">
                                <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                    Email
                                </span>
                            </InputLabel>

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                onChange={handleChange}
                                className="mt-1 block w-full"
                                placeholder="Masukkan email"
                                defaultValue={props.contactData?.email}
                                required
                            />
                        </div>

                        <div className="relative">
                            <InputLabel htmlFor="operational_hours">
                                <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                    Jam Operasional
                                </span>
                            </InputLabel>
                            <textarea
                                id="operational_hours"
                                name="operational_hours"
                                type="text"
                                rows="5"
                                className="mt-1 block w-full rounded-lg border-neutral-60 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                placeholder="Masukkan jam operasional"
                                required
                                defaultValue={
                                    props.contactData?.operational_hours
                                }
                                onChange={handleChange}
                            ></textarea>
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
            <div className="mb-6 grid gap-3 pt-20 md:grid-cols-2 xl:grid-cols-2">
                <div className="rounded-xl bg-white p-4 shadow-4">
                    <div className="flex items-center space-x-4">
                        <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-violet bg-opacity-10 p-6">
                            <span className="mt-1 text-xl">
                                <i className="fa-light fa-location-dot text-primary-violet"></i>
                            </span>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-base font-medium text-neutral-80">
                                Alamat
                            </p>

                            <p className="text-sm font-semibold text-secondary-navy">
                                {props.contactData?.address}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-4">
                    <div className="flex items-center space-x-4">
                        <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-violet bg-opacity-10 p-6">
                            <span className="mt-1 text-xl">
                                <i className="fa-light fa-address-book text-primary-violet"></i>
                            </span>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-base font-medium text-neutral-80">
                                Kontak
                            </p>

                            <p className="whitespace-pre-line break-all text-sm font-semibold text-secondary-navy">
                                {props.contactData?.contact
                                    .split("\n")
                                    .join("\n")}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-4">
                    <div className="flex items-center space-x-4">
                        <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-violet bg-opacity-10 p-6">
                            <span className="mt-1 text-xl">
                                <i className="fa-light fa-envelope text-primary-violet"></i>
                            </span>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-base font-medium text-neutral-80">
                                Email
                            </p>

                            <p className="text-sm font-semibold text-secondary-navy">
                                {props.contactData?.email}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-4">
                    <div className="flex items-center space-x-4">
                        <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary-violet bg-opacity-10 p-6">
                            <span className="mt-1 text-xl">
                                <i className="fa-light fa-clock text-primary-violet"></i>
                            </span>
                        </div>
                        <div className="min-w-0 flex-1">
                            <p className="text-base font-medium text-neutral-80">
                                Jam Operasional
                            </p>

                            <p className="whitespace-pre-line break-all text-sm font-semibold text-secondary-navy">
                                {props.contactData?.operational_hours
                                    .split(",")
                                    .join("\n")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
