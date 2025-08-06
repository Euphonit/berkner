"use client";

import { useSidebar } from "@/components/ui/sidebar";
import GridButton from "@/components/grid-button";

export default function Line6Grid() {
  const { open } = useSidebar();
  const sizeval = open ? "size-44" : "size-52";

  return (
    <div className="grid grid-cols-6 gap-2 justify-center pl-3">
      <GridButton
        link="https://drive.google.com/file/d/1MEXOyYaJLa9PBQBjav8orODPRBi7z0zg/view?usp=sharing"
        img="/line/1.png"
        w={1080}
        h={965}
        alt="1"
        size={sizeval}
      />
      <GridButton
        link="https://schools.risd.org/BerknerHS/clubs-and-organizations/"
        img="/line/2.png"
        w={1080}
        h={965}
        alt="2"
        size={sizeval}
      />
      <GridButton
        link="https://docs.google.com/forms/d/e/1FAIpQLSed0ORTVY0a7G9Z8IgtdIrNMBSDsi1wysMeQ6A18p4VFO9rbA/viewform"
        img="/line/3.png"
        w={1080}
        h={965}
        alt="3"
        size={sizeval}
      />
      <GridButton
        link="https://www.canva.com/design/DAFHdBShP9k/TCOgMFsSrWkvjIHqNKEvRg/view?utm_content=DAFHdBShP9k&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
        img="/line/4.png"
        w={1080}
        h={965}
        alt="4"
        size={sizeval}
      />
      <GridButton
        link="https://berknerlibrary.weebly.com/"
        img="/line/5.png"
        w={1080}
        h={965}
        alt="5"
        size={sizeval}
      />
      <GridButton
        link="https://web.risd.org/home/wp-content/uploads/2023/06/Calendar-2023-24_Eng.pdf"
        img="/line/6.png"
        w={1080}
        h={965}
        alt="6"
        size={sizeval}
      />
    </div>
  );
}
