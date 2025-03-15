# Too Good To Go - Parcial 1: Danny Muñoz

## Descripcion
Se desarrolla una aplicación web desarrollada con React con el objetivo de  ofrecer una solución para reducir el desperdicio de alimentos. La aplicación permite tiene varias vistas: explorar menús, tiendas.

## Tecnologías Utilizadas

* React: Librería principal para la creación de la interfaz de usuario.

* React Router: Para la navegación entre las diferentes páginas de la aplicación.

* React Bootstrap: Para el diseño y la estructura visual con componentes reutilizables.

* CSS: Para los estilos personalizados de cada página.

## Configuración del Proyecto

1. Clonar 
```
git clone https://github.com/DannyC666/Parcial1-WebReactApp.git
cd Parcial1-WebReactApp
```
2. Instalar Dependencias
```
  npm install
```
3. Ejecutar el Proyecto
```
  npm start
```

Esto iniciará el servidor de desarrollo en http://localhost:3000/.

## Estructura del Proyecto
```
/src
  /components
    /CardDetail.jsx
    /CarouselImages.jsx
    /HomeBtn.jsx
    /InputCard.jsx
  /pages
    /Detail.jsx
    /FormPage.jsx
    /Home.jsx
  /pages/pageStyles
    /Detail.css
    /FormPage.css
    /Home.css
  App.js
  index.js
```
### ` /src/components `
Esta carpeta contiene componentes reutilizables, es decir, elementos que pueden ser usados en varias partes de la web sin estar ligados a una página específica. En general, estos componentes se usan repetitivamente dentro de cada una de las pagina de la aplicacion.

1. `CardDetail.jsx:`  Tarjeta de comida que se usa en varias secciones de detalle.

2. `HomeBtn.jsx:` Botón que se usa en la pantalla principal para redirigir a otras secciones. Se instancia para redirigir a la pagina Menu, Stores, Cart.

3. `CarouselImages.jsx:`  Carrusel de imágenes que puede mostrarse en diferentes páginas de Detail.

4. `InputCard.jsx:` Formulario de inicio de sesión que incluye validaciones para los campos de entrada.

### `/src/pages`
Aquí están las vistas principales de la aplicación, cada una representando una pantalla completa en la navegación.

1. ` Home.jsx`:  Página principal, que contiene la navegacion para cambiar de pagina a Detail segun la opcion que se escoja.

2. ` Detail.jsx`:  Página con detalles de los menús. Es la unica pagina cargada dinamicamente, ya que carga al tiempo a Menu, Stores y a Cart. Por ultimom obtiene datos desde una API usando fetch.

3. ` FormPage.jsx` : Página de inicio de sesión.

## Enrutamiento en `App.js`

Se implementa BrowserRouter de React Router para gestionar la navegación:
``` 
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate to="/login" />}/>
    <Route path="/login" element={<FormPage />} />
    <Route path="/detail" element={<Detail navbarTitle="Default Title" navbarImage="./assets/defaultIcon.svg" />} />
    <Route path="/home" element={<Home />} />
  </Routes>
</BrowserRouter>
```
### Mapeo de Rutas

* `/` → Redirige automáticamente a la página de inicio de sesión (/login).

* `/login` → Muestra el formulario de inicio de sesión (FormPage).

* `/detail` → Página de detalle de alimentos con imágenes en carrusel y tarjetas (Detail).

* `/home` → Página principal con botones de navegación (Home).


## Api usadas
Las dos API utilizadas en el código sirven para obtener datos dinámicos en la pagina `detail.jsx`.

1. API de alimentos `food.json`: Esta API contiene la informacion asociada a un alimento de la app. En este caso, contiene el nombre del producto y la imagen asociada. Esta API se usa sobre  el componente `CardDetail.jsx` y se renderiza sobre la pagina `Detail.jsx`


2. API del carrusel `carouselMock.json`: Se creo una seguna API que solo contenga las imagenes que se van a ver en el carrousel para la pagina `Detail.jsx`. Este JSON solo contiene un campo que corresponde a imagenes y nada mas.

> ⚠ **Nota:** Las imagenes de las API son imagenes aleatorias generadas por Mockaroo. Por esta razon, al renderizar la pagina, solo aparecen imagenes de colores y no imagenes de productos reales.

## Internacionalizacion `src/locales/es.json`
Solo se decidio intenazionalizar el login de la pagina, ya que es el unico lugar de la aplicacion donde hay labels y textos estaticos. Los botones de la pagina home.jsx, tambien pueden ser internacionalizados. Sin embargo, no se decidio internacionalizar, ya que es un componente que tambien cambia su texto por los props que se le pasan.
### Formulario internacionalizado
```
<Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder={intl.formatMessage({ id: "login" })} />
</Form.Group>

<Form.Control type="password" placeholder={intl.formatMessage({ id: "password" })} onChange={handlePasswordChange} value={formValues.password} />{!validationStates.passwordState && <Form.Text className="text-password-warning">Ingrese una contrasena entre 5 y 8 caraceteres </Form.Text>}
```
### Textos internacionalizados
```
<Card.Subtitle className="m-2 text-brand-food">
        <FormattedMessage id="welcome"/>
</Card.Subtitle>
```

## Decisiones y Proceso de Desarrollo

1. **Uso de React Router:** Se decidió utilizar react-router-dom para manejar la navegación de la aplicación sin necesidad de recargar la página.

2. **Estructura Modular:** Se separaron los componentes en la carpeta components y las páginas en pages para una mejor organización.

3. **Uso de Bootstrap:** Se utilizó React Bootstrap para acelerar el desarrollo y proporcionar un diseño atractivo y responsivo.

4. **Uso de APIs:** Se optó por utilizar datos dinámicos obtenidos desde JSON externos para la carga del carrusel y las tarjetas de comida.

5. **Gestión del Estado:** Se usaron useState() y useEffect() para manejar la obtención y actualización de datos de la API.

6. **Validación en Formularios:** Se implementó una validación básica en la contraseña del formulario de inicio de sesión.

