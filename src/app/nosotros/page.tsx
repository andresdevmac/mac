import Link from "next/link";
export const metadata = { title: "Nosotros | TiendaMac", description: "Conoce el enfoque técnico de TiendaMac." };
export default function AboutPage() { return <main style={{ padding: "80px 24px", fontFamily: "Inter, sans-serif" }}><Link href="/">← TiendaMac</Link><h1>Nosotros</h1><p>Próxima sección editorial: historia, proceso técnico y equipo de TiendaMac.</p></main>; }
