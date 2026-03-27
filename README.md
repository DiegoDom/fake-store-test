# 🛍️ Fake Store – Mini E-commerce (React)

## 📌 Descripción

Este proyecto consiste en un mini módulo de e-commerce desarrollado con **React + TypeScript** como parte de una prueba técnica.

Permite a los usuarios:

* Visualizar productos desde una API pública
* Consultar el detalle de cada producto
* Agregar productos a un carrito
* Administrar cantidades
* Simular un flujo de compra (checkout)

El enfoque principal fue construir una solución **escalable, optimizada y con buena experiencia de usuario (UX)**.

---

## 🚀 Tecnologías utilizadas

* React + TypeScript
* React Router
* TailwindCSS + DaisyUI
* Context API (estado global)
* Custom Hooks (separación de lógica)

---

## ⚙️ Instalación y ejecución

```bash
# 1. Clonar repositorio
git clone https://github.com/DiegoDom/fake-store-test.git

# 2. Instalar dependencias
yarn install

# 3. Ejecutar proyecto
yarn run dev
```

---

## 📦 Funcionalidades

### 1. Listado de productos

* Consumo de API: https://fakestoreapi.com/products
* Visualización de:

  * Imagen
  * Título
  * Precio
  * Categoría
* Loader durante carga
* Manejo de errores con opción de reintento

---

### 2. Detalle de producto

* Vista completa del producto:

  * Imagen
  * Título
  * Precio
  * Categoría
  * Descripción
* Reutilización de datos cacheados cuando es posible
* Evita llamadas innecesarias a la API

---

### 3. Carrito de compra

* Agregar productos
* Incrementar / disminuir cantidad (+ / -)
* Eliminar productos
* Cálculo de:

  * Total de productos (`totalItems`)
  * Subtotal

Incluye mejoras de UX:

* Stepper (+ / -)
* Input controlado con debounce
* Actualización en tiempo real

---

### 4. Checkout (simulado)

* Resumen del pedido
* Confirmación de compra
* Limpieza del carrito
* Redirección a página de confirmación

---

### 5. Thank You Page

* Confirmación de compra
* Resumen (total de productos y monto)
* Flujo controlado para evitar regresar al checkout

---

## 🔍 Filtros y búsqueda

* Filtro por categoría (derivado dinámicamente de los productos)
* Búsqueda por nombre (con debounce)
* Combinación de filtros (categoría + búsqueda)

---

## ⚡ Optimización y performance

### 🔹 Evitar llamadas innecesarias

* Uso correcto de `useEffect`
* Cache en estado

### 🔹 Estrategia de cache

* Cache en `localStorage`
* TTL (Time To Live)
* Cache por lista (`useProducts`)
* Cache por producto (`useProduct`)

### 🔹 Mejora de rendimiento

* `useMemo` para datos derivados
* `useDebounce` para inputs
* Separación de lógica en hooks

---

## 💾 Persistencia

* Carrito persistido en `localStorage`
* Productos cacheados para mejorar tiempos de carga

---

## 🧠 Decisiones técnicas

### 1. Context API vs Redux

Se eligió Context API por:

* Simplicidad
* Alcance del proyecto
* Facilidad de mantenimiento

---

### 2. Uso de Custom Hooks

Se implementaron hooks para separar responsabilidades:

* `useProducts` → obtención y cache de productos
* `useProduct` → detalle con fallback a cache
* `useProductFilters` → lógica de búsqueda y categorías

Esto permite:

* Componentes más limpios
* Reutilización de lógica
* Mejor mantenibilidad

---

### 3. Estrategia de cache manual

Se implementó cache sin librerías externas para demostrar comprensión de:

* Caching
* Invalidación
* Control de datos

---

### 4. Debounce en inputs

Se utilizó debounce para:

* Evitar renders innecesarios
* Mejorar performance
* Mejorar experiencia de usuario

---

## 🤖 Uso de herramientas de IA

Se utilizaron herramientas de IA como apoyo para:

* Explorar patrones de arquitectura
* Validar estrategias de cache
* Optimizar lógica de hooks

### Ejemplos de prompts:

* "How to implement caching in React hooks?"
* "Best way to avoid unnecessary re-fetch in React?"
* "How to structure a cart system using Context API?"

### Validación:

* Se revisó el código generado
* Se ajustó manualmente la lógica
* Se mejoró la estructura y legibilidad

---

## ⚠️ Consideraciones y trade-offs

* No se implementa backend real (flujo simulado)
* La invalidación del cache es por tiempo (TTL)
* No incluye autenticación ni pagos reales

---

## 🚀 Mejoras futuras

* Ordenamiento (precio, rating)
* Recomendaciones de productos
* Integración con React Query / SWR
* Pruebas unitarias
* Manejo de usuarios / autenticación

---

## 🌎 Nota sobre el idioma

El proyecto está documentado en español para claridad en la evaluación,
sin embargo, se mantuvieron nombres de variables, funciones y conceptos técnicos en inglés,
siguiendo estándares de la industria.

---

## 👨‍💻 Autor

Diego Alberto Domínguez Hernández
