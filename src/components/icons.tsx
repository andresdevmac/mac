import type { ReactNode, SVGProps } from "react";

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: string }) {
  const paths: Record<string, ReactNode> = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    wrench: <><path d="m14.7 6.3-7.4 7.4a2.1 2.1 0 0 0 3 3l7.4-7.4a4 4 0 0 1-5.3-5.3Z" /><path d="m5 19 2 2" /></>,
    shield: <path d="M12 3 5 6v5c0 5 3 8.5 7 10 4-1.5 7-5 7-10V6l-7-3Z" />,
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7l0-7Z" />,
    phone: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></>,
    laptop: <><rect x="4" y="5" width="16" height="11" rx="1" /><path d="M2 19h20" /></>,
    headphones: <><path d="M4 14v-2a8 8 0 0 1 16 0v2" /><path d="M4 14h3v5H4a2 2 0 0 1-2-2v-1a2 2 0 0 1 2-2Zm16 0h-3v5h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Z" /></>,
    gamepad: <><path d="M6 10h12a4 4 0 0 1 3.8 5.2l-1 3A3 3 0 0 1 16 19.5l-1.5-1H9.5L8 19.5a3 3 0 0 1-4.8-1.3l-1-3A4 4 0 0 1 6 10Z" /><path d="M7 14h4m-2-2v4m6-1h.01M18 14h.01" /></>,
    map: <><path d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" /><path d="M9 3v15m6-12v15" /></>,
    star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />
  };
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
