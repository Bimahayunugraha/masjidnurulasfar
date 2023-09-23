import About from "@/Components/Guest/Home/About";
import ContactUs from "@/Components/Guest/Home/ContactUs";
import Donation from "@/Components/Guest/Home/Donation";
import Hero from "@/Components/Guest/Home/Hero";
import Location from "@/Components/Guest/Home/Location";
import News from "@/Components/Guest/Home/News";
import ProgramShort from "@/Components/Guest/Home/ProgramShort";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Homepage(props) {
    console.log(props);
    return (
        <>
            <Head title="Home" />
            <MainLayout socialMediasData={props.socialMediasData}>
                <section>
                    <Hero />
                </section>
                <section className="pb-16 pt-24">
                    <About />
                </section>
                <section className="pb-16 pt-24">
                    <ProgramShort agendasData={props.agendasData} />
                </section>
                <section className="pb-16 pt-24">
                    <Donation />
                </section>
                <section className="pb-16 pt-24">
                    <News newsData={props.newsData} />
                </section>
                <section className="pb-16 pt-24">
                    <Location />
                </section>
                <section>
                    <ContactUs contactData={props.contactData} />
                </section>
            </MainLayout>
        </>
    );
}
