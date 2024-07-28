import dynamic from "next/dynamic";
import Loading from "@/app/loading";

export function DynamicImport(importFunc) {
  return dynamic(importFunc, {
    loading: () => <Loading />,
  });
};