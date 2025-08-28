"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Nav from "./components/nav";
import SideNav from "./components/sideNav";
import { useNavigation } from "@/context";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { navOpen } = useNavigation();

  return (
    <section className="h-screen flex flex-col text-[#3b3f5c]">
      <Nav />
      <div
        className="flex flex-1 overflow-hidden pt-[100px]
      "
      >
        <aside
          className={`shrink-0 shadow-sm print:hidden transition-all duration-500 ease-in-out 
          ${
            navOpen
              ? "w-64 opacity-100 translate-x-0"
              : "w-0 opacity-0 -translate-x-64"
          }`}
        >
          <SideNav />
        </aside>

        {/* Main content gets the scroll */}
        <main className="flex-1 overflow-y-auto md:p-5 p-3 py-7">
          {children}
        </main>
      </div>
    </section>
  );
}
