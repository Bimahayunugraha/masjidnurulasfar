import ManageProfileMasjidItem from "@/Components/Admin/ManageProfileMasjid/ManageProfileMasjidItem";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function ManageProfileMasjidPage(props) {
    return (
        <>
            <Head title="Mengelola Profile Masjid" />
            <AdminLayout auth={props.auth}>
                <ManageProfileMasjidItem />
            </AdminLayout>
        </>
    );
}
