"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { usePathname } from "next/navigation";
import { Icons } from "@/components/ui/icons";
import { landingMenu } from "@/datas/menus";
import { ScrollArea } from "@/components/ui/scroll-area";

const LandingMobileNavbarMenu = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="p-2 rounded-full bg-secondary/70">
          <Icons.menu className="h-6 w-6 text-primary" />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="">
        <SheetHeader className="mb-[10px]">
          <SheetTitle>
            <Logo size="sm" />
          </SheetTitle>
        </SheetHeader>
        <ScrollArea className="h-full w-full rounded-md pb-5">
          {landingMenu.map((item, index) => (
            <div key={index}>
              {!item.children ? (
                <div className="border-b">
                  <div className="py-4">
                    <Link
                      key={index}
                      href={
                        item.href?.startsWith("#")
                          ? `/${item.href}`
                          : item.href ?? "/"
                      }
                    >
                      <SheetClose asChild>
                        <p className="font-medium">{item.title}</p>
                      </SheetClose>
                    </Link>
                  </div>
                </div>
              ) : (
                <Accordion type="single" collapsible>
                  <AccordionItem value={item.title}>
                    <AccordionTrigger>{item.title}</AccordionTrigger>
                    {item.children.map((subitem: any, index1: any) => (
                      <AccordionContent key={index1}>
                        <Link href={subitem.href}>
                          <SheetClose asChild>
                            <p>{subitem.title}</p>
                          </SheetClose>
                        </Link>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>
              )}
            </div>
          ))}
          <div className="border-b">
            <div className="py-4">
              <Link href="/login">
                <SheetClose asChild>
                  <div className="flex items-center gap-1">
                    <p className="font-medium text-primary">Adopsi Sekarang</p>
                    <Icons.arrowUpRight className="h-6 text-primary" />
                  </div>
                </SheetClose>
              </Link>
            </div>
          </div>
        </ScrollArea>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default LandingMobileNavbarMenu;
