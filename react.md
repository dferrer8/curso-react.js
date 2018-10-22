


## Clases ES6

- Clases vs funciones

- Creamos la clase persona:
  - Campo nombre, por defecto anónimo
  - Método saludar: *¡Hola soy <nombre>!*
- Instanaciamos para comprobar

```js
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi. I am ${this.name}!`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Andrew Mead', 26);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
```

- Añadimos el campo edad, por defecto 0
- Añadimos el método presentar donde diga nombre y edad


## Subclases

- Creamos la clase Estudiante que tiene los siguientes atributos:
  - Nombre
  - Edad
  - Estudio (Informática, Inglés...)

```js
class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}
```


## Ejercicio subclases

- Crea la clase viajero según los requerimientos siguientes:
    - Atributos:
      - Nombre
      - Edad
      - Ciudad de origen
    - Métodos:
      - Saludar, donde diga la ciudad de donde procede.

```js
class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let greeting = super.getGreeting();

    if (this.homeLocation) {
      greeting += ` I am visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const me = new Traveler('Andrew Mead', 26, 'Philadelphia');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere');
console.log(other.getGreeting());
```

## Componentes React

- Dividiremos nuestra interfaz en varios componentes
  - <CervezasView />
  - <Header />
  - <Sidebar />
  - <Menu />
  - <CervezasList />
  - <CervezaSnippet />


```jsx
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Buscador de cervezas</h1>
        <h2>Elige la cerveza que más te guste para ver sus características</h2>
      </div>
    );
  }
}
```

## Contanedores y componentes

- Los contenedores son los que reciben los datos
  - Se encargan de recibir los datos
  - Renderizan componentes (sus hijos), pasándoles las props que necesiten
- Los componentes "son tontos":
  - Reciben unos datos
  - A partir de dichos datos su estado/representación es siempre el mismo.


## Anidar componentes

- El componente View / Page, anidará todos los componentes de la página
- Algunos se utilizarán en alguna otra vista (<Header />, <Menu />...) otros no.


## Propiedades de los componentes

- El componente ***<Header /> se va a utilizar en varias páginas
- Queremos que sea reutilizable
  - El título cambiará para cada página
  - La descripción también

- Utilizando la sintáxis html querríamos algo del tipo:

```jsx
<Header title="miTítulo" subTitle="miSubtítulo" />
```

```jsx
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}
```

## Métodos y eventos

- Al pulsar el botón se debe solicitar vía ajax al servidor los datos necesarios
- Probemos con un alert
- La función ajax se enviará como propiedad (componente más reutilizable) 
  - Podría ser una petición ajax
  - Un filtro sobre los datos que ya hay
  - ....

```class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
```