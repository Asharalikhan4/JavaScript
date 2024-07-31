import { FC } from "react";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";
import AsyncJavaScript from "@/components/docs/AsyncJavaScript/AsyncJavaScript";
import Ajax from "@/components/docs/AsyncJavaScript/Ajax";
import Api from "@/components/docs/AsyncJavaScript/Api";
import XMLHttpRequest from "@/components/docs/AsyncJavaScript/XMLHttpRequest";
import CallbackFunction from "@/components/docs/AsyncJavaScript/CallbackFunction";
import CallbackHell from "@/components/docs/AsyncJavaScript/CallbackHell";
import Promises from "@/components/docs/AsyncJavaScript/Promises";
import PromisesAndFetchApi from "@/components/docs/AsyncJavaScript/PromisesAndFetchApi";
import ConsumingPromises from "@/components/docs/AsyncJavaScript/ConsumingPromises";
import ChainingPromises from "@/components/docs/AsyncJavaScript/ChainingPromises";
import HandlingRejectedPromises from "@/components/docs/AsyncJavaScript/HandlingRejectedPromises";
import BuildingPromises from "@/components/docs/AsyncJavaScript/BuildingPromises";
import AsyncAwait from "@/components/docs/AsyncJavaScript/AsyncAwait";
import ErrorHandlingWithTryCatchFinally from "@/components/docs/AsyncJavaScript/ErrorHandlingWithTryCatchFinally";

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