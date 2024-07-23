import Link from "next/link";
import CustomText from "./components/CustomText";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-full flex flex-col items-center justify-center gap-y-4 md:gap-y-2">
        <div className="text-2xl md:text-3xl font-Inter">Welcome to JavaScript+TypeScript World.</div>
        <div className="text-2xl md:text-4xl md:font-medium font-Assistant">Here you can learn <CustomText text="JavaScript+TypeScript" className="text-cyan-300"/> from scratch.</div>
        <Link href={"/table-of-contents"} className="border-2 border-cyan-100 px-20 py-2 md:px-6 md:py-1 rounded-md transition duration-300 ease-in-out hover:bg-cyan-100 hover:text-black hover:font-medium">Next</Link>
      </div>
    </main>
  );
};
