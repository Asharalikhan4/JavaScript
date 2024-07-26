import { FC } from "react";
import AsyncJavaScript from "@/pages/AsyncJavaScript/AsyncJavaScript";
import Ajax from "@/pages/AsyncJavaScript/Ajax";
import Api from "@/pages/AsyncJavaScript/Api";
import XMLHttpRequest from "@/pages/AsyncJavaScript/XMLHttpRequest";
import CallbackFunction from "@/pages/AsyncJavaScript/CallbackFunction";
import CallbackHell from "@/pages/AsyncJavaScript/CallbackHell";
import Promises from "@/pages/AsyncJavaScript/Promises";
import PromisesAndFetchApi from "@/pages/AsyncJavaScript/PromisesAndFetchApi";
import ConsumingPromises from "@/pages/AsyncJavaScript/ConsumingPromises";
import ChainingPromises from "@/pages/AsyncJavaScript/ChainingPromises";

const Page: FC = () => {
    return (
        <section className="space-y-8">
            <AsyncJavaScript />
            <Ajax />
            <Api />
            <XMLHttpRequest />
            <CallbackFunction />
            <CallbackHell />
            <Promises />
            <PromisesAndFetchApi />
            <ConsumingPromises />
            <ChainingPromises />
        </section>
    );
};

export default Page;