import Image from "next/image";
import Navbar from './_components/Navbar';
import Plans from "./_components/Plans";
import Periods from "./_components/Periods";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      <Navbar />
      <Plans />
      <Periods />
    </main>
  );
}
