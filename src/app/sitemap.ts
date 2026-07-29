import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://tienda-mac.com";
  return ["", "/servicios", "/precios", "/nosotros", "/contacto"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}
