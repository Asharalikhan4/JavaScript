import { FC } from "react";
import Heading from "@/components/Heading";
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
import CustomPage from "@/components/CustomPage";
import HandlingRejectedPromises from "@/pages/AsyncJavaScript/HandlingRejectedPromises";
import BuildingPromises from "@/pages/AsyncJavaScript/BuildingPromises";
import AsyncAwait from "@/pages/AsyncJavaScript/AsyncAwait";
import ErrorHandlingWithTryCatchFinally from "@/pages/AsyncJavaScript/ErrorHandlingWithTryCatchFinally";

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="Async JavaScript" />
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
            <HandlingRejectedPromises />
            <BuildingPromises />
            <AsyncAwait />
            <ErrorHandlingWithTryCatchFinally />
        </CustomPage>
    );
};

export default Page;