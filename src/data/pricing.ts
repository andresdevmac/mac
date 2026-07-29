export type Repair = {
  id: string;
  name: string;
  price?: number;
  warranty?: string;
  duration?: string;
};

export type Device = { id: string; name: string; repairs: Repair[] };
export type Brand = { id: string; name: string; focus?: boolean; devices: Device[] };

// Reemplaza o amplía estos ejemplos con el tarifario aprobado.
// Un servicio sin `price` muestra una solicitud de cotización en vez de una cifra.
export const brands: Brand[] = [
  {
    id: "apple",
    name: "Apple",
    focus: true,
    devices: [
      { id: "iphone", name: "iPhone", repairs: [{ id: "screen", name: "Cambio de pantalla" }, { id: "battery", name: "Cambio de batería" }, { id: "charge", name: "Puerto de carga" }, { id: "diagnostic", name: "Diagnóstico" }] },
      { id: "macbook", name: "MacBook", repairs: [{ id: "diagnostic", name: "Diagnóstico" }, { id: "battery", name: "Cambio de batería" }, { id: "screen", name: "Pantalla" }, { id: "data", name: "Recuperación de datos" }] },
      { id: "ipad", name: "iPad", repairs: [{ id: "screen", name: "Cambio de pantalla" }, { id: "battery", name: "Cambio de batería" }, { id: "diagnostic", name: "Diagnóstico" }] }
    ]
  },
  { id: "samsung", name: "Samsung", devices: [{ id: "galaxy", name: "Galaxy", repairs: [{ id: "screen", name: "Cambio de pantalla" }, { id: "battery", name: "Cambio de batería" }, { id: "charge", name: "Puerto de carga" }, { id: "diagnostic", name: "Diagnóstico" }] }] },
  { id: "xiaomi", name: "Xiaomi", devices: [{ id: "xiaomi-phone", name: "Smartphone Xiaomi", repairs: [{ id: "screen", name: "Cambio de pantalla" }, { id: "battery", name: "Cambio de batería" }, { id: "diagnostic", name: "Diagnóstico" }] }] },
  { id: "oppo", name: "Oppo", devices: [{ id: "oppo-phone", name: "Smartphone Oppo", repairs: [{ id: "screen", name: "Cambio de pantalla" }, { id: "battery", name: "Cambio de batería" }, { id: "diagnostic", name: "Diagnóstico" }] }] },
  { id: "motorola", name: "Motorola", devices: [{ id: "moto-phone", name: "Smartphone Motorola", repairs: [{ id: "screen", name: "Cambio de pantalla" }, { id: "battery", name: "Cambio de batería" }, { id: "diagnostic", name: "Diagnóstico" }] }] },
  { id: "bose", name: "Bose", devices: [{ id: "bose-audio", name: "Audio Bose", repairs: [{ id: "diagnostic", name: "Diagnóstico" }, { id: "battery", name: "Batería" }] }] },
  { id: "marshall", name: "Marshall", devices: [{ id: "marshall-audio", name: "Audio Marshall", repairs: [{ id: "diagnostic", name: "Diagnóstico" }, { id: "battery", name: "Batería" }] }] },
  { id: "consoles", name: "Consolas", devices: [{ id: "console", name: "Consola", repairs: [{ id: "diagnostic", name: "Diagnóstico" }, { id: "power", name: "Revisión de encendido" }, { id: "maintenance", name: "Mantenimiento" }] }] }
];
