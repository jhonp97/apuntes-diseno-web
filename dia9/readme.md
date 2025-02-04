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




