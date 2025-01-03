"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  BarChart3,
  Cloud,
  Newspaper,
  TrendingUp,
  Layout,
  Github,
  Film,
} from "lucide-react";

const routes = [
  {
    label: "Dashboard",
    icon: Layout,
    href: "/",
  },
  {
    label: "Weather",
    icon: Cloud,
    href: "/weather",
  },
  {
    label: "News",
    icon: Newspaper,
    href: "/news",
  },
  {
    label: "Finance",
    icon: TrendingUp,
    href: "/finance",
  },
  {
    label: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "/github",
  },
  {
    label: "Movies",
    icon: Film,
    href: "/movies",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-muted/50 border-r">
      <div className="px-3 py-2">
        <Link href="/" className="flex items-center pl-3 mb-14">
          <h1 className="text-2xl font-bold">Analytics</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                pathname === route.href ? "text-primary bg-primary/10" : "text-muted-foreground"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className="h-5 w-5 mr-3" />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}