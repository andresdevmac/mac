import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TiendaMac | Reparación de tecnología",
  description: "Servicio técnico especializado en Apple y tecnología: diagnóstico, reparación y seguimiento de equipos.",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
