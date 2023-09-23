import ManageNewsLists from "@/Components/Admin/ManageNews/ManageNewsLists";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function ManageNewsPage(props) {
    return (
        <>
            <Head title="Mengelola Berita" />
            <AdminLayout auth={props.auth}>
                <ManageNewsLists categories={props.categories} newsData={props.newsData}/>
            </AdminLayout>
        </>
    );
}
