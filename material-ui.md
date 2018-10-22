## Crear aplicación con Material-ui

- Se instala la aplicación mediante _create-react-app_:

```bash
npx create-react-app material-ui-demo
cd material-ui-demo
code .
```

- Ejecutamos _npm start_ para verlo en ejecución
  - Hace _live reload_

## Instalación material-ui

- [Instalamos material-ui según documentación](https://material-ui.com/getting-started/installation/):

```bash
npm install @material-ui/core
npm install @material-ui/icons
```

- Las fuentes mediante [Google Web Fonts](https://fonts.google.com/):

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500">
```

- Si utilizamos font icons (pero mejor usar iconos en svg)

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

## Sustitución del header

- Vamos a eliminar el header que aparece por defecto (fichero _src/App.js_):

```html
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
```

- Eliminamos también las clases que sobran del fichero _src/App.css_:
  - App-logo
  - App-header
  - App-link
  - Y la animación

## Nuevo header

- Utilizaremos el componente App Bar de Material-ui

  - Vamos a [Component Demos](https://material-ui.com/demos/app-bar/)
  - Copiamos el código de la demo más sencilla (Simple App Bar)
  - Creamos fichero Header.js con su contenido (dentro de src)

## Importamos desde App.js

```js
import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
```

## Comprobar funcionamiento

- Eliminamos el código que sobra de Header.js
- Comprobamos visualización
- Resultado fichero _Header.js_:

```js
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Cervezas - Lista de cervezas
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
```

## Header reutilizable

- El título del header está fijo
  - No se puede reutilizar el componente
    - En otra aplicación
    - En otra página del sitio web
- Lo configuraremos como propiedad

## Añadir botón de menú

- Queremos añadir un botón de menú
- Cuando lo pulsemos querremos mostrar o esconder un menú lateral
- Intenta hacerlo a partir del ejemplo [App Bar with buttons](https://material-ui.com/demos/app-bar/)

## Resultado

- Dentro del toolbar, añadimos el botón:

```js
<IconButton color="inherit" aria-label="Menu">
  <MenuIcon />
</IconButton>
```

- Añadimos las librerías correspondientes:

```js
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
```

## Aplicar CSS

- Podemos intentar hacerlo como en casos anteriores:
-
