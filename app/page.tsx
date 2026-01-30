"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const messages = [
  "Recipes built for cast iron and confidence",
  "Things you should've been taught earlier",
  "Merch you'll actually wear and use",
  "Minimal nonsense, maximum utility",
  "All things Dude Stuff",
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 700);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <main className="flex flex-col items-center justify-center text-center">
        <Image
          src="/dds-logo.png"
          alt="Daily Dude Stuff Logo"
          width={240}
          height={240}
          priority
        />

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-100">
          Daily Dude Stuff
        </h1>

        <h2 className="mt-4 text-2xl font-medium text-zinc-300">Coming Soon</h2>

        <div className="mt-2">
          <p
            className={`text-lg text-zinc-300 transition-opacity duration-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            {messages[index]}
          </p>
        </div>
      </main>
    </div>
  );
}
