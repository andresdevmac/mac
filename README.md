# TiendaMac Web

Sitio comercial y de presentación para TiendaMac, desarrollado con Next.js y React. El proyecto está pensado para mostrar servicios técnicos, precios, información institucional y herramientas de contacto de forma clara, moderna y profesional.

## ✨ Características

- Diseño limpio y orientado a conversión para negocio técnico
- Secciones para servicios, precios, nosotros y contacto
- Estructura modular y fácil de mantener
- Datos editables desde archivos centralizados
- Preparado para desplegarse como sitio comercial moderno

## 🛠️ Tecnologías

- Next.js
- React
- TypeScript
- CSS moderno con enfoque visual personalizado

## 📁 Estructura del proyecto

- `src/app/` — páginas principales del sitio
- `src/components/` — componentes reutilizables
- `src/data/` — contenido editable: precios, servicios y datos del negocio
- `docs/` — documentación y especificaciones de diseño

## ▶️ Inicio rápido

1. Asegúrate de tener Node.js 20 o superior instalado.
2. Copia `.env.example` a `.env.local` y completa los valores necesarios.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```
5. Abre tu navegador en `http://localhost:3000`.

## ✏️ Contenido editable

- Precios y servicios: `src/data/pricing.ts`
- Datos del negocio: `src/data/business.ts`
- Página principal: `src/app/page.tsx`
- Especificación de diseño: `docs/UX-UI-SPEC.md`

## 🚀 Recomendaciones de publicación

Antes de publicar, revisa los datos sensibles o pendientes, reemplaza los valores marcados como `PENDIENTE` y verifica que todos los precios estén alineados con el tarifario vigente.

## 📌 Nota

Este proyecto está orientado a servir como una base sólida para una presencia digital profesional, clara y confiable para el negocio.
