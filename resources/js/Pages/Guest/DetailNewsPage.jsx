import DetailNews from "@/Components/Guest/News/DetailNews";
import MainLayout from "@/Layouts/MainLayout";
import React from "react";

export default function DetailNewsPage(props) {
    return (
        <>
            <MainLayout>
                <DetailNews
                    newsDetailData={props.newsDetail}
                    otherNewsData={props.otherNews}
                />
            </MainLayout>
        </>
    );
}
