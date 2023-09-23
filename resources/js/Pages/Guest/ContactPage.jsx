import Contact from "@/Components/Guest/Contact/Contact";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function ContactPage() {
    return (
        <>
            <Head title="Kontak Kami" />
            <MainLayout>
                <Contact />
            </MainLayout>
        </>
    );
}
