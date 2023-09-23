import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import TertiaryButton from "@/Components/TertiaryButton";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import React, { useState } from "react";
import SecondaryHeader from "../SecondaryHeader";
import ManageCategoryListitem from "./ManageCategoryListitem";
import Swal from "sweetalert2";

export default function ManageCategoryLists(props) {
    const [modalCreateTrigger, setModalCreateTrigger] = useState(false);
    const { data, setData, post, processing, reset } = useForm({
        category_name: "",
    });

    const handleModalCreateTrigger = () => {
        setModalCreateTrigger(!modalCreateTrigger);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        post("/mengelola/kategori", {
            category_name: data.category_name,
        });
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
            title: "Data kategori berhasil ditambahkan",
        });
    };

    return (
        <div className="container mx-auto px-6">
            <SecondaryHeader>
                <div className="flex items-center">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-sm font-medium text-neutral-100-2 md:pl-52 md:text-lg">
                            Kelola Kategori
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
                            Tambah Kategori
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
                                <InputLabel
                                    htmlFor="category_name"
                                    value="Nama Kategori"
                                />
                            </div>

                            <TextInput
                                id="category_name"
                                type="text"
                                name="category_name"
                                onChange={(e) =>
                                    setData("category_name", e.target.value)
                                }
                                className="mt-1 block w-full"
                                placeholder="Masukkan nama kategori"
                                value={data.article_type}
                            />

                            <InputError className="mt-2" />
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

            <div className="pb-14 pt-20">
                <div className="w-full rounded-xl bg-white shadow-6">
                    <div>
                        <div>
                            {props.dataCategory.length > 0 ? (
                                <div>
                                    {props.dataCategory.map((item) => {
                                        return (
                                            <ManageCategoryListitem
                                                key={item.id}
                                                dataCategory={item}
                                            />
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="flex flex-wrap items-center justify-center py-6 text-xs font-semibold leading-7 text-neutral-80">
                                    <i className="fi fi-rr-info mr-3 text-sm"></i>
                                    Data kategori tidak ditemukan
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
