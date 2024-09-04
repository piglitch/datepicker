import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <div></div>
      <div className="mt-auto mb-20">
        <div className="flex p-3 justify-between gap-5 border rounded-full">
          <div className="py-1 px-3 rounded-full text-center my-auto cursor-pointer hover:bg-slate-400">Day</div>
          <div className="py-1 px-3 rounded-full text-center my-auto cursor-pointer hover:bg-slate-400">Week</div>
          <div className="py-1 px-3 rounded-full text-center my-auto cursor-pointer hover:bg-slate-400">Month</div>
          <div className="py-1 px-3 rounded-full text-center my-auto cursor-pointer hover:bg-slate-400">Year</div>
        </div>
      </div>
    </main>
  );
}
