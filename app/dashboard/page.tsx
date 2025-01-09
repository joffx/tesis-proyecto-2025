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
import { toast } from "sonner";

export default function DasboardPage() {
  const [reports, setReports] = useState<any[]>([]);

  const getReportsApi = async () => {
    const response = await getReports();
    setReports(response.reports);
  };

  useEffect(() => {
    // Llamar a la API una vez al cargar el componente
    getReportsApi();

    // Configurar intervalo para llamar a la API cada 10 segundos
    const intervalId = setInterval(() => {
      getReportsApi();
      toast.warning("Se ha actualizado la lista de reportes.");
    }, 10000); // 10000 ms = 10 segundos

    // Limpiar intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
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
          <div className="grid xl:grid-cols-5 grid-cols-1 gap-3 py-4">
            {reports.map((report: any) => (
              <Card key={report.id} className="shadow-xl">
                <Image
                  className="p-2 mx-auto"
                  src={report.url}
                  width={300}
                  height={300}
                  alt={report.url}
                />
                <div className="px-3 pb-2 w-full justify-center items-center mx-auto">
                  <div className="flex space-x-2">
                    <Badge
                      variant={report.type === "SI" ? "outline" : "destructive"}
                    >
                      {report.type === "SI" ? "Negativo" : "Positivo"}
                    </Badge>
                    <div className="text-xs font-semibold m-auto">
                      <span>Similitud:</span>
                      <span>
                        {(parseFloat(report.precision) * 100).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                  <div className="text-xs pt-1.5 mx-auto flex justify-center">
                    {dateFormat(report.createdAt)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
