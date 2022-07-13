# Individual Project - laravel inicio

## Objetivos del Proyecto

Descripción de la prueba

La empresa Company INC desea realizar un programa que le permita el registro de sus clientes y una posterior asignación de uno de sus agentes de servicio para la gestión.

Requerimientos del programa

- Registro de clientes (nombres, cedula, celular, dirección, ciudad).
- La ciudad debe tener asociado un departamento
- Creación de API mediante Laravel y consumirlo con React
- El agente se crea previamente en la tabla MySql (cédula agente, nombre)
- Asignación de agente (un proceso simple donde se asigna el agente al cliente) mediante React
- Listar los clientes con su respectivo agente en React
- Las acciones del CRUD para los agentes y clientes, se deben hacer mediante React
- Se debe usar Laravel.
- Sistema de autenticación y registro mediante React

## fin

El proyecto se realiza en laravel, por el momento es el inicio para completar skills en laravel y php en conjunto con react

## Comienza

1.  Forkear el repositorio para poder ejecutarlo desde tu terminal

Tendrán un `boilerplate` con la estructura general tanto del servidor (laravel) como de cliente(react.js)

**IMPORTANTE:** se requiere que tenga intalado xammp, una ver lo tenga ejecute en la base de datos se debe de cambiar por:

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sistema
DB_USERNAME=root
DB_PASSWORD=
```

donde **sitema ** es el nombre de la base de datos que se crea en **_phpMyadmin_**

## Documentacion postman

La idea general es crear una aplicación en la cual se puedan hacer peticiones http, por lo mismo se utiliza postman para ello: [postman](https://documenter.getpostman.com/view/19592464/UzQpx83a)

## Archivo front:

[link de front](https://github.com/kenpulicorre/laravel_front)

## Archivo back:

[link de back](https://github.com/kenpulicorre/laravel_CRUD)
