"use client";
import { contactData } from "@/app/mock";
import { Avatar, Card, CardBody } from "@nextui-org/react";
import React from "react";
import Image from "next/image";
function page({ params }: { params: { id: number } }) {
  const data = contactData.filter((e) => e.id == params.id);

  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="flex min-h-screen flex-col items-center justify-between p-24"
        >
          <div>
            <div>
              <Card
                isBlurred
                className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
                shadow="sm"
              >
                <CardBody>
                  <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center justify-center">
                    <div className="relative">
                      <Avatar src={item.image} className="md:w-60 md:h-60 w-20 h-20" />
                    </div>
                    <div className="text-md md:text-3xl font-bold">
                      {item.name}
                      <div>{item.contact}</div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
