"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DoorOpenIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function LoginForm() {
  const router = useRouter();
  const [bodylogin, setBodyLogin] = useState({
    email: "jvelozp@est.ups.edu.ec",
    password: "Abc123",
  });

  const loginApi = (email: string, password: string) => {
    console.log("test" + email + password);
    if (email === "jvelozp@est.ups.edu.ec" && password === "Abc123") {
      toast.success("Credenciales correctas");
      router.push("/dashboard");
    } else {
      toast.error("Credenciales incorrectas");
    }
  };

  return (
    <div>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Iniciar Sesión</CardTitle>
          <CardDescription>
            Ingresa tus credenciales para continuar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Correo</Label>
                <Input
                  id="email"
                  type="email"
                  value={bodylogin.email}
                  onChange={(e) =>
                    setBodyLogin({ ...bodylogin, email: e.target.value })
                  }
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Contraseña</Label>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={bodylogin.password}
                  onChange={(e) =>
                    setBodyLogin({ ...bodylogin, password: e.target.value })
                  }
                  required
                />
              </div>
              <Button
                onClick={() => loginApi(bodylogin.email, bodylogin.password)}
                className="w-full"
              >
                <DoorOpenIcon className="w-4 h-4" />
                <span>Iniciar Sesión</span>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="mt-3 text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-primary  ">
        Autor: <a href="#">Joffre Andres Veloz Pazmiño</a>{" "}
      </div>
    </div>
  );
}
