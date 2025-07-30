"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  Settings,
  Monitor,
  Smartphone,
  Search as SearchIcon,
  MessageSquare,
  Headphones,
  Users,
  User,
  HelpCircle,
  LogOut,
  MoreHorizontal,
  Copy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";

const sidebarItems = [
  { title: "Dashboard", icon: Monitor, active: true },
  { title: "Web Development", icon: Monitor },
  { title: "App Development", icon: Smartphone },
  { title: "SEO Services", icon: SearchIcon },
  { title: "SMM Services", icon: MessageSquare },
  { title: "Technical Support", icon: Headphones },
  { title: "CRM", icon: Users },
];

const bottomSidebarItems = [
  { title: "Profile", icon: User },
  { title: "Help & Support", icon: HelpCircle },
  { title: "Settings", icon: Settings },
  { title: "Log Out", icon: LogOut },
];

const Dashboard = () => {
  const recentOrders = [
    { client: "Junaid Sheikh", date: "17 July 2025", service: "SEO Website", status: "Confirmed" },
    { client: "Amir Hassan", date: "17 July 2025", service: "SEO Packages", status: "Confirmed" },
    { client: "Dianne Russell", date: "17 July 2025", service: "iOS App", status: "Processing" },
    { client: "Devon Lane", date: "17 July 2025", service: "Social Media Management", status: "Cancelled" },
  ];

  const recentActivities = [
    {
      message: "Changed the style.",
      time: "Just now",
      status: "Completed",
      color: "green",
    },
    {
      message: "Modified A data in Panel.",
      time: "Today, 11:59 AM",
      status: "In Progress",
      color: "purple",
    },
    {
      message: "Modified A data in Panel.",
      time: "Today, 11:59 AM",
      status: "In Progress",
      color: "purple",
    },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Sidebar */}
        <Sidebar className="border-r">
          <SidebarContent>
            <div className="p-6 border-b">
              <img
                src="/lovable-uploads/6261d696-e0ff-4bd5-b923-79752df3fe68.png"
                alt="VORZA"
                className="h-8"
              />
            </div>

            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        className={item.active ? "bg-blue-50 text-blue-600 font-medium" : ""}
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <div className="mt-auto">
              <SidebarGroup>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {bottomSidebarItems.map((item) => (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton>
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </div>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="border-b bg-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input placeholder="Search" className="pl-9 w-64" />
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-sm">
                  🇺🇸 Eng (US) <ChevronDown className="ml-1 h-3 w-3" />
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">M</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">Musfiq</div>
                    <div className="text-muted-foreground text-xs">Admin</div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-semibold text-foreground">Overview</h1>
              <div className="flex items-center space-x-3">
                <Button variant="ghost" size="sm">Today</Button>
                <Button variant="default" size="sm" className="bg-black text-white">
                  Quick Actions
                </Button>
              </div>
            </div>

            {/* Overview Cards + Sales Overview + Referral */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              {/* Left column */}
              <div className="lg:col-span-3 space-y-6">
                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  {[
                    { title: "Total Revenue", value: "7,265", change: "+11.01%" },
                    { title: "Numbers of Orders", value: "3,671", change: "-0.03%" },
                    { title: "Customer Count", value: "156", change: "+15.03%" },
                    { title: "Active Reseller", value: "2,318", change: "+6.08%" },
                  ].map((card, idx) => (
                    <Card key={idx} className="h-32">
                      <CardContent className="p-2">
                        <div className="text-sm text-muted-foreground mb-1">{card.title}</div>
                        <div className="text-2xl font-bold">{card.value}</div>
                        <div className="text-xs text-green-600">{card.change} ↗</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                

                {/* Sales Overview */}
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Sales Overview</CardTitle>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Daily</Button>
                        <Button variant="ghost" size="sm">Weekly</Button>
                        <Button variant="default" size="sm" className="bg-purple-600 text-white">
                          Monthly
                        </Button>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="h-64 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center">
                      <div className="text-sm text-muted-foreground">Chart visualization would go here</div>
                    </div>
                  </CardContent>
                </Card>
                {/* Recent Orders */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Recent Orders</CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Client</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {recentOrders.map((order, idx) => (
                          <TableRow key={idx}>
                            <TableCell>{order.client}</TableCell>
                            <TableCell>{order.date}</TableCell>
                            <TableCell>{order.service}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  order.status === "Confirmed"
                                    ? "bg-green-100 text-green-800"
                                    : order.status === "Processing"
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-red-100 text-red-800"
                                }
                              >
                                {order.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
              
              

              {/* Right column */}
              <div className="space-y-6">
                {/* Referral Earning */}
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm font-medium">Referral Earning</CardTitle>
                    <div className="text-xs text-muted-foreground">Earn 50% commission on referrals</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="text-xs text-muted-foreground">Your Referrals</div>
                        <div className="text-2xl font-bold text-cyan-600">12</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Your Earnings</div>
                        <div className="text-2xl font-bold text-cyan-600">249</div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-2">Your Referral Link</div>
                      <div className="flex items-center space-x-2">
                        <Input value="https://vorza360.com/join?ref=USR" readOnly className="text-xs" />
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">Share this link to earn 50% of the</div>
                    </div>
                    <div className="space-y-2">
                      <Button variant="link" className="text-xs p-0 h-auto text-cyan-600">Terms & Conditions</Button>
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-xs">INVITE FRIENDS</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm font-medium">Recent Activity</CardTitle>
                    <div className="text-xs text-muted-foreground">The latest updates across your portal</div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentActivities.map((activity, idx) => (
                      <div className="flex items-start space-x-3" key={idx}>
                        <div className={`w-2 h-2 mt-2 rounded-full bg-${activity.color}-500`} />
                        <div>
                          <div className="text-sm">{activity.message}</div>
                          <div className="text-xs text-muted-foreground">{activity.time}</div>
                          <Badge
                            className={`mt-1 ${
                              activity.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : "bg-purple-100 text-purple-800"
                            }`}
                          >
                            {activity.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
    
  );
};

export default Dashboard;
