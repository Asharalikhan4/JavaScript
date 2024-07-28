import { FC } from "react";
import { DynamicImport } from "@/utils/DynamicImport";
import CustomPage from "@/components/CustomPage";
import Heading from "@/components/Heading";

// const CustomPage = DynamicImport(() => import("@/components/CustomPage"));
// const Heading = DynamicImport(() => import("@/components/Heading"));
const HelloWorld = DynamicImport(() => import("@/pages/basics/HelloWorld"));
const ValuesAndVariables = DynamicImport(() => import("@/pages/basics/ValuesAndVariables"));
const DataTypes = DynamicImport(() => import("@/pages/basics/DataTypes"));
const Comments = DynamicImport(() => import("@/pages/basics/Comments"));
const TypeOfOperator = DynamicImport(() => import("@/pages/basics/TypeOfOperator"));
const LetConstVar = DynamicImport(() => import("@/pages/basics/LetConstVar"));
const Operators = DynamicImport(() => import("@/pages/basics/Operators"));
const StringLiterals = DynamicImport(() => import("@/pages/basics/StringLiterals"));
const IfElse = DynamicImport(() => import("@/pages/basics/IfElse"));
const TernaryOperator = DynamicImport(() => import("@/pages/basics/TernaryOperator"));
const TypeConversionAndCoercion = DynamicImport(() => import("@/pages/basics/TypeConversionAndCoercion"));
const TruthyAndFalsyValue = DynamicImport(() => import("@/pages/basics/TruthyAndFalsyValue"));
const EqualityOperator = DynamicImport(() => import("@/pages/basics/EqualityOperator"));
const SwitchCase = DynamicImport(() => import("@/pages/basics/SwitchCase"));
const StatementAndExpression = DynamicImport(() => import("@/pages/basics/StatementAndExpression"));

const Page: FC = () => {
    return (
        <CustomPage>
            <Heading level={2} text="Basics" />
            <HelloWorld />
            <ValuesAndVariables />
            <DataTypes />
            <Comments />
            <TypeOfOperator />
            <LetConstVar />
            <Operators />
            <StringLiterals />
            <IfElse />
            <TernaryOperator />
            <TypeConversionAndCoercion />
            <TruthyAndFalsyValue />
            <EqualityOperator />
            <SwitchCase />
            <StatementAndExpression />
        </CustomPage>
    );
};

export default Page;