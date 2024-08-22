"use client";

import * as React from "react";
import AssetPath from "@/lib/asset-path";
import Image from "next/image";
import * as motion from "@/components/ui/motion";
import { Card } from "@/components/ui/card";
import { AnimatePresence, color } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

const LandingDogListSection = () => {
  const dogs = [
    {
      id: 1,
      name: "Mongkegs",
      age: "4 Bulan",
      gender: "Betina",
      color: "Putih - Coklat",
    },
    {
      id: 2,
      name: "Luback",
      age: "7 Bulan",
      gender: "Jantan",
      color: "Bangbungkem",
    },
    {
      id: 3,
      name: "Blecky",
      age: "9 Bulan",
      gender: "Jantan",
      color: "Coklat",
    },
  ];

  let [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <div className="relative bg-primary overflow-hidden">
      <div className="hidden lg:block absolute inset-0 bg-[url('/assets/svg/dog-footprint-pattern.svg')] bg-no-repeat"></div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          className="absolute top-0 left-0"
          src={AssetPath.getSvgPath("dog-footprint-2.svg")}
          alt="Dog Foot Print"
          width={100}
          height={100}
        />
      </motion.div>
      <div className="custom-container-large py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 lg:items-center">
          <div className="col-span-4 flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
                Mereka yang <br />
                siap untuk
                <br /> Keluarga Baru
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h4 className="text-base lg:text-xl font-light text-white">
                Temukan sahabat terbaikmu di sini. <br /> Jadikan hidup lebih
                berwarna.
              </h4>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="w-fit font-light px-3 hover:text-white hover:bg-white hover:bg-opacity-10"
              >
                Lihat Semua Anjing
              </Button>
            </motion.div>
          </div>

          <div className="col-span-8 flex flex-col lg:flex-row w-full gap-5 mt-10 lg:mt-0">
            {dogs.map((dog, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.2 }}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative group block p-2 h-full w-full"
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-[#FDBD00] block rounded-3xl"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>

                <Card className="relative flex-1 p-5">
                  <Image
                    src={AssetPath.getImagePath(`dog-${idx + 1}.png`)}
                    width={720}
                    height={720}
                    alt={dog.name}
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                  <div className="flex flex-col gap-2 mt-3">
                    <h4 className="text-base lg:text-2xl font-semibold">
                      {dog.name}
                    </h4>
                    <div className="flex gap-2">
                      <Icons.calendarClock className="h-5 w-5" />
                      <h4 className="text-base font-normal text-muted-foreground">
                        {dog.age}
                      </h4>
                    </div>
                    <div className="flex gap-2">
                      <Icons.dog className="h-5 w-5" />
                      <h4 className="text-base font-normal text-muted-foreground">
                        {dog.gender}
                      </h4>
                    </div>
                    <div className="flex gap-2">
                      <Icons.pawPrint className="h-5 w-5" />
                      <h4 className="text-base font-normal text-muted-foreground">
                        {dog.color}
                      </h4>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full font-normal border-black px-3 hover:text-white hover:bg-primary hover:border-primary mt-5"
                  >
                    Lihat Detail
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingDogListSection;
