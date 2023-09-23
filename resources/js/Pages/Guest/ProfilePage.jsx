import ProfileInfo from "@/Components/Guest/Profile/ProfileInfo";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function ProfilePage() {
    return (
        <>
            <Head title="Profile Masjid Nurul Asfar" />
            <MainLayout>
                <ProfileInfo />
            </MainLayout>
        </>
    );
}
