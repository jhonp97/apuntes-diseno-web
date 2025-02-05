# Día 9

Hacer `un login-form.html` sin estilos enviando informacion al atributo action="#" utilicen "label" y que el usuario y clave sean obligatorios

<form action="./">

- Investigar los siguientes type, explicar que hacen, y crear un ejemplo en `otros-inputs.html`
"number, color, date, file, reset, hidden, range"

Esto es solo para cuando tenemos un formulario que hace upload/carga de archivos
<form method="post" enctype="multipart/form-data">
<input type="file">
</form>

- Nuevas etiquetas/tipos: tel, url, search, time, week, month, datetime-local


# Introduccion a nomenclaturas CSS y BEM

Forma de nombrar nuestras clases de CSS para mantener codigo limpio y ordenado. Buscamos codigo comprensible, predecible y facil de mantener.

## Nombres de variables/selectores/archivos

- UPPERCASE
- lowercase
- Titlle Case
- camelCase:`miClaseDeHtml`
- PascalCase:`MiClaseDeHtml`
- kebab-case: `mi-clase-de-html` (se utliza para nombrar archivos)
- snake_case: `mi_clase_de_html` 

## Nomenclatura BEM (Block-Element-Mofifier)

- [BEM](https://getbem.com/naming)

## Para que?

1. Comunicar un proposito o funcion.
2. Comunicar la estructura del componente.
3. Marca una especificidad baja consistente en la estructura de la pagina.
![especifity](https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fdkerupv5p9lu9k10w5l1.png)


Su nombre es "kebab-case" separando __ para elemento y -- para modificadores

Ejemplo:
.bloque__elemento--modificador

El nombre de clase BEM posee 3 partes:
1. **Bloque**: El nombre del componente, el cual por si solo tiene sentido: card, header, container, button, footer, menu
2. **Elemento**: Dentro de un bloque puede haber uno o mas elementos. Estas partes no tienen sentido por si solo: "menu item", "list item" "header title"
3. **Modificador**: Una variacion o estado diferente para un bloque o element. Que quiere decir que cambia la apariencia o comportamiento del mismo. "xmas", disable, highlighthed, checked, "size big", "color yellow" No olvidemos que si agregamos un modificador la etiqueta debe incluir el nombre del elemento o bloqiue.
ej:
`<div class="footer footer-red"></div>`


<style>
    .card{

    }

    .card__header{}
    .card__content{}
    .card__footer{}
    </style>
<div class="card">
    <div class="card__header">cabecera de la tarjeta</div>
    <div class="card__content">contenido</div>
    <div class="card__footer">footer/pie de trajeta</div>
</div>

<div class="card">
    <div class="card__header">cabecera de la tarjeta</div>
    <div class="card__content">contenido</div>
    <div class="card__footer">footer/pie de trajeta</div>
</div>
<div class="card card--navidad">
    <div class="card__header">cabecera de la tarjeta</div>
    <div class="card__content">contenido</div>
    <div class="card__footer">footer/pie de trajeta</div>
</div>
<div class="card">
    <div class="card__header card__header--xmas">cabecera de la tarjeta</div>
    <div class="card__content">contenido</div>
    <div class="card__footer">footer/pie de trajeta</div>
</div>




