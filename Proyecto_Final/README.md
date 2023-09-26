# Proyecto de ecommerce "Coffee Market" con React

  

Este proyecto tiene como objetivo crear un ecommerce utilizando React + Vite, donde los usuarios puedan ingresar, navegar por los productos y ver sus detalles, agregarlos al carrito y realizar la compra.

  

## Funcionalidades

[Vite-React.webm](https://github.com/emarchelletti/Proyecto_Eloy_React/assets/88469019/0ee37b32-4ce1-46a3-bd40-293f6d46e913)


**- Catálogo de productos:** Los usuarios pueden navegar por los productos disponibles. La lista de productos se obtiene a través de una API de productos.

**- Detalle de productos:** Al hacer clic en un producto, el usuario puede ver la descripción, foto y precio del producto. La información se obtiene a través de una API de detalle de productos.

**- Agregar productos al carrito:** Desde la página de detalle del producto, el usuario puede agregar el producto al carrito haciendo clic en el botón "Agregar al carrito". El producto se agrega al carrito de la sesión actual.

**- Carrito de compras:** Los usuarios pueden ver un listado compacto de la orden con el precio total en la página del carrito de compras. La información se obtiene del carrito de la sesión actual.

**- Realizar compra:** Al ingresar su nombre, apellido, teléfono e e-mail (ingresándolo dos veces para corroborar que sea correcto), se activa el botón de 'finalizar compra'. Al hacer clic en "Finalizar compra", se envía una solicitud a una API. Se guarda la orden en la base de datos y se muestra un número de orden al usuario.

  

## Tecnologías

  

El proyecto se desarrollará utilizando las siguientes tecnologías:

  

- React
- Vite
- HTML
- CSS
- JavaScript
- Node.js
- Firebase


  

## Instalación y uso

  

1. Clonar este repositorio.

1. Instalar las dependencias con `npm install`

1. Iniciar el servidor con `npm start`

1. Acceder a **http://localhost:5173/** en el navegador.
##
Para el correcto funcionamiento, es necesario tener seteadas las variables de entorno en el archivo `.env`. Las variables son:

  

-  `VITE_FIRESTORE_API_KEY`: la API key de Firebase.

-  `VITE_FIRESTORE_AUTH_DOMAIN`: el dominio de autenticación de Firebase.

-  `VITE_FIRESTORE_PROJECT_ID`: el ID del proyecto de Firebase.

-  `VITE_FIRESTORE_STORAGE_BUCKET`: el bucket de almacenamiento de Firebase.

-  `VITE_FIRESTORE_MESSAGING_SENDER_ID`: el ID del sender de Firebase.

-  `VITE_FIRESTORE_APP_ID`: el ID de la aplicación de Firebase.

-  `VITE_FIRESTORE_MEASUREMENT_ID`: el ID de la aplicación para la medicion de datos con Google Analytics.  

## Contribuir

  

Las contribuciones son bienvenidas. Para contribuir, siga estos pasos:

  

1. Hacer un fork del repositorio.

1. Crear una rama con su nueva funcionalidad: **git checkout -b mi-nueva-funcionalidad**

1. Realizar los cambios necesarios y confirmar: **git commit -m "Agrego mi nueva funcionalidad"**

1. Enviar los cambios a su rama: **git push origin mi-nueva-funcionalidad**

1. Abrir un Pull Request en el repositorio original.

  

## Licencia

  

Este proyecto está bajo la licencia MIT.
