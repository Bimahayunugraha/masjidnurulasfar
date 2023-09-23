import ManageAgendaLists from "@/Components/Admin/ManageAgenda/ManageAgendaLists";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function ManageAgendaPage(props) {
    return (
        <>
            <Head title="Mengelola Event" />
            <AdminLayout auth={props.auth}>
                <ManageAgendaLists agendaData={props.agendaData} />
            </AdminLayout>
        </>
    );
}
