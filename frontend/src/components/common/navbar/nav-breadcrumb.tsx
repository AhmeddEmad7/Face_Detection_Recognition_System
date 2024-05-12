import {
  Breadcrumb,
  // BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Link, useRouterState } from "@tanstack/react-router";
import { Home } from "lucide-react";

const segmentLookup = {
  "": "Home",
  "face-detection": "Face Detection",
  "face-recognition": "Face Recognition",
  performance: "System Performance",
};

export function NavBreadcrumb() {
  const router = useRouterState();

  const pathSegments = router.location.pathname.split("/") as Array<string>;
  return (
    <Breadcrumb className="flex">
      <BreadcrumbList>
        {pathSegments.map((segment, index) => {
          if (segment === "" && index === 0) {
            return (
              <Link key={index} to="/">
                <Home className="h-4 w-4 text-slate-400" />
              </Link>
            );
          }
          return (
            <BreadcrumbItem key={index}>
              {index < pathSegments.length - 1 ? (
                <>
                  <Link to={pathSegments.slice(0, index + 1).join("/")}>
                    {segmentLookup[segment as keyof typeof segmentLookup]}
                  </Link>{" "}
                  <BreadcrumbSeparator />
                </>
              ) : (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbPage>
                    {segmentLookup[segment as keyof typeof segmentLookup]}
                  </BreadcrumbPage>
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
