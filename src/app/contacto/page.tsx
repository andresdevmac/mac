import Link from "next/link";
import { business } from "@/data/business";
export const metadata = { title: "Contacto | TiendaMac", description: "Visita o contacta a TiendaMac." };
export default function ContactPage() { return <main style={{ padding: "80px 24px", fontFamily: "Inter, sans-serif" }}><Link href="/">← TiendaMac</Link><h1>Contacto</h1><p>{business.address}</p></main>; }
