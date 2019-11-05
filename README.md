# vuejs-architecture
En este proyecto se ve reflejado una arquitectura para trabajar con el framework VueJs y Vue-router.

# 🎫 Estructura

 - assets
 - components
 - routes
 - store
 - views
 
 app.js
 
 index.html
 
 ## index.html
 
En este archivo es donde estará corriendo toda la aplicación de principio a fin. Además, es donde se deben llamar a los *Componentes*, *Vistas* y otros recursos necesarios para que la aplicación funcione.
 
 `Nota: al crear un nuevo componente o vista se debe relacionar en este archivo. `

## routes/main.js

En este archivo es donde se deben declarar todas las rutas que tendrá el aplicativo. Se deben declarar de la siguiente manera: 
```js
{
    path: '/', //No se debe repetir.
    component: IndexView, //Aqui va la variable que contiene la vista.
    name: 'index' //Nombre clave para realizar redirecciones.
},
```

Todas estas rutas deben ir en la variable `routes` el cual es un arreglo que se pasa a `VueRouter` para el manejo de la navegación tipo SPA.

## store/main.js

En este archivo se declaran las variables y funciones globales, principalmente se utilizan para validar si el usuario ha iniciado sesión.

# 🧮 Componentes

A la hora de crear un componente tenga en cuenta que de crearlo en la carpeta `components/`, una vez creado se debe realizar el llamado en el archivo `index.html` para poderlo utilixar:

```html
<script src="components/navbar.js"></script>
```






© Kevin Galindo - 👦

Creditos a https://github.com/ofaaoficial 
