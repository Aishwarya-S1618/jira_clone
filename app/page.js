import Image from "next/image";
import CreateTaskModal from "@/components/create-task";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Welcome to SprintCrew</div>
      <CreateTaskModal/>
      <p>Date: 3:00pm 12th April 2024</p>
    </main>
  );
}
