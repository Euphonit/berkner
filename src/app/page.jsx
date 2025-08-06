import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GridButton from "@/components/grid-button";
import Line6Grid from "@/components/6linegrid";
import Main3Grid from "@/components/3maingrid";

export default function Home() {
  return (
    <div className="">
      <div>
        <Image
          className="w-full"
          src="/banner.png"
          width={2048} // Adjust to actual width of banner.png
          height={683} // Adjust to actual height of banner.png to maintain aspect ratio
          alt="berkner highschool banner"
        ></Image>
      </div>
      <Main3Grid />
      <div className="p-2">
        <Line6Grid />
      </div>
    </div>
  );
}
