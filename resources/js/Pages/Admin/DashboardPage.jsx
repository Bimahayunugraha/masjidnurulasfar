import Overview from "@/Components/Admin/Overview";
import AdminLayout from "@/Layouts/AdminLayout";
import { Head } from "@inertiajs/react";

export default function DashboardPage(props) {
    return (
        <>
            <Head title="Dashboard Admin" />
            <AdminLayout auth={props.auth}>
                <Overview
                    socialMediaCount={props.socialMediaCount}
                    articlesCount={props.articlesCount}
                    agendasCount={props.agendasCount}
                    articlesData={props.articlesData}
                    agendasData={props.agendasData}
                />
            </AdminLayout>
        </>
    );
}
