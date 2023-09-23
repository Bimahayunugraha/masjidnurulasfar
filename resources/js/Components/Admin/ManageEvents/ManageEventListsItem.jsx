import DangerButton from "@/Components/DangerButton";
import DangerModal from "@/Components/DangerModal";
import FileInput from "@/Components/FileInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import TertiaryButton from "@/Components/TertiaryButton";
import TextEditor from "@/Components/TextEditor";
import TextInput from "@/Components/TextInput";
import { maxLengthCheck } from "@/Utils/maxLengthCheck";
import { truncate } from "@/Utils/truncate";
import { useForm } from "@inertiajs/react";
import {
    convertToRaw,
    ContentState,
    convertFromHTML,
    EditorState,
} from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useEffect, useRef, useState } from "react";
import ActionDropdown from "../ActionDropdown";

export default function ManageEventListsItem({ dataEvent }) {
    const { id, event_title, event_image, event_date, description } = dataEvent;
    const [eventDescription, setEventDescription] = useState(null);
    const { data, setData, put, processing, errors, reset } = useForm({
        event_title: "",
        event_image: "",
        event_date: "",
        event_description: "",
    });
    const [modalDetailTrigger, setModalDetailTrigger] = useState(false);
    const [modalEditTrigger, setModalEditTrigger] = useState(false);
    const [modalDeleteTrigger, setModalDeleteTrigger] = useState(false);
    const [error, setError] = useState("");
    const [imageFiles, setImageFiles] = useState([]);
    const [images, setImages] = useState([]);
    const imageRef = useRef([]);

    const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
    const MAX_FILE_SIZE_IMAGE = 3072;
    const MAX_TITLE_EVENT = 100;
    const MAX_FILE_LENGTH = 5;

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
                console.log("Ukuran file tidak lebih dari 5 mb");
                setError("Ukuran file tidak lebih dari 5 mb");
                return;
            } else {
                setError("");
            }
        }

        if (validImageFiles.length > MAX_FILE_LENGTH) {
            setError("Maksimal 5 file");
            return;
        } else if (validImageFiles.length) {
            setImageFiles(validImageFiles);
            return;
        } else {
            setError("");
        }
    };

    useEffect(() => {
        const images = [],
            fileReaders = [];
        let isCancel = false;
        if (imageFiles.length) {
            imageFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        images.push(result);
                    }
                    if (images.length === imageFiles.length && !isCancel) {
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
    }, [imageFiles]);

    useEffect(() => {
        if (data) {
            setEventDescription(
                EditorState.createWithContent(
                    ContentState.createFromBlockArray(
                        convertFromHTML(description)
                    )
                )
            );
        }
    }, [data]);

    const handleDeleteImages = (e) => {
        const s = images.filter((item, index) => index !== e);
        setImages(s);
        imageRef.current.value = "";
    };

    const handleChange = (body) => {
        setEventDescription(body);
        setData(
            "event_description",
            draftToHtml(convertToRaw(eventDescription.getCurrentContent()))
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
            <div className="relative aspect-video overflow-hidden rounded-t-10">
                <img
                    className="object-cover transition-all hover:scale-105 hover:rounded-t-20"
                    src={event_image}
                    alt="workout-image"
                    loading="lazy"
                />
            </div>

            <div className="px-5 pb-5 pt-3">
                <div className="mb-3 flex items-center space-x-4">
                    <div className="min-w-0 flex-1">
                        <p className="truncate text-base font-medium text-neutral-100-2">
                            {event_title}
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

                <div className="relative mb-3 space-x-2 text-sm">
                    <div className="inline-flex items-center">
                        <div className="mr-3 flex-shrink-0">
                            <span className="text-secondary-navy">
                                <i className="fa-solid fa-clock"></i>
                            </span>
                        </div>
                        <div className="flex-1 text-sm leading-relaxed">
                            {event_date}
                        </div>
                    </div>
                </div>
                <div className="min-w-0 flex-1">
                    <p className="whitespace-pre-line break-all text-sm font-normal text-neutral-80">
                        {truncate(description, 100)}
                    </p>
                </div>
            </div>

            <Modal show={modalDetailTrigger} onClose={handleModalDetailTrigger}>
                <div className="flex flex-shrink-0 items-center justify-between rounded-t-xl border-b-2 border-neutral-100 border-opacity-100 p-3">
                    <h2 className="p-1.5 text-center text-base font-medium text-gray-900 md:text-lg">
                        Detail Event
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
                    {images.length > 0 ? (
                        <div className="mb-5 flex w-full items-center justify-center">
                            <div className="flex h-52 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-80">
                                <div className="flex flex-col items-center justify-center pt-6 pb-5">
                                    <i className="fa-regular fa-image text-2xl text-neutral-80"></i>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="mb-5 grid w-full grid-cols-1 items-center gap-3 rounded-lg border-2 border-dashed border-neutral-80 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                            <div className="relative mx-2 my-2">
                                <div className="relative overflow-hidden rounded-lg">
                                    <img
                                        className="h-52 w-full rounded-lg border border-neutral-60 object-cover object-center md:w-52"
                                        src={event_image}
                                        alt="workout-image"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="relative mb-1 space-x-2 text-sm">
                        <div className="inline-flex items-center">
                            <div className="mr-3 flex-shrink-0">
                                <span className="text-secondary-navy">
                                    <i className="fa-solid fa-clock"></i>
                                </span>
                            </div>
                            <div className="flex-1 text-sm leading-relaxed">
                                {event_date}
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 flex items-center space-x-4">
                        <h5 className="break-all text-sm font-bold tracking-tight text-neutral-100-2 md:text-base">
                            {event_title}
                        </h5>
                    </div>
                    <div className="min-w-0 flex-1">
                        <p className="whitespace-pre-line break-words text-justify text-sm font-normal text-neutral-80">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Magnam placeat tenetur dolor, omnis corporis
                            laborum soluta fuga ullam aperiam odio voluptatum
                            quis fugiat fugit obcaecati unde minus sapiente
                            tempora? Provident sunt voluptatum non tenetur
                            aperiam! Eius fuga commodi sint corporis laborum
                            quibusdam, doloribus ipsam ullam aspernatur odio
                            incidunt vel enim quis, voluptas, voluptatibus iusto
                            assumenda hic nisi minima et voluptates. Enim quo
                            repudiandae laudantium itaque quos nam reiciendis,
                            ipsum non illum ratione. Enim culpa modi dolorem
                            eligendi ab nisi sapiente voluptas minus odio nulla
                            tempore, quam architecto nihil aliquam voluptatem
                            voluptate rerum itaque quasi dolorum nobis. Maiores
                            quaerat nam laboriosam, at iure cum ipsa! Aut,
                            minima sint doloremque, iusto, quas facere
                            dignissimos facilis placeat explicabo tempora itaque
                            error nesciunt dolores. Omnis, recusandae accusamus.
                            Culpa maxime quibusdam, assumenda iure sit unde odio
                            deserunt nemo dolor similique nam voluptas
                            asperiores vitae officiis iusto, dicta deleniti.
                            Dignissimos deleniti qui ipsa porro reprehenderit
                            architecto dolor saepe, iusto pariatur ullam
                            molestias facere quod corporis explicabo ab quia
                            eligendi ex exercitationem. Inventore aspernatur
                            reiciendis commodi non id aperiam autem vel nihil
                            sed ipsam, repudiandae deserunt ut! Quaerat culpa
                            repellendus quod deserunt odio at excepturi commodi,
                            sit incidunt maiores sequi iste placeat rem animi,
                            et tempora? Nisi.
                        </p>
                    </div>
                </div>
            </Modal>

            <Modal show={modalEditTrigger} onClose={handleModalEditTrigger}>
                <form className="relative flex max-h-full w-full flex-col overflow-hidden">
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-xl border-b-2 border-neutral-100 border-opacity-100 p-3">
                        <h2 className="p-1.5 text-center text-base font-medium text-gray-900 md:text-lg">
                            Edit Event
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
                                <InputLabel htmlFor="event_title">
                                    <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                        Judul Event
                                    </span>
                                </InputLabel>

                                {data.event_title ? (
                                    <h1 className="text-end text-xs font-normal text-dark-4 md:text-sm">
                                        {data.event_title.length}/
                                        {MAX_TITLE_EVENT}
                                    </h1>
                                ) : (
                                    <h1 className="text-end text-xs font-normal text-dark-4 md:text-sm">
                                        {event_title.length}/{MAX_TITLE_EVENT}
                                    </h1>
                                )}
                            </div>

                            <TextInput
                                id="event_title"
                                type="text"
                                name="event_title"
                                maxLength={MAX_TITLE_EVENT}
                                onInput={maxLengthCheck}
                                onChange={(e) =>
                                    setData("event_title", e.target.value)
                                }
                                className="mt-1 block w-full"
                                placeholder="Masukkan judul event"
                                defaultValue={event_title}
                            />

                            <InputError className="mt-2" />
                        </div>
                        <div className="relative">
                            <InputLabel htmlFor="event_description">
                                <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                    Deskripsi Event
                                </span>
                            </InputLabel>
                            <TextEditor
                                state={eventDescription}
                                handleChange={handleChange}
                            />
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="event_date"
                                className="my-5 block text-sm"
                            >
                                <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                                    Pilih tanggal event
                                </span>
                                <div className="flex items-center">
                                    <input
                                        type="date"
                                        name="event_date"
                                        id="event_date"
                                        className="mt-2 block w-full rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-blue-500 focus:bg-white focus:outline-none sm:text-sm"
                                        required
                                    />
                                </div>
                            </label>
                        </div>
                        <div className="relative">
                            {images.length > 0 ? (
                                <div className="my-5 grid w-full grid-cols-1 items-center gap-3 rounded-lg border-2 border-dashed border-neutral-80 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                                    {images.map((image, index) => {
                                        return (
                                            <div
                                                className="relative mx-2 my-2"
                                                key={index}
                                            >
                                                <div className="relative overflow-hidden rounded-lg">
                                                    <img
                                                        className="h-52 w-full rounded-lg border border-neutral-60 object-cover object-center md:w-52"
                                                        src={image}
                                                        alt="workout-image"
                                                        loading="lazy"
                                                    />
                                                </div>
                                                <button
                                                    type="button"
                                                    className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-500 text-sm font-bold text-white"
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
                                <div className="my-5 grid w-full grid-cols-1 items-center gap-3 rounded-lg border-2 border-dashed border-neutral-80 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
                                    <div className="relative mx-2 my-2">
                                        <div className="relative overflow-hidden rounded-lg">
                                            <img
                                                className="h-52 w-full rounded-lg border border-neutral-60 object-cover object-center md:w-52"
                                                src={event_image}
                                                alt="workout-image"
                                                loading="lazy"
                                            />
                                        </div>
                                        <button
                                            type="button"
                                            className="absolute -top-2 -right-2 inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-red-500 text-sm font-bold text-white"
                                            onClick={() =>
                                                handleDeleteImages(id)
                                            }
                                        >
                                            <i className="fa-solid fa-xmark"></i>
                                        </button>
                                    </div>
                                </div>
                            )}
                            <FileInput
                                id="event_image"
                                name="event_image"
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
                        <TertiaryButton className="ml-3">
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
                        >
                            Hapus Data
                        </DangerButton>
                    </div>
                </form>
            </DangerModal>
        </div>
    );
}
