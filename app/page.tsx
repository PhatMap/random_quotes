import Image from "next/image";
import Board from "./components/Board";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Board />
    </div>
  );
}
