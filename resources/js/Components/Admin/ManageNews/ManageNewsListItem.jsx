import Modal from "@/Components/Modal";
import React, { useEffect, useRef, useState } from "react";
import ActionDropdown from "../ActionDropdown";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/zoom";
import { Pagination, Controller, Navigation } from "swiper";
import DangerModal from "@/Components/DangerModal";
import SecondaryButton from "@/Components/SecondaryButton";
import DangerButton from "@/Components/DangerButton";
import { useForm } from "@inertiajs/react";
import draftToHtml from "draftjs-to-html";
import {
    convertToRaw,
    ContentState,
    convertFromHTML,
    EditorState,
} from "draft-js";
import TertiaryButton from "@/Components/TertiaryButton";
import FileInput from "@/Components/FileInput";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { maxLengthCheck } from "@/Utils/maxLengthCheck";
import TextEditor from "@/Components/TextEditor";
import SelectInput from "@/Components/SelectInput";
import { removeTags } from "@/Utils/formatter";
import parse from "html-react-parser";
import { formatCommonDate } from "@/Utils/dateFormat";
import Swal from "sweetalert2";

export default function ManageNewsListItem({ dataNews, categories }) {
    const {
        id,
        news_title,
        news_category,
        news_thumbnail,
        news_images,
        image_name,
        news_author,
        news_excerpt,
        news_content,
        news_date,
    } = dataNews;
    console.log("dataNews", dataNews);
    const {
        data,
        setData,
        post,
        delete: destroy,
        processing,
        reset,
    } = useForm({
        news_title: dataNews.news_title,
        news_category: dataNews.news_category_id,
        news_thumbnail: dataNews.news_thumbnail,
        news_images: [],
        news_author: dataNews.news_author,
        news_excerpt: dataNews.news_excerpt,
        news_content: dataNews.news_content,
    });
    const [content, setContent] = useState(null);
    const [modalDetailTrigger, setModalDetailTrigger] = useState(false);
    const [modalEditTrigger, setModalEditTrigger] = useState(false);
    const [modalDeleteTrigger, setModalDeleteTrigger] = useState(false);
    const [error, setError] = useState("");
    const [images, setImages] = useState([]);
    const imageRef = useRef([]);

    const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
    const MAX_FILE_SIZE_IMAGE = 3072;
    const MAX_TITLE_EVENT = 100;
    const MAX_FILE_LENGTH = 5;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.news_content === "<p></p>\n") {
            setData("news_content", "");
        } else {
            post("/mengelola/berita/" + id + "?_method=PATCH", {
                news_title: data.news_title,
                news_category: data.news_category,
                news_thumbnail: data.news_thumbnail,
                news_images: data.news_images,
                news_author: data.news_author,
                news_excerpt: data.news_excerpt,
                news_content: data.news_content,
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
                title: "Data berita berhasil diubah",
            });
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();

        destroy("/mengelola/berita/" + id);
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
            title: "Data berita berhasil dihapus",
        });
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

    useEffect(() => {
        if (dataNews) {
            setContent(
                EditorState.createWithContent(
                    ContentState.createFromBlockArray(
                        convertFromHTML(news_content)
                    )
                )
            );
        }
    }, [dataNews]);

    const handleChange = (body) => {
        setContent(body);
        setData(
            "news_content",
            draftToHtml(convertToRaw(content.getCurrentContent()))
        );
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
        <div className="rounded-20 bg-white shadow-4">
            <div className="group relative">
                <div className="relative aspect-video overflow-hidden rounded-t-10 group-hover:opacity-75">
                    <img
                        className="object-cover transition-all"
                        src={news_thumbnail}
                        alt={image_name}
                        loading="lazy"
                    />
                </div>
            </div>

            <div className="px-5 pb-5 pt-3">
                <div className="mb-1 flex items-center space-x-4">
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-base font-medium text-neutral-100-2">
                            {news_title}
                        </p>
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

                <div className="relative mb-3 inline-flex items-center space-x-3 text-sm md:space-x-4">
                    <div className="relative inline-flex items-center">
                        <i className="fa-solid fa-user flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                        <span className="ml-2 text-sm leading-relaxed">
                            {news_author}
                        </span>
                    </div>
                    <div className="relative inline-flex items-center">
                        <i className="fa-solid fa-clock flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                        <span className="ml-2 text-sm leading-relaxed">
                            {formatCommonDate(news_date)}
                        </span>
                    </div>
                    <div className="relative inline-flex items-center">
                        <i className="fa-solid fa-thumbtack flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                        <span className="ml-2 text-sm leading-relaxed">
                            {news_category}
                        </span>
                    </div>
                </div>
                <div className="min-w-0 flex-1">
                    <p className="whitespace-pre-line break-all text-sm font-normal text-neutral-80">
                        {removeTags(news_excerpt).substr(0, 100)}...{" "}
                    </p>
                </div>
            </div>

            <Modal show={modalDetailTrigger} onClose={handleModalDetailTrigger}>
                <div className="flex flex-shrink-0 items-center justify-between rounded-t-xl border-b-2 border-neutral-100 border-opacity-100 p-3">
                    <h2 className="p-1.5 text-center text-base font-medium text-gray-900 md:text-lg">
                        Detail Berita
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
                    <div className="hidden md:block">
                        <div className="relative my-2 mb-5 grid w-full grid-cols-1 items-center gap-3 rounded-lg border-2 border-dashed border-neutral-80 px-2 py-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                            {news_images.map((image, index) => {
                                return (
                                    <div key={index}>
                                        <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-neutral-60">
                                            <img
                                                src={image}
                                                alt="image"
                                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            765: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        modules={[Pagination, Controller, Navigation]}
                        className="mySwiper"
                        loop={true}
                        navigation={true}
                    >
                        {news_images.map((image, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="relative aspect-square h-full w-full overflow-hidden rounded-lg border border-neutral-60 md:hidden">
                                        <img
                                            src={image}
                                            alt="image"
                                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                    <div className="relative mb-3 inline-flex items-center space-x-3 text-xs md:space-x-4">
                        <div className="relative inline-flex items-center">
                            <i className="fa-solid fa-user flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                            <span className="ml-2 leading-relaxed">
                                {news_author}
                            </span>
                        </div>
                        <div className="relative inline-flex items-center">
                            <i className="fa-solid fa-clock flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                            <span className="ml-2 leading-relaxed">
                                {formatCommonDate(news_date)}
                            </span>
                        </div>
                        <div className="relative inline-flex items-center">
                            <i className="fa-solid fa-thumbtack flex h-4 w-4 items-center justify-center text-secondary-navy"></i>

                            <span className="ml-2 leading-relaxed">
                                {news_category}
                            </span>
                        </div>
                    </div>
                    <div className="mb-3 flex items-center space-x-4">
                        <h5 className="break-all text-base font-bold tracking-tight text-neutral-100-2 md:text-lg">
                            {news_title}
                        </h5>
                    </div>
                    <div className="prose prose-sm mx-auto min-w-0 flex-1 lg:prose-base prose-a:text-blue-500">
                        {parse(news_content.toString())}
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
                            Edit Berita
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
                                <InputLabel htmlFor="news_title">
                                    <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                        Judul Berita
                                    </span>
                                </InputLabel>
                                {data.news_title ? (
                                    <h1 className="text-end text-xs font-normal text-dark-4 md:text-sm">
                                        {data.news_title.length}/
                                        {MAX_TITLE_EVENT}
                                    </h1>
                                ) : (
                                    <h1 className="text-end text-xs font-normal text-dark-4 md:text-sm">
                                        {news_title.length}/{MAX_TITLE_EVENT}
                                    </h1>
                                )}
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
                                defaultValue={news_title}
                            />
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
                                defaultValue={dataNews.news_category_id}
                                required
                            >
                                <option>Pilih kategori berita</option>

                                {categories.map((category) => {
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
                                                {/* <button
                                                    type="button"
                                                    className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-500 text-sm font-bold text-white"
                                                    onClick={() =>
                                                        handleDeleteImages(
                                                            index
                                                        )
                                                    }
                                                >
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button> */}
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="my-5 grid w-full grid-cols-1 items-center gap-3 rounded-lg border-2 border-dashed border-neutral-80 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
                                    {news_images.map((image, index) => {
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
                                                {/* <button
                                                    type="button"
                                                    className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-500 text-sm font-bold text-white"
                                                    onClick={() =>
                                                        handleDeleteImages(
                                                            index
                                                        )
                                                    }
                                                >
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button> */}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                            <FileInput
                                id="news_images"
                                name="news_images"
                                onChange={onImagesChange}
                                accept="image/png, image/jpg, image/jpeg"
                                multiple
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
