import AgendaList from "@/Components/Guest/Agenda/AgendaList";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function AgendaPage(props) {
    return (
        <>
            <Head title="Agenda" />
            <MainLayout>
                <AgendaList agendaData={props.agendaData} />
            </MainLayout>
        </>
    );
}
