import Link from "next/link";
export const metadata = { title: "Precios | TiendaMac", description: "Consulta y solicita una cotización para reparar tu equipo." };
export default function PricesPage() { return <main style={{ padding: "80px 24px", fontFamily: "Inter, sans-serif" }}><Link href="/">← TiendaMac</Link><h1>Precios</h1><p>El cotizador inicial está en la página principal. Esta ruta crecerá con páginas indexables por modelo y servicio.</p></main>; }
