"use client";
import { getReports } from "@/actions";
import { AppSidebar } from "@/components/app-sidebar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { dateFormat } from "@/lib/dateFormat";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DasboardPage() {
  const [reports, setReports] = useState([]);

  const getReportsApi = async () => {
    const response = await getReports();
    setReports(response.reports);
  };

  useEffect(() => {
    getReportsApi();
  }, []);

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Panel de Control</BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid grid-cols-5 gap-2 py-4">
            {reports.map((report: any) => (
              <Card key={report.id}>
                <Image
                  className="p-2"
                  src={report.url}
                  width={300}
                  height={300}
                  alt={report.url}
                />
                <div className="px-6 pb-2 w-full justify-center items-center mx-auto">
                  <div className="flex space-x-2">
                    <Badge
                      variant={report.type === "SI" ? "outline" : "destructive"}
                    >
                      {report.type === "SI" ? "Negativo" : "Positivo"}
                    </Badge>
                    <div className="text-sm font-semibold">
                      Presión: {report.precision}
                    </div>
                  </div>
                  <div className="text-sm">{dateFormat(report.createdAt)}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
