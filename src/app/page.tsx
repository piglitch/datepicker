"use client"

import Image from "next/image";
import Navbar from './_components/Navbar';
import Plans from "./_components/Plans";
import Periods from "./_components/Periods";
import AddTask from "./_components/AddTask";
import { DateContext } from "./_components/_states/DateContext";
import { useState } from "react";

export default function Home() {
  const [date, setDate] = useState('');
  return (
    <main className="flex min-h-screen flex-col justify-between px-12">
      <DateContext.Provider value={{date, setDate}}>
        <AddTask />
        <Periods />
      </DateContext.Provider>
    </main>
  );
}
