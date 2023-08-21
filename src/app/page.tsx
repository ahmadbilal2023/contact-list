"use client";
import { Avatar } from "@nextui-org/react";
import Image from "next/image";
import { contactData } from "./mock";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" shadow-xl ">
        <div className="sticky w-full top-0 bg-orange-300 font-bold text-2xl text-center">
          Contact List
        </div>
        <div className="w-80 h-80 overflow-y-scroll">
          {contactData.map((item) => (
            <Link key={item.id} href={`./contact/${item.id}`}>
              <div className="flex gap-3 items-center pt-3 ml-2">
                <Avatar src={item.image} size="md" />
                <h1>{item.name}</h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
