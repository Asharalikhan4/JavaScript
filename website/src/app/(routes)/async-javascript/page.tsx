import { FC } from "react";
import AsyncJavaScript from "@/pages/AsyncJavaScript/AsyncJavaScript";
import Ajax from "@/pages/AsyncJavaScript/Ajax";
import Api from "@/pages/AsyncJavaScript/Api";
import XMLHttpRequest from "@/pages/AsyncJavaScript/XMLHttpRequest";

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