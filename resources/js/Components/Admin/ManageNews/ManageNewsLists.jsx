import PrimaryButton from "@/Components/PrimaryButton";
import React, { useEffect, useRef, useState } from "react";
import SecondaryHeader from "../SecondaryHeader";
import { dataNotFound } from "@/Utils/globalVariables";
import ManageNewsListItem from "./ManageNewsListItem";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { maxLengthCheck } from "@/Utils/maxLengthCheck";
import InputError from "@/Components/InputError";
import TextEditor from "@/Components/TextEditor";
import FileInput from "@/Components/FileInput";
import TertiaryButton from "@/Components/TertiaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";
import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import SelectInput from "@/Components/SelectInput";
import Swal from "sweetalert2";

export default function ManageNewsLists(props) {
    const TextState = EditorState.createEmpty();
    const [content, setContent] = useState(TextState);
    const [modalCreateTrigger, setModalCreateTrigger] = useState(false);
    const [error, setError] = useState("");
    const [images, setImages] = useState([]);
    const imageRef = useRef([]);
    const { data, setData, post, processing, reset } = useForm({
        news_title: "",
        news_category: "",
        news_thumbnail: null,
        news_images: [],
        news_author: "",
        news_excerpt: "",
        news_content: "",
    });
    const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
    const MAX_FILE_SIZE_IMAGE = 3072;
    const MAX_TITLE_EVENT = 100;
    const MAX_FILE_LENGTH = 5;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.news_content === "<p></p>\n") {
            setData("news_content", "");
        } else {
            post(route("manage-news.store"));
            reset();
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
                title: "Data berita berhasil ditambahkan",
            });
        }
    };

    const handleModalCreateTrigger = () => {
        setModalCreateTrigger(!modalCreateTrigger);
        setError("");
    };

    const onImagesChange = (e) => {
        e.preventDefault();
        const { files } = e.target;
        const validImageFiles = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const fileSizeKiloBytes = file.size / 1024;

            if (file.type.match(imageTypeRegex)) {
                validImageFiles.push(file);
            } else if (!file.type.match(imageTypeRegex)) {
                setError("Tipe file tidak sesuai");
                return;
            } else {
                setError("");
            }

            if (fileSizeKiloBytes > MAX_FILE_SIZE_IMAGE) {
                setError("Ukuran file tidak lebih dari 3 mb");
                return;
            } else {
                setError("");
            }
        }

        if (validImageFiles.length > MAX_FILE_LENGTH) {
            setError("Maksimal 5 file");
            return;
        } else if (validImageFiles.length) {
            setData("news_images", validImageFiles);
            return;
        } else {
            setError("");
        }
    };

    useEffect(() => {
        const images = [],
            fileReaders = [];
        let isCancel = false;
        if (data.news_images.length) {
            data.news_images.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        images.push(result);
                    }
                    if (
                        images.length === data.news_images.length &&
                        !isCancel
                    ) {
                        setImages(images);
                    }
                };
                fileReader.readAsDataURL(file);
            });
        }
        return () => {
            isCancel = true;
            fileReaders.forEach((fileReader) => {
                if (fileReader.readyState === 1) {
                    fileReader.abort();
                }
            });
        };
    }, [data.news_images]);

    const handleDeleteImages = (e) => {
        const s = images.filter((item, index) => index !== e);
        setImages(s);
        imageRef.current.value = "";
    };

    const handleChange = (body) => {
        setContent(body);
        setData(
            "news_content",
            draftToHtml(convertToRaw(content.getCurrentContent()))
        );
    };

    return (
        <div className="container mx-auto px-6">
            <SecondaryHeader>
                <div className="flex items-center">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-sm font-medium text-neutral-100-2 md:pl-52 md:text-lg">
                            Kelola Berita
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
                            Tambah Berita
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
                                <InputLabel htmlFor="news_title">
                                    <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                        Judul Berita
                                    </span>
                                </InputLabel>
                                <h1 className="text-end text-xs font-normal text-dark-4 md:text-sm">
                                    {data.news_title.length}/{MAX_TITLE_EVENT}
                                </h1>
                            </div>

                            <TextInput
                                id="news_title"
                                type="text"
                                name="news_title"
                                maxLength={MAX_TITLE_EVENT}
                                onInput={maxLengthCheck}
                                onChange={(e) =>
                                    setData("news_title", e.target.value)
                                }
                                className="mt-1 block w-full"
                                placeholder="Masukkan judul artikel"
                                value={data.news_title}
                                required
                            />

                            <InputError className="mt-2" />
                        </div>
                        <div className="relative">
                            <InputLabel htmlFor="news_content" className="mb-1">
                                <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                    Konten Berita
                                </span>
                            </InputLabel>
                            <TextEditor
                                state={content}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <InputLabel htmlFor="news_category">
                                <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                    Kategori Berita
                                </span>
                            </InputLabel>
                            <SelectInput
                                className="mt-1"
                                id="news_category"
                                name="news_category"
                                onChange={(e) =>
                                    setData("news_category", e.target.value)
                                }
                                value={data.news_category}
                                required
                            >
                                <option>Pilih kategori berita</option>
                                {props.categories.map((category) => {
                                    return (
                                        <option
                                            value={category.id}
                                            key={category.id}
                                        >
                                            {category.name}
                                        </option>
                                    );
                                })}
                            </SelectInput>
                        </div>
                        <div className="relative">
                            {images.length > 0 ? (
                                <div className="my-5 grid w-full grid-cols-1 items-center gap-3 rounded-lg border-2 border-dashed border-neutral-80 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                                    {images.map((image, index) => {
                                        return (
                                            <div
                                                className="relative mx-2 my-2"
                                                key={index}
                                            >
                                                <div className="relative overflow-hidden rounded-lg">
                                                    <img
                                                        className="h-52 w-full rounded-lg border border-neutral-60 object-cover object-center md:w-full"
                                                        src={image}
                                                        alt="image"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    className="absolute -right-2 -top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-500 text-sm font-bold text-white"
                                                    onClick={() =>
                                                        handleDeleteImages(
                                                            index
                                                        )
                                                    }
                                                >
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="my-5 flex w-full items-center justify-center">
                                    <div className="flex h-52 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-80">
                                        <div className="flex flex-col items-center justify-center pb-5 pt-6">
                                            <i className="fa-regular fa-image text-2xl text-neutral-80"></i>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <FileInput
                                id="news_images"
                                name="news_images"
                                onChange={onImagesChange}
                                accept="image/png, image/jpg, image/jpeg"
                                multiple
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
                {props.newsData.length > 0 ? (
                    <div className="mb-6 grid grid-cols-1 gap-3 pt-20 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
                        {props.newsData.map((item) => {
                            return (
                                <ManageNewsListItem
                                    key={item.id}
                                    dataNews={item}
                                    categories={props.categories}
                                />
                            );
                        })}
                    </div>
                ) : (
                    <div className="pb-6 pt-20">
                        <div className={dataNotFound}>
                            <i className="fi fi-rr-info mr-3 text-sm"></i>
                            Data berita tidak ditemukan
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
