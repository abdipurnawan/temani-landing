import React, { useRef } from "react";
import { Button } from "./button";
import { Icons } from "./icons";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StepperHeaderProps = {
  index: number;
  active?: boolean;
  title: string;
};

const StepperHeader = ({
  index,
  active = false,
  title,
}: StepperHeaderProps) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="lg:flex lg:items-center lg:gap-2 hidden">
        <div
          className={cn([
            "rounded-full h-8 w-8 border p-1 transition-all duration-500",
            active ? "border-primary" : "border-muted-foreground/50",
          ])}
        >
          <div
            className={cn([
              "rounded-full w-full h-full transition-all duration-500",
              active ? "bg-primary" : "bg-muted-foreground/50",
            ])}
          ></div>
        </div>
        <div
          className={cn([
            "flex-1 h-1 rounded-3xl transition-all duration-500 ease-in-out",
            active
              ? "bg-gradient-to-r from-primary to-white"
              : "bg-gradient-to-r from-muted-foreground/50 to-white",
          ])}
        ></div>
      </div>

      <div
        className={cn([
          "p-2 w-full flex flex-col gap-2 transition-all duration-100",
          active
            ? "border border-dashed rounded-lg border-muted-foreground/50"
            : "border-none",
        ])}
      >
        <span
          className={cn([
            "text-sm font-thin",
            active ? "text-primary" : "text-muted-foreground/50",
          ])}
        >
          Tahap {index}
        </span>
        <h4 className={cn("text-base lg:text-xl font-medium")}>{title}</h4>
      </div>
    </div>
  );
};

export type StepperItem = {
  index: number;
  title: string;
  content: React.ReactNode;
};

type StepperProps = {
  items: StepperItem[];
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
};

const Stepper = ({ items }: StepperProps) => {
  const activeItemRef = useRef<StepperItem | null>(items[0]);
  const directionRef = useRef<number>(0);

  const [state, setState] = React.useState({});

  const handlePaginate = (newIndex: number, direction: number) => {
    const nextItem = items.find((item) => item.index === newIndex);

    if (nextItem) {
      activeItemRef.current = nextItem;
      directionRef.current = direction;
      setState({});
    }
  };

  const getVisibleItems = () => {
    if (!activeItemRef.current) return [];

    const currentIndex = activeItemRef.current.index;
    const totalItems = items.length;

    let startIndex = Math.max(0, currentIndex - 1);
    let endIndex = Math.min(totalItems - 1, currentIndex + 1);

    // Sesuaikan startIndex dan endIndex agar selalu menampilkan 3 item
    if (endIndex - startIndex + 1 < 3) {
      if (startIndex === 0) {
        endIndex = Math.min(totalItems - 1, 2);
      } else if (endIndex === totalItems - 1) {
        startIndex = Math.max(0, totalItems - 3);
      }
    }

    return items.slice(startIndex, endIndex + 1);
  };

  const visibleItems = getVisibleItems();
  const activeItem = activeItemRef.current!;
  const direction = directionRef.current;

  const handleNext = () => {
    handlePaginate(activeItem.index + 1, 1);
  };

  const handlePrev = () => {
    handlePaginate(activeItem.index - 1, -1);
  };

  return (
    <div className="flex flex-col gap-5 w-full">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-5 overflow-hidden">
        {visibleItems.map((item) => (
          <div
            key={item.index}
            className={`relative group block h-full w-full ${
              item.index !== activeItem.index ? "lg:block hidden" : ""
            }`}
          >
            <StepperHeader
              index={item.index}
              title={item.title}
              active={item.index === activeItem.index}
            />
          </div>
        ))}
      </div>

      {/* content */}
      <div className="">
        <AnimatePresence initial={false} custom={direction}>
          {activeItem && (
            <motion.div
              key={activeItem.index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              transition={{
                x: { type: "spring", stiffness: 500, damping: 30 },
                opacity: { duration: 0.5 },
              }}
            >
              {activeItem.content}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center w-full mt-5">
        <Button
          variant="outline"
          onClick={handlePrev}
          className={cn(["font-light", activeItem.index === 1 && "invisible"])}
        >
          <Icons.chevronLeft className="w-5 h-5 -ml-2 mr-1" />
          Sebelumnya
        </Button>

        <Button
          onClick={handleNext}
          className={cn([
            "font-light",
            activeItem.index === items.length && "invisible",
          ])}
        >
          Selanjutnya
          <Icons.chevronRight className="w-5 h-5 -mr-2 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export { Stepper };
