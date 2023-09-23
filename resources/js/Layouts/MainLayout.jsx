import Footer from "@/Components/Footer";
import MobileBottomNavbar from "@/Components/MobileBottomNavbar";
import Navbar from "@/Components/Navbar";
import ToTop from "@/Components/ToTop";

export default function MainLayout({ children }) {
    return (
        <div className="flex">
            <MobileBottomNavbar />
            <div className="flex w-full flex-1 flex-col">
                <Navbar />
                <main>{children}</main>
                <div className="nt-2 pb-16 lg:pb-0">
                    <Footer />
                </div>
            </div>
            <ToTop />
        </div>
    );
}
