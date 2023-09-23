import Drawer from "@/Components/Admin/Drawer";
import Header from "@/Components/Admin/Header";
import Sidebar from "@/Components/Admin/Sidebar";
import { useState } from "react";

export default function AdminLayout({ children, auth }) {
    const [drawerTrigger, setdrawerTrigger] = useState(false);

    const handledrawerTrigger = () => {
        setdrawerTrigger(!drawerTrigger);

        if (drawerTrigger) {
            document.body.style.overflow = "unset";
        } else {
            if (typeof window != "undefined" && window.document) {
                document.body.style.overflow = "hidden";
            }
        }
    };

    return (
        <>
            <div className="flex h-full overflow-y-auto">
                <Sidebar />
                <Drawer
                    drawerTrigger={drawerTrigger}
                    handledrawerTrigger={handledrawerTrigger}
                />
                <div className="flex w-full flex-1 flex-col">
                    <Header
                        handledrawerTrigger={handledrawerTrigger}
                        auth={auth}
                    />
                    <div className="z-20 pl-0 pt-14 md:pl-52 lg:pl-52">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
