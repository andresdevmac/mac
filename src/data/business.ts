export const business = {
  name: "TiendaMac",
  tagline: "Reparamos tecnología. Recuperamos tu tranquilidad.",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "573045717622",
  trackingUrl:
    process.env.NEXT_PUBLIC_TRACKING_URL ??
    "https://soportetecnico.tienda-mac.com/user/login",
  reviewsUrl: "https://share.google/uaULztWeyC3zkC8uj",
  address: "Cra. 2 # 4 -115, CC El Pueblito, local 13",
  mapUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? "",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? ""
};

export const whatsappLink = (message: string) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;
