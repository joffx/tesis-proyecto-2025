import { GalleryVerticalEnd } from "lucide-react";
import Image from "next/image";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Image src={"/logoups.svg"} alt={"logoups"} width={150} height={150} className="mx-auto" />
        <a
          href="/"
          className="flex items-center gap-2 font-semibold text-center"
        >
          “DESARROLLO DE UN SISTEMA DE ALARMA Y DETECCIÓN INTELIGENTE DE ARMAS
          DE FUEGO MEDIANTE ANÁLISIS DE VIDEO CON TECNOLOGÍA IOT”
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
