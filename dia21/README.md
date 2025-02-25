
# Variables en CSS

Se pueden crear variables de css para reutilizar valores en diferentes partes del codigo.

- mejora la legibilidad del codigo
- Facilita la actualizacion de valores.

Se suelen crear de manera global en la raiz del documento, en web el root es la etiqueta <html>, en svg es la etiqueta <svg>, ademas tiene mayor especificidad ":root" que "html"

[ejemplo Bootstrap](https://getbootstrap.com/docs/4.0/getting-started/theming/#available-variables)

```css
:root {
     --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --mi-color-principal:#fff;
    --mi-color-secundario: #000;
}

.conatiner{
    background-color:var(--mi-color-principal)
}
```