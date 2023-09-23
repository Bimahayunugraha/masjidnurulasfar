import ManageEventList from "@/Components/Admin/ManageEvents/ManageEventLists";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function ManageEventPage(props) {
    return (
        <>
            <Head title="Mengelola Event" />
            <AdminLayout auth={props.auth}>
                <ManageEventList />
            </AdminLayout>
        </>
    );
}
