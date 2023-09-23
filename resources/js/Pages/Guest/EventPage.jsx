import EventLists from "@/Components/Guest/Event/EventLists";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";
import React from "react";

export default function EventPage() {
    return (
        <>
            <Head title="Event" />
            <MainLayout>
                <EventLists />
            </MainLayout>
        </>
    );
}
