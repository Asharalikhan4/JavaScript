import Link from "next/link";
import CustomText from "@/components/CustomText";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-full flex flex-col items-center justify-center gap-y-4 md:gap-y-2">
        <div className="text-2xl md:text-3xl font-Inter">Welcome to <CustomText text="JavaScript+TypeScript" className="italic font-medium" /> World.</div>
        <div className="text-2xl md:text-4xl md:font-medium font-Assistant">Here you can learn <CustomText text="JavaScript+TypeScript" className="text-[#005B41] dark:text-cyan-300 font-medium"/> from scratch.</div>
        <Link href={"/table-of-contents"} className="border-2 border-[#005B41] dark:border-cyan-300 hover:bg-[#005B41] dark:hover:bg-cyan-300 px-16 py-2 md:px-6 md:py-1 rounded-md transition duration-300 ease-in-out dark:hover:text-black hover:text-white hover:font-medium">Next</Link>
      </div>
    </main>
  );
};