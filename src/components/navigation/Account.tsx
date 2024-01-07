import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Account(props: { name: string; picture: string }) {
  return (
    <Link href={"/profile"}>
      <Image
        src={props.picture}
        width={35}
        height={35}
        alt={`${props.name} - picture`}
      />
      <span>{props.name}</span>
    </Link>
  );
}
