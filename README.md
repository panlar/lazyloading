# lazyloading.js 😎🤩

Esta libreria hace la famosa carga lenta (lazyloading), la cual se encarga de cargar la imagen solo cuando es necesario, osea, cuando el elemento entra en el viewport.

### CDN ```jsdelivr```
```
https://cdn.jsdelivr.net/gh/panlar/lazyloading/lazyloading.min.js
```

### Sintaxis

```js
lazyLoading(selectors, mode)
```

### Parametros

#### ```selectors``` (optional)
- ```value : String```
- ```default: 'img'```

Una cadena de texto la cual tiene que ser un selector valido de CSS, selecciona a todos los elementos que coincidan con dicho selector.

#### ```mode``` (optional)
- ```value : String```
- ```default: 'src'```

Una cadena de texto la cual indica el modo en el que cargara la imagen, ya que puede ser una imagen con la etiqueta ```<img>``` y su atributo ```src``` o cualquier elemento HTML y cargarla como fondo en su atributo ```style```.
Puede ser caulquiera de estos dos valores:
- ```src``` : Cargara la imagen en el atributo ```src```.
- ```bg``` : Cargara la imagen como fondo de/los elementos en el atributo ```style``` en la propiedad ```background-image```.


### Ejemplo ```(mode = 'src')```

Antes de seguir con el ejemplo, debes saber que la ```url``` de la imagen debe ir en el atributo ```data-src``` no en ```src``` ya que si es asi la imagen siempre se cargara. **Esto aplica para ambos modos de carga.**

- ```index.html```

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lazy Loading</title>
    <style>
      body {
        padding-top: 200vh;
      }
    </style>
  </head>
  <body>
    <ul>
      <li>
        <img data-src="https://placeimg.com/300/300/any" alt="any" />
      </li>
      <li>
        <img data-src="https://placeimg.com/300/300/people" alt="people" />
      </li>
      <li>
        <img data-src="https://placeimg.com/300/300/tech" alt="tech" />
      </li>
      <li>
        <img data-src="https://placeimg.com/300/300/animals" alt="animals" />
      </li>
    </ul>
  </body>
  <script src="./lazyloading.min.js"></script>
</html>
```

- ```main.js```

```js
lazyLoading();
```

### Ejemplo ```(mode = 'bg')```

- ```index.html```

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Lazy Loading</title>
    <style>
      body {
        padding-top: 200vh;
      }

      div {
        width: 200px;
        height: 200px;
        background-position: center;
        background-size: cover;
      }
    </style>
  </head>
  <body>
    <div class="lazyloading-bg" data-src="https://placeimg.com/300/300/any"></div>
    <div class="lazyloading-bg" data-src="https://placeimg.com/300/300/people"></div>
    <div class="lazyloading-bg" data-src="https://placeimg.com/300/300/tech"></div>
    <div class="lazyloading-bg" data-src="https://placeimg.com/300/300/animals"></div>
  </body>
  <script src="./lazyloading.min.js"></script>
</html>
```

- ```main.js```

```js
lazyLoading('.lazyloading-bg', 'bg');
```
