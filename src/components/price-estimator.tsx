"use client";

import { useMemo, useState } from "react";
import { brands } from "@/data/pricing";
import { whatsappLink } from "@/data/business";
import { Icon } from "./icons";

export function PriceEstimator() {
  const [brandId, setBrandId] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [repairId, setRepairId] = useState("");
  const brand = useMemo(() => brands.find((item) => item.id === brandId), [brandId]);
  const device = useMemo(() => brand?.devices.find((item) => item.id === deviceId), [brand, deviceId]);
  const repair = useMemo(() => device?.repairs.find((item) => item.id === repairId), [device, repairId]);
  const message = `Hola, quiero cotizar ${repair?.name ?? "una reparación"} para ${device?.name ?? "mi equipo"}${brand ? ` ${brand.name}` : ""}.`;

  return <div className="estimator">
    <div className="estimator-fields">
      <label><span>Marca</span><select value={brandId} onChange={(event) => { setBrandId(event.target.value); setDeviceId(""); setRepairId(""); }}><option value="">Selecciona una marca</option>{brands.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
      <label><span>Equipo</span><select disabled={!brand} value={deviceId} onChange={(event) => { setDeviceId(event.target.value); setRepairId(""); }}><option value="">Selecciona tu equipo</option>{brand?.devices.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
      <label><span>Servicio</span><select disabled={!device} value={repairId} onChange={(event) => setRepairId(event.target.value)}><option value="">Selecciona el servicio</option>{device?.repairs.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></label>
    </div>
    <div className="estimate-result" aria-live="polite">
      {repair ? <><div><p className="eyebrow">Resultado</p><h3>{repair.price ? `$${repair.price.toLocaleString("es-CO")}` : "Cotización personalizada"}</h3><p>{repair.price ? `${repair.warranty ?? "Garantía incluida"} · ${repair.duration ?? "Tiempo por confirmar"}` : "Confirma disponibilidad, repuesto y valor final con nuestro equipo."}</p></div><a className="button button-primary" href={whatsappLink(message)} target="_blank" rel="noreferrer">Solicitar cotización <Icon name="arrow" /></a></> : <><div className="result-icon"><Icon name="wrench" /></div><p>Elige marca, equipo y servicio para iniciar una cotización.</p></>}
    </div>
  </div>;
}
