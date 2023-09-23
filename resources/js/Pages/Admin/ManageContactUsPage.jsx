import ManageContactUsItem from "@/Components/Admin/ManageContactUs/ManageContactUsItem";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function ManageContactUsPage(props) {
    return (
        <>
            <Head title="Mengelola Kontak" />
            <AdminLayout auth={props.auth}>
                <ManageContactUsItem contactData={props.contactData}/>
            </AdminLayout>
        </>
    );
}
