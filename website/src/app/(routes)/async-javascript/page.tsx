import { FC } from "react";
import AsyncJavaScript from "@/app/pages/AsyncJavaScript/AsyncJavaScript";
import Ajax from "@/app/pages/AsyncJavaScript/Ajax";
import Api from "@/app/pages/AsyncJavaScript/Api";
import XMLHttpRequest from "@/app/pages/AsyncJavaScript/XMLHttpRequest";

const Page: FC = () => {
    return (
        <section className="space-y-8">
            <AsyncJavaScript />
            <Ajax />
            <Api />
            <XMLHttpRequest />
        </section>
    );
};

export default Page;