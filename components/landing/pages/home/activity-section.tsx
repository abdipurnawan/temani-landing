"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import AssetPath from "@/lib/asset-path";
import Image from "next/image";
import * as motion from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const LandingActivitySection = () => {
  return (
    <div className="custom-container py-10 lg:py-20">
      <div className="flex flex-col items-center gap-3">
        <motion.div
          className="text-center lg:text-start"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-col text-center gap-3">
            <h2 className="text-5xl font-bold tracking-tight">
              Aktifitas <span className="text-primary">Menyenangkan</span>
            </h2>
            <h4 className="text-base lg:text-xl font-light text-muted-foreground text-center lg:text-left">
              Mengasah keterampilan anjing untuk kehidupan yang lebih baik
            </h4>
          </div>
        </motion.div>
      </div>

      <ActivityItemList />
    </div>
  );
};

export default LandingActivitySection;

type Activity = {
  id: number;
  title: string;
  description: string;
  imagePath: string;
};

const ActivityItem = React.memo(
  ({
    title,
    description,
    isActive,
    onClick,
    onMouseEnter,
    onMouseLeave,
  }: {
    title: string;
    description: string;
    isActive: boolean;
    onClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }) => {
    return (
      <div
        className={cn(
          "group flex justify-between items-center gap-5 hover:bg-primary rounded-2xl px-6 py-4 transition-all duration-300 cursor-pointer",
          isActive ? "bg-primary text-white" : ""
        )}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="flex-col gap-2">
          <h4
            className={cn(
              "text-base lg:text-xl font-light text-center lg:text-left group-hover:text-white",
              isActive ? "text-white" : ""
            )}
          >
            {title}
          </h4>
          <h4
            className={cn(
              "text-base lg:text-xl font-light text-muted-foreground text-center lg:text-left group-hover:text-white",
              isActive ? "text-white" : ""
            )}
          >
            {description}
          </h4>
        </div>

        <Icons.chevronRight className="h-8 w-8 text-muted-foreground group-hover:text-white hidden lg:block" />
      </div>
    );
  }
);
ActivityItem.displayName = "ActivityItem";

const ActivityItemList = () => {
  const activities: Activity[] = React.useMemo(
    () => [
      {
        id: 1,
        title: "Berkeliling",
        description: "Menjelajahi setiap sudut dengan rasa penasaran.",
        imagePath: AssetPath.getImagePath(`activity-1.png`),
      },
      {
        id: 2,
        title: "Latihan",
        description: "Membangun kepatuhan dan kepercayaan diri sejak dini.",
        imagePath: AssetPath.getImagePath(`activity-2.png`),
      },
      {
        id: 3,
        title: "Bermain",
        description: "Anjing bisa bebas berlari dan bermain dengan aman.",
        imagePath: AssetPath.getImagePath(`activity-3.png`),
      },
      {
        id: 4,
        title: "Bersosialisasi",
        description: "Memperkuat ikatan dan interaksi dengan lingkungan sekitar.",
        imagePath: AssetPath.getImagePath(`activity-4.png`),
      },
    ],
    []
  );

  const [selectedActivityId, setSelectedActivityId] = React.useState<number>(
    activities[0].id
  );
  const [hoveredActivityId, setHoveredActivityId] = React.useState<
    number | null
  >(null);

  const displayedActivityId = hoveredActivityId || selectedActivityId;

  const handleClick = React.useCallback(
    (id: number) => {
      setSelectedActivityId(id);
    },
    [setSelectedActivityId]
  );

  const handleMouseEnter = React.useCallback(
    (id: number) => {
      setHoveredActivityId(id);
    },
    [setHoveredActivityId]
  );

  const handleMouseLeave = React.useCallback(() => {
    setHoveredActivityId(null);
  }, [setHoveredActivityId]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10 mt-7">
      <motion.div
        className="lg:col-span-5"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="flex flex-col gap-2">
          {activities.map((activity) => (
            <ActivityItem
              key={activity.id}
              title={activity.title}
              description={activity.description}
              isActive={
                selectedActivityId === activity.id ||
                hoveredActivityId === activity.id
              }
              onClick={() => handleClick(activity.id)}
              onMouseEnter={() => handleMouseEnter(activity.id)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block relative col-span-7 h-full mt-3 p-10"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div className="relative w-full h-full">
          {activities.map((activity) => (
            <Image
              key={activity.id}
              src={activity.imagePath}
              width={720}
              height={720}
              className={`absolute top-0 left-0 w-full h-full rounded-lg transition-transform duration-500 ${
                displayedActivityId === activity.id
                  ? "z-20 scale-100"
                  : "z-10 scale-90 -translate-y-10"
              }`}
              loading="lazy"
              alt={activity.title}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
