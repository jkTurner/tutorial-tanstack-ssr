import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col w-full max-w-[600px] gap-[24px] justify-center items-center mx-auto h-[60vh]">
      <h1 className="text-xl">TanStack SSR Setup Tutorial</h1>
      <Link href="/ssr-posts">
        <button className="bg-violet-300 text-slate-700 py-2 px-4 cursor-pointer">
          View Result
        </button>
      </Link>
    </div>
  );
}
