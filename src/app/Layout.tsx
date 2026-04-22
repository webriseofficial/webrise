import React from "react";
import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F5F7FA] font-['Poppins',_sans-serif] text-[#4A4A4A] overflow-x-hidden scroll-smooth selection:bg-[#4CAF50]/30 selection:text-gray-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
