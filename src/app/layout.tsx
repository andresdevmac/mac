import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TiendaMac | Reparación de tecnología",
  description: "Servicio técnico especializado en Apple y tecnología: diagnóstico, reparación y seguimiento de equipos.",
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PMQ5ZQD2');` }} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-DX106SFKC2" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DX106SFKC2');` }} />
        {children}
      </body>
    </html>
  );
}
