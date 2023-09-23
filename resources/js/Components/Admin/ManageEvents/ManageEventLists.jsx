import { dataNotFound } from "@/Utils/globalVariables";
import ManageEventListsItem from "./ManageEventListsItem";
import image from "../../../../../public/assets/img/jpg/pengajian-mualaf.jpg";
import SecondaryHeader from "../SecondaryHeader";
import PrimaryButton from "@/Components/PrimaryButton";
import { useEffect, useRef, useState } from "react";
import Modal from "@/Components/Modal";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import { useForm } from "@inertiajs/react";
import { maxLengthCheck } from "@/Utils/maxLengthCheck";
import InputError from "@/Components/InputError";
import TertiaryButton from "@/Components/TertiaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import FileInput from "@/Components/FileInput";
import TextEditor from "@/Components/TextEditor";
import { EditorState, convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";

export default function ManageEventList() {
    const [eventDescription, setEventDescription] = useState(() =>
        EditorState.createEmpty()
    );

    const [modalCreateTrigger, setModalCreateTrigger] = useState(false);
    const [error, setError] = useState("");
    const [images, setImages] = useState([]);
    const imageRef = useRef([]);

    const { data, setData, post, processing, errors, reset } = useForm({
        event_title: "",
        event_image: [],
        event_date: "",
        event_description: "",
    });

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
            setData("event_image", validImageFiles);
            return;
        } else {
            setError("");
        }
    };

    useEffect(() => {
        const images = [],
            fileReaders = [];
        let isCancel = false;
        if (data.event_image.length) {
            data.event_image.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        images.push(result);
                    }
                    if (
                        images.length === data.event_image.length &&
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
    }, [data.event_image]);

    const eventsData = [
        {
            id: 1,
            event_title: "Event 1",
            slug: "event-1",
            event_date: "2021-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            id: 2,
            event_title: "Event 2",
            slug: "event-2",
            event_date: "2023-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            id: 3,
            event_title: "Event 3",
            slug: "event-3",
            event_date: "2023-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            id: 4,
            event_title: "Event 4",
            slug: "event-4",
            event_date: "2023-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            id: 5,
            event_title: "Event 5",
            slug: "event-5",
            event_date: "2023-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
        {
            id: 6,
            event_title: "Event 6",
            slug: "event-6",
            event_date: "2023-01-01",
            event_image: image,
            excerpt: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
        },
    ];

    const handleSubmut = (e) => {
        e.preventDefault();

        console.log(data);
    };

    const handleModalCreateTrigger = () => {
        setModalCreateTrigger(!modalCreateTrigger);
        setError("");
    };

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

    return (
        <div className="container mx-auto px-6">
            <SecondaryHeader>
                <div className="flex items-center">
                    <div className="min-w-0 flex-1">
                        <h2 className="text-sm font-medium text-neutral-100-2 md:pl-52 md:text-lg">
                            Kelola Event
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
                    onSubmit={handleSubmut}
                    className="relative flex max-h-full w-full flex-col overflow-hidden"
                >
                    <div className="flex flex-shrink-0 items-center justify-between rounded-t-xl border-b-2 border-neutral-100 border-opacity-100 p-3">
                        <h2 className="p-1.5 text-center text-base font-medium text-gray-900 md:text-lg">
                            Tambah Event
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
                                <InputLabel htmlFor="event_title">
                                    <span className="block after:ml-1 after:text-red-500 after:content-['*']">
                                        Judul Event
                                    </span>
                                </InputLabel>
                                <h1 className="text-end text-xs font-normal text-dark-4 md:text-sm">
                                    {data.event_title.length}/{MAX_TITLE_EVENT}
                                </h1>
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
                                value={data.event_title}
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
                                    Pilih tanggal event{" "}
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
                                <div className="my-5 flex w-full items-center justify-center">
                                    <div className="flex h-52 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-80">
                                        <div className="flex flex-col items-center justify-center pt-6 pb-5">
                                            <i className="fa-regular fa-image text-2xl text-neutral-80"></i>
                                        </div>
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
                        <TertiaryButton className="ml-3">Simpan</TertiaryButton>
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
                    {eventsData.length > 0 ? (
                        <div className="mb-6 grid grid-cols-1 gap-3 pt-20 sm:grid-cols-2 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
                            {eventsData.map((item) => {
                                return (
                                    <ManageEventListsItem
                                        key={item.id}
                                        dataEvent={item}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <div className="pt-36 pb-6">
                            <div className={dataNotFound}>
                                <i className="fi fi-rr-info mr-3 text-sm"></i>
                                Data Offline Classes not found
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
