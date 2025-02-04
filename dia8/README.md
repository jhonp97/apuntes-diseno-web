# Día 8

## Formularios


GET => Recibir datos
    POST => Para enviar datos

- Los formularios utilizan las etiquetas envolventes de <form>

- utilizamos etiquetas <input> para ingresar datos. algunos type de ellos eran:
    radio, checkbox, text, email, password, submit

 - todos los <input> REQUIEREN el atributo `name` para enviar la informacion. Este debe ser unico, excepto <input> type="radio"
 - utilizamos otras etiquetas para algunos tipos de datos por eje: <textarea>, <select> + <option>

    -los input suelen estar acompañados de in <label>  como descripcion.



## metodos de GET y POST para enviar informacion

- GET es visible en la URL y POST utiliza el cuerpo de la peticion.

- GET tiene un limite de 2048 caracteres y POST no (se utiliza para enviar informacion de mayor tamaño incluyendo el upload de archivos)

- Normalmente GET se utiliza para obtener informacion y POST para enviarla.

Ejemplos de formularios con GET:
- Buscadores
- Filtros
- paginacion

Ejemplos de formularios con POST:
- Formulario de contacto
- Formulario de login o registro
- Formulario de pago

