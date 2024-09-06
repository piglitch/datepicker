"use client"

import Image from "next/image";
import Navbar from './_components/Navbar';
import Plans from "./_components/Plans";
import Periods from "./_components/Periods";
import AddTask from "./_components/AddTask";
import { Context } from "./_components/_states/Context";
import { useState } from "react";
import { Task } from "./_components/_states/Context";
import TaskList from "./_components/MyTasks";

export default function Home() {
  const [date, setDate] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [reminder, setReminder] = useState<string>('');
  return (
    <main className="flex min-h-screen flex-col justify-between px-12">
      <Context.Provider value={{date, setDate, clicked, setClicked, tasks, setTasks, reminder, setReminder}}>
        <AddTask />
        <TaskList />
      </Context.Provider>
    </main>
  );
}
