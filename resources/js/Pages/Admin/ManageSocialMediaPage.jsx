import ManageSocialMediaLists from "@/Components/Admin/ManageSocialMedia/ManageSocialMediaLists";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function ManageSocialMediaPage(props) {
    return (
        <>
            <Head title="Mengelola Sosial Media" />
            <AdminLayout auth={props.auth}>
                <ManageSocialMediaLists socialMediData={props.socialMediData}/>
            </AdminLayout>
        </>
    );
}
