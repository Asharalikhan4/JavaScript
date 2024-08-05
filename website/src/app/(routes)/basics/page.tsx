import { FC } from "react";
import { DynamicImport } from "@/utils/DynamicImport";
import CustomPage from "@/components/common/CustomPage";
import Heading from "@/components/common/Heading";

const HelloWorld = DynamicImport(() => import("@/components/docs/basics/HelloWorld"));
const ValuesAndVariables = DynamicImport(() => import("@/components/docs/basics/ValuesAndVariables"));
const DataTypes = DynamicImport(() => import("@/components/docs/basics/DataTypes"));
const Comments = DynamicImport(() => import("@/components/docs/basics/Comments"));
const TypeOfOperator = DynamicImport(() => import("@/components/docs/basics/TypeOfOperator"));
const LetConstVar = DynamicImport(() => import("@/components/docs/basics/LetConstVar"));
const Operators = DynamicImport(() => import("@/components/docs/basics/Operators"));
const StringLiterals = DynamicImport(() => import("@/components/docs/basics/StringLiterals"));
const IfElse = DynamicImport(() => import("@/components/docs/basics/IfElse"));
const TernaryOperator = DynamicImport(() => import("@/components/docs/basics/TernaryOperator"));
const TypeConversionAndCoercion = DynamicImport(() => import("@/components/docs/basics/TypeConversionAndCoercion"));
const TruthyAndFalsyValue = DynamicImport(() => import("@/components/docs/basics/TruthyAndFalsyValue"));
const EqualityOperator = DynamicImport(() => import("@/components/docs/basics/EqualityOperator"));
const SwitchCase = DynamicImport(() => import("@/components/docs/basics/SwitchCase"));
const StatementAndExpression = DynamicImport(() => import("@/components/docs/basics/StatementAndExpression"));

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