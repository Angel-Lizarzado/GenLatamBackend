# GenLatam: Backend API & CMS (Headless)

Este repositorio contiene el "Cerebro" del ecosistema GenLatam. Es un servidor backend moderno construido sobre **Strapi v4**, cuya función exclusiva es servir como un Panel de Administración intuitivo para el equipo editorial y proporcionar una API rápida para múltiples interfaces frontend (Arquitectura Multi-Tenant).

## 🧠 ¿Por qué usamos esta arquitectura?

Para garantizar que el equipo de administradores y activistas pueda publicar contenido de forma rápida, segura y sin tocar código.
A diferencia de sistemas monolíticos antiguos (como WordPress), separar el Backend permite:
*   **Velocidad**: Las webs frontend pueden consumir los datos en fracciones de segundo.
*   **Seguridad**: Si una de las webs públicas recibe miles de visitas de golpe (DDoS o picos virales), la base de datos no se cae, porque viven en servidores distintos.
*   **Ecosistema**: Este mismo backend está diseñado para nutrir simultáneamente a **GenLatam**, a **Guarimba Digital** y a **EXIT** bajo el mismo panel de control, aunque cada uno de estos proyectos viva en dominios `.com` separados.

## 📦 Tecnologías Core
*   **Strapi v4**: Framework Node.js Headless CMS.
*   **SQLite / PostgreSQL**: Base de datos de producción (Configurable en el `.env`).
*   **API REST**: Expone endpoints automáticamente y bajo autenticación.

## 🛠 Estructura de Datos Abierta
El equipo que ingresa a `miservidor.com/admin` se encuentra con un panel humanizado dividido lógicamente en:
* `⚙️ Config. Global`
* `💻 Página: Inicio`
* `💻 Página: Servicios`
* `📂 Casos de Éxito`
* `🎙️ Espacio: Guarimba`
* `🎙️ Espacio: EXIT`

## 🚀 Cómo correrlo localmente
Asegúrate de tener Node.js (v18 recomendada) instalado.

1. Instala las dependencias:
   `npm install`
2. Construye el panel inicial:
   `npm run build`
3. Arranca el entorno de desarrollo:
   `npm run develop`

*(Por defecto, Strapi revelará en tu consola la dirección IP local de tu máquina para que puedas ingresar al panel tanto desde tu PC como desde tu teléfono celular).*
