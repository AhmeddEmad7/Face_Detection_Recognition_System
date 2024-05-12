import { Outlet, createFileRoute, Link } from "@tanstack/react-router";
import { Bell, ScanFace } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/common/sidebar/sidebar";
import NoteCard from "@/components/common/sidebar/notecard";
import Navbar from "@/components/common/navbar/navbar";

export const Route = createFileRoute("/_layout")({
  component: () => (
    <div className=" min-h-screen w-full">
      <div className="hidden border-r bg-muted/40 h-full max-w-[270px] fixed md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link to="/" className="flex items-center gap-2 font-semibold">
              {/* <img src="/images/logo.svg" className="w-7 h-7" /> */}
              <ScanFace className="h-7 w-7" />
              <span className="text-gray-700">FindMe</span>
            </Link>
            {/* <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button> */}
          </div>
          <div className="flex-1">
            <Sidebar />
          </div>
          <div className="mt-auto p-4">
            <NoteCard />
          </div>
        </div>
      </div>
      <div className="flex-col md:ml-[270px]">
        <div className="border fixed w-full md:w-[calc(100%-270px)]">
          <Navbar />
        </div>
        <div className="pt-16">
          <Outlet />
        </div>
      </div>
    </div>
  ),
});
