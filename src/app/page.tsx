import Image from "next/image";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm lg:flex">
        <img src="/stwie2.png" alt="stwiee" className="rounded-lg" />
      </div>
    </main>
  );
}
