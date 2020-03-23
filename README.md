# React vs Svelte

Armé este repo para comparar una aplicación regular usando React y Svelte

## Características de la aplicación

### Funcionalidad

Es una mini "red social", consta de dos pantallas, una principal con una caja de búsqueda que al ingresar un nombre, devuelve una página que es un Dashboard que consta de tres componentes principales:

- Una barra lateral con datos generales del usuario y una foto de perfil
- Un sector central "CV" enumerando estudios, experiencia laboral y hobbies
- Una lista mostrando los contactos del usuario

### Building blocks

Ambas aplicaciones usan webpack para empaquetar, optimizar y servir la aplicación en desarrollo, ESLint y Stylelint para linting y Babel para parseo.

- En el caso de React, usé React Router para resolver el routing de la aplicación y la API experimental de concurrencia nueva de React (Suspense, lazy) para lazy loading de los componentes
- En el caso de Svelte, usé svelte-spa-router para el routing y svelte-spa-chunk para lazy loading de componentes relacionados con vistas, mientras que usé la API nativa de Svelte para lazy loading de otros componentes

### Optimizaciones

Para hacer una medición equitativa, ambas implementaciones pasan por las mismas optimizaciones a través de webpack.

- Extracción de CSS para que estén en archivos distintos a los JS
- Minificado/Uglificado de JS/CSS,
- Compresión de imágenes con Imagemin
- Compresión de HTML, CSS y JS con Brotli
- Separación de runtime, vendor, main y componentes (usando imports dinámicos para los mismos componentes)

## TODO

[ ] SSR
[ ] Preact
[ ] Stores/Redux/useReducer
[ ] WebComponents (integración o hacer otra app entera con WebComponents)
