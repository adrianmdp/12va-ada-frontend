const articles = [
   {
      title: "Noticia 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "noticias 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "noticias 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "noticias 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "noticias 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "noticias 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "noticias 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   },
   {
      title: "Noticia 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nemo aliquam necessitatibus harum quasi cupiditate magnam incidunt quos, ex fugiat blanditiis earum consequatur corporis rem reiciendis provident illo consequuntur. Eos."
   }
]








const body = document.getElementById('body');

body.style.backgroundColor = "#EEE"

// const news = document.getElementsByClassName('new');

// const locations = document.querySelectorAll('#locations .location');

// const locations2 = document.querySelectorAll('section[class="news"]');


// console.log(body);
// console.log(news);
// console.log(locations);
// console.log(locations2);

// const storeList = document.querySelector("#stores ul");

// const storesClasses = storeList.classList

// storesClasses.add('border');
// storesClasses.remove('bg-primary');

/**
 * document object
 */
const p = document.createElement('p'); // Creamos un elemento párrafo
const h1 = document.createElement('h1'); // Creamos un elemento h1

// Título de la pagina
const title = document.createElement('h1'); // DOM
const titleText = document.createTextNode('DOM');
title.appendChild(titleText);

// Seccion News
const news = document.createElement('section');
news.classList.add('news');

for(const a of articles) {
   // Crear un articulo
   const article = document.createElement('article');
   // Agregarle clases al articulo
   article.classList.add('new', 'bg-primary');
   // Crear titulo
   const articleTitle = document.createElement('h2');
   // Crear el texto del titulo
   const text = document.createTextNode(a.title);
   // Agregar texto al titulo
   articleTitle.appendChild(text);
   // Agregar articulo a la seccion
   news.appendChild(article);
   // Agregar titulo al articulo
   article.appendChild(articleTitle);
   // Crear elemento parrafo
   const p = document.createElement('p');
   const pText = document.createTextNode(a.text);
   p.appendChild(pText);
   article.appendChild(p);
}


// Seccion Locations
const locations = document.createElement('section');
locations.id = "locations"
locations.classList.add('locations')

// Seccion Stores
const stores = document.createElement('section');
news.classList.add('stores');


body.appendChild(title);
body.appendChild(news);
body.appendChild(locations);
body.appendChild(stores);