import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import NoteCard from "../sidebar/notecard";
import Sidebar from "../sidebar/sidebar";
import { NavBreadcrumb } from "./nav-breadcrumb";

export default function Navbar() {
  return (
    <header className="flex h-14 items-center gap-4 border-b bg-gray-50 px-4 lg:h-[60px]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <Sidebar />
          <div className="mt-auto">
            <NoteCard />
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex items-center gap-2 justify-between w-full">
        <NavBreadcrumb />
      </div>
    </header>
  );
}
