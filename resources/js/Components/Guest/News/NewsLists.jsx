import React, { useEffect, useRef, useState } from "react";
import imageKajianMualaf from "../../../../../public/assets/img/jpg/pengajian-mualaf.jpg";
import imageKajianMuslimah from "../../../../../public/assets/img/jpg/kajian-muslimah.jpg";
import imageTpaAnak from "../../../../../public/assets/img/jpg/tpa-anak.jpg";
import { dataNotFound } from "@/Utils/globalVariables";
import NewsListitem from "./NewsListitem";
import { motion } from "framer-motion";
import NewestNewsListItem from "./NewestNewsListItem";

export default function NewsLists(props) {
    const carousel = useRef();
    const [width, setwidth] = useState(0);

    useEffect(() => {
        setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, []);

    return (
        <div className="relative overflow-hidden">
            <div className="py-20 md:px-10 md:py-24">
                <div className="container mx-auto">
                    <div className="">
                        <h2 className="mb-4 text-lg font-black tracking-wide text-primary-soft-violet sm:text-lg md:text-2xl">
                            Berita Terbaru
                        </h2>
                        <motion.div
                            ref={carousel}
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            className="flex min-w-full gap-3"
                        >
                            {props.newsData?.slice(0, 5).map((news) => {
                                return (
                                    <NewestNewsListItem
                                        key={news.id}
                                        newsData={news}
                                        drag={true}
                                    />
                                );
                            })}
                        </motion.div>
                    </div>
                    <h2 className="mb-4 mt-6 text-lg font-black tracking-wide text-primary-soft-violet sm:text-lg md:text-2xl">
                        Semua Berita
                    </h2>
                    {props.newsData?.length > 0 ? (
                        <div className="mb-6 grid grid-cols-1 gap-3 pt-0 sm:grid-cols-2 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:grid-cols-4">
                            {props.newsData?.map((news) => {
                                return (
                                    <NewsListitem
                                        key={news.id}
                                        newsData={news}
                                    />
                                );
                            })}
                        </div>
                    ) : (
                        <div className="pb-6 pt-36">
                            <div className={dataNotFound}>
                                <i className="fi fi-rr-info mr-3 text-sm"></i>
                                Data berita tidak ditemukan
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
