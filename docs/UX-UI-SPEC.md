# TiendaMac — UX/UI specification v1.0

## Propósito

Posicionar a TiendaMac como la opción tecnológica, confiable y visualmente premium para reparar dispositivos en Colombia, con Apple como especialidad y soporte para Samsung, Xiaomi, Oppo, Motorola, Bose, Marshall y consolas.

## Objetivo principal y métricas

1. Elevar la percepción de marca y confianza.
2. Convertir visitas en solicitudes por WhatsApp.
3. Reducir llamadas de seguimiento enviando a la plataforma de reparaciones.
4. Facilitar la consulta inicial de precios.

Métricas sugeridas: clics a WhatsApp, clics a seguimiento, uso del cotizador, solicitudes por servicio y visitas a Maps.

## Usuarios y recorrido principal

| Usuario | Necesidad inmediata | Recorrido |
| --- | --- | --- |
| Dueño de iPhone | Precio y confianza | Inicio → cotizador → WhatsApp |
| Dueño de MacBook | Especialización | Inicio → servicios → WhatsApp |
| Cliente existente | Estado del equipo | Inicio → seguimiento externo |
| Cliente cercano | Ubicación | Inicio → contacto → Google Maps |

## Sitemap

```text
Inicio /
├── Servicios /servicios
│   ├── Apple
│   ├── Smartphones Android
│   ├── Computadores
│   ├── Audio (Bose / Marshall)
│   └── Consolas
├── Precios /precios
├── Seguimiento /seguimiento (redirección externa)
├── Nosotros /nosotros
├── Opiniones /opiniones
├── Contacto /contacto
├── SEO /blog (futuro)
└── Administración /admin (futuro, protegido)
```

## Estructura de la página de inicio

1. **Barra superior:** logo, navegación y acceso directo a seguimiento.
2. **Hero:** promesa de marca, dos acciones prioritarias y composición tecnológica abstracta.
3. **Prueba de confianza:** garantía, diagnóstico y atención especializada. No se muestran estadísticas sin confirmar.
4. **Marcas:** Apple como foco; resto de marcas como cobertura complementaria.
5. **Servicios:** tarjetas por necesidad del cliente.
6. **Cotizador:** marca → modelo → reparación → precio / solicitud. En v1 solo entrega precios verificados; para los demás solicita cotización.
7. **Seguimiento:** salida clara a la plataforma existente.
8. **Reseñas:** enlace verificable a Google; no se inventan citas ni calificaciones.
9. **Contacto:** dirección, WhatsApp, mapa y redes configurables.

## Sistema de diseño

### Color

| Token | Valor | Uso |
| --- | --- | --- |
| Ink | `#0A0A0B` | Texto y fondos oscuros |
| Paper | `#FFFFFF` | Fondo principal |
| Mist | `#F5F5F7` | Superficies suaves |
| Line | `#E5E5E7` | Bordes |
| Slate | `#6E6E73` | Texto secundario |
| Electric blue | `#2563EB` | Acción primaria |
| Azure | `#60A5FA` | Iluminación y degradados |

### Tipografía

`Inter` como fuente de interfaz. Escala: 14 / 16 / 18 / 24 / 32 / 48 / 72 px. Títulos con tracking negativo; cuerpo con interlineado 1.5–1.65.

### Componentes

- Botón primario: azul, texto blanco, radio de 999 px, elevación suave al hover.
- Botón secundario: blanco o transparente, borde gris.
- Tarjeta: fondo blanco, borde `Line`, radio 24 px; hover con sombra tenue.
- Etiqueta: mayúsculas pequeñas, azul o gris.
- Iconos: línea de 1.8 px, monocromáticos.

### Movimiento y accesibilidad

Transiciones 200–400 ms, sin movimiento decorativo esencial. Se respeta `prefers-reduced-motion`. Contraste de texto normal mínimo 4.5:1. Todos los controles incluyen estados de foco visibles.

## Contenido pendiente de validación

- Horario real.
- Enlaces definitivos de Instagram, Facebook y Google Maps.
- Fotos reales del local, equipo técnico y trabajos.
- Precios, garantías y tiempos por modelo.
- Reseñas/citas que puedan publicarse con autorización.

## Evolución técnica

El catálogo de precios usa una capa de datos independiente. En la siguiente etapa, `src/data/pricing.ts` se reemplaza por una API o base de datos y `/admin` gestionará marcas, modelos, reparaciones, vigencia, garantía y precio. El SEO crecerá con páginas estáticas por servicio, marca y ciudad, JSON-LD y un blog editorial.
