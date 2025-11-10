import Image from "next/image";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-8xl -my-7">
        <Navbar/>
      </div>
    </div>
  );
}
