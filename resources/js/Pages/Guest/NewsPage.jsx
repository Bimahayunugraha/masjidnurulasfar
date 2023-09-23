import NewsLists from "@/Components/Guest/News/NewsLists";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function NewsPage(props) {
    return (
        <>
            <Head title="Berita" />
            <MainLayout>
                <NewsLists newsData={props.newsData} />
            </MainLayout>
        </>
    );
}
