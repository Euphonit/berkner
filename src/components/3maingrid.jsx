"use client";

import { useSidebar } from "@/components/ui/sidebar";
import GridButton from "@/components/grid-button";

export default function Main3Grid() {
  const { open } = useSidebar();
  const sizeval = open ? "size-50" : "size-58";
  const pxval = open ? "px-4" : "px-5";
  const pyval = open ? "py-1.5" : "py-8";
  const rval = open ? "right-240" : "right-274";

  return (
    <div className={`absolute top-39 ${rval} max-h-screen ${pxval} ${pyval}`}>
      <div className="grid grid-cols-3 gap-2">
        <GridButton
          link="https://myapps.classlink.com/home"
          img="/logos/classlink.png"
          w={256}
          h={256}
          alt="classlink"
          size={sizeval}
        />
        <GridButton
          link="https://www.classroom.google.com"
          img="/logos/classroom.svg"
          w={100}
          h={100}
          alt="google classroom"
          size={sizeval}
        />
        <GridButton
          link="https://www.drive.google.com"
          img="/logos/drive.svg" // Replace with actual path
          w={100}
          h={100}
          alt="google drive"
          size={sizeval}
        />
      </div>
    </div>
  );
}
