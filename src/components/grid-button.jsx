import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function GridButton({ link, img, w, h, alt, size }) {
  return (
    <Link href={link} rel="noopener noreferrer" target="_blank">
      <Button className={size}>
        <Image
          src={img}
          width={w}
          height={h}
          alt={alt}
          className="w-full h-full object-contain"
        ></Image>
      </Button>
    </Link>
  );
}
