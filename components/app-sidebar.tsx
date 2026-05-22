"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import {
  TerminalSquareIcon,
  BotIcon,
  LifeBuoyIcon,
  SendIcon,
  FrameIcon,
  PieChartIcon,
  MapIcon,
  TerminalIcon,
  CalendarDaysIcon,
  CalendarIcon,
  CalendarClockIcon,
  TrophyIcon,
  TrendingUpIcon,
  ListOrderedIcon,
  MonitorIcon,
  StoreIcon,
  LibraryIcon,
  SwordsIcon,
  BrainIcon,
  ScrollIcon,
  CrosshairIcon,
  CompassIcon,
  PuzzleIcon,
  CarIcon,
  DumbbellIcon,
} from "lucide-react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
  {
    title: "New Releases",
    url: "#",
    icon: <TerminalSquareIcon />,
    isActive: true,
    items: [
      { title: "Last 30 days", url: "#", icon: <CalendarDaysIcon /> },
      { title: "This week", url: "#", icon: <CalendarIcon /> },
      { title: "Next week", url: "#", icon: <CalendarClockIcon /> },
      { title: "Release calendar", url: "#", icon: <CalendarIcon /> },
    ],
  },
  {
    title: "Top",
    url: "#",
    icon: <PieChartIcon />,
    items: [
      { title: "Best of the year", url: "#", icon: <TrophyIcon /> },
      { title: "Popular in 2025", url: "#", icon: <TrendingUpIcon /> },
      { title: "All time top 250", url: "#", icon: <ListOrderedIcon /> },
    ],
  },
  {
    title: "Browse",
    url: "#",
    icon: <MapIcon />,
    items: [
      { title: "Platforms", url: "#", icon: <MonitorIcon /> },
      { title: "Stores", url: "#", icon: <StoreIcon /> },
      { title: "Collections", url: "#", icon: <LibraryIcon /> },
    ],
  },
  {
    title: "Genres",
    url: "#",
    icon: <BotIcon />,
    items: [
      { title: "Action", url: "#", icon: <SwordsIcon /> },
      { title: "Strategy", url: "#", icon: <BrainIcon /> },
      { title: "RPG", url: "#", icon: <ScrollIcon /> },
      { title: "Shooter", url: "#", icon: <CrosshairIcon /> },
      { title: "Adventure", url: "#", icon: <CompassIcon /> },
      { title: "Puzzle", url: "#", icon: <PuzzleIcon /> },
      { title: "Racing", url: "#", icon: <CarIcon /> },
      { title: "Sports", url: "#", icon: <DumbbellIcon /> },
    ],
  },
],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: (
        <LifeBuoyIcon
        />
      ),
    },
    {
      title: "Feedback",
      url: "#",
      icon: (
        <SendIcon
        />
      ),
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: (
        <FrameIcon
        />
      ),
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: (
        <PieChartIcon
        />
      ),
    },
    {
      name: "Travel",
      url: "#",
      icon: (
        <MapIcon
        />
      ),
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" render={<a href="#" />}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <TerminalIcon className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Crosshoc</span>
                <span className="truncate text-xs">Discovery</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
