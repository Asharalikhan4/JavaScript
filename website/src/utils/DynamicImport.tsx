import dynamic, { DynamicOptions, Loader } from "next/dynamic";
import Loading from "@/app/loading";

export function DynamicImport(importFunc: DynamicOptions<{}> | Loader<{}>) {
  return dynamic(importFunc, {
    loading: () => <Loading />,
  });
};