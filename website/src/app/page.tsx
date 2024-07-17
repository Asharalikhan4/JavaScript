import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen">
      <div className="h-full flex flex-col items-center justify-center ">
        <div className="text-3xl">Welcome to JavaScript+TypeScript World.</div>
        <div className="text-4xl font-medium">Here you can learn JavaScript+TypeScript from scratch.</div>
        <Link href={"/values-and-variables"} className="border-2 px-6 py-1 rounded-md hover:bg-slate-200">Next</Link>
      </div>
    </main>
  );
};
