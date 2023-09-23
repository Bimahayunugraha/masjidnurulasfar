import DetailAgenda from "@/Components/Guest/Agenda/DetailAgenda";
import MainLayout from "@/Layouts/MainLayout";

export default function DetailAgendaPage(props) {
    return (
        <>
            <MainLayout>
                <DetailAgenda agendaDetailData={props.agendaDetail} />
            </MainLayout>
        </>
    );
}
