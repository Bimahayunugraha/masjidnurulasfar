import ManageCategoryLists from "@/Components/Admin/ManageCategory/ManageCategoryLists";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function ManageCategoryPage(props) {
    return (
        <>
            <Head title="Mengelola Kategori" />
            <AdminLayout auth={props.auth}>
                <ManageCategoryLists dataCategory={props.dataCategory} />
            </AdminLayout>
        </>
    );
}
