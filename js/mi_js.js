'use strict';

const vs = VStreaming.getInstance();
vs.name = 'VStreaming';

function initPopulate() {

    //categorías
    let c01 = new Category('Ciencia Ficción', 'En el espacio nadie puede oirte gritar.'),
        c02 = new Category('Aventura', 'No seguimos mapas del tesoro y la X nunca, pero nunca, marca el lugar.'),
        c03 = new Category('Animación', 'Aunque a veces no lo recordemos, nada de lo que sucede se olvida.'),
        c04 = new Category('Comedia', 'Siempre echa azúcar en el café hasta que hace isla'),
        c05 = new Category('Crimen', 'Que yo recuerde, desde que tuve uso de razón quise ser un gángster'),
        c06 = new Category('Thriller', 'Si vas a parpadear, hazlo ahora.'),
        c07 = new Category('Drama', 'Y empiezo a olvidar. Y ya no sé si es un recuerdo o el recuerdo de un recuerdo lo que me queda.'),
        c08 = new Category('Fantasía', 'Mi abuela me decía que con los faunos hay que andarse con cuidado.'),
        c09 = new Category('Romance', 'Ciclo cardíaco correcto. Pulsaciones un poco altas. Presión arterial normal.'),
        c10 = new Category('Terror', 'Vamos a jugar a un juego...');
    let categorias = [c01, c02, c03, c04, c05, c06, c07, c08, c09];

    //recursos
    let r1 = new Resource(123, 'http://www.pourthethe.zd/r1', ['castellano', 'inglés'], ['castellano', 'inglés']),
        r2 = new Resource(123, 'http://www.pourthethe.zd/r2', ['castellano', 'portugués'], ['castellano', 'inglés']),
        r3 = new Resource(123, 'http://www.pourthethe.zd/r3', ['castellano', 'inglés'], ['castellano', 'inglés']);

    //películas
    let p01 = new Movie('Gattaca', 'EEUU', new Date(1998, 3, 20), 'Ambientada en una sociedad futura, en la que la mayor parte de los niños son concebidos in vitro y con técnicas de selección genética. Vincent (Ethan Hawke), uno de los últimos niños concebidos de modo natural, nace con una deficiencia cardíaca y no le auguran más de treinta años de vida. Se le considera un inválido y, como tal, está condenado a realizar los trabajos más desagradables. Su hermano Anton, en cambio, ha recibido una espléndida herencia genética que le garantiza múltiples oportunidades. Desde niño, Vincent sueña con viajar al espacio, pero sabe muy bien que nunca será seleccionado. Durante años ejerce toda clase de trabajos hasta que un día conoce a un hombre que le proporciona la clave para formar parte de la élite: suplantar a Jerome (Jude Law), un deportista que se quedó paralítico por culpa de un accidente. De este modo, Vincent ingresa en la Corporación Gattaca, una industria aeroespacial, que lo selecciona para realizar una misión en Titán. Todo irá bien, gracias a la ayuda de Jerome, hasta que el director del proyecto es asesinado y la consiguiente investigación pone en peligro los planes de Vincent.', 'https://m.media-amazon.com/images/M/MV5BNDQxOTc0MzMtZmRlOS00OWQ5LWI2ZDctOTAwNmMwOTYxYzlhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg', r1);
    let p02 = new Movie('Interstellar', 'EEUU', new Date(1999, 11, 7), 'Al ver que la vida en la Tierra está llegando a su fin, un grupo de exploradores dirigidos por el piloto Cooper (McConaughey) y la científica Amelia (Hathaway) emprende una misión que puede ser la más importante de la historia de la humanidad: viajar más allá de nuestra galaxia para descubrir algún planeta en otra que pueda garantizar el futuro de la raza humana.', 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg', r3);
    let p03 = new Movie('Forrest Gump', 'EEUU', new Date(1994, 3, 11), 'Forrest Gump (Tom Hanks) sufre desde pequeño un cierto retraso mental. A pesar de todo, gracias a su tenacidad y a su buen corazón será protagonista de acontecimientos cruciales de su país durante varias décadas. Mientras pasan por su vida multitud de cosas en su mente siempre está presente la bella Jenny (Robin Wright), su gran amor desde la infancia, que junto a su madre será la persona más importante en su vida.', 'https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg', r3);
    let p04 = new Movie('La vida es bella', 'Italia', new Date(1997, 8, 17), 'En 1939, a punto de estallar la Segunda Guerra Mundial (1939-1945), el extravagante Guido llega a Arezzo, en la Toscana, con la intención de abrir una librería. Allí conoce a la encantadora Dora y, a pesar de que es la prometida del fascista Rodolfo, se casa con ella y tiene un hijo. Al estallar la guerra, los tres son internados en un campo de exterminio, donde Guido hará lo imposible para hacer creer a su hijo que la terrible situación que están padeciendo es tan sólo un juego', 'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_SX670_AL_.jpg', r3);
    let p05 = new Movie('Your Name', 'Japón', new Date(2016, 1, 3), 'Taki y Mitsuha descubren un día que durante el sueño sus cuerpos se intercambian, y comienzan a comunicarse por medio de notas. A medida que consiguen superar torpemente un reto tras otro, se va creando entre los dos un vínculo que poco a poco se convierte en algo más romántico.', 'https://m.media-amazon.com/images/M/MV5BODRmZDVmNzUtZDA4ZC00NjhkLWI2M2UtN2M0ZDIzNDcxYThjL2ltYWdlXkEyXkFqcGdeQXVyNTk0MzMzODA@._V1_SY1000_SX675_AL_.jpg', r3);
    let producciones = [p01, p02, p03, p04, p05];

    //actores
    let a01 = new Person('Fernando', 'Tejero', 'Muñoz', new Date(1967, 2, 24), 'https://m.media-amazon.com/images/M/MV5BYzNiNWI1YmUtYzljOC00N2U1LWI0NDctODQxZWQ1MzZkZWJiXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg');
    let a02 = new Person('Ethan', 'Hawke', null, new Date(1970, 11, 6), 'https://m.media-amazon.com/images/M/MV5BMTk4NDMxMTI0MF5BMl5BanBnXkFtZTYwMjE3ODE0._V1_UY317_CR5,0,214,317_AL_.jpg');
    let a03 = new Person('Uma', 'Thurman', null, new Date(1970, 4, 29), 'https://m.media-amazon.com/images/M/MV5BMjMxNzk1MTQyMl5BMl5BanBnXkFtZTgwMDIzMDEyMTE@._V1_SY1000_CR0,0,665,1000_AL_.jpg');
    let d01 = new Person('Andrew', 'Niccol', null, new Date(1964, 6, 10), 'https://m.media-amazon.com/images/M/MV5BMTI5ODQ2ODU2M15BMl5BanBnXkFtZTcwNjM2NDg5Mg@@._V1_.jpg');

    let a04 = new Person('Matthew', 'McConaughey', null, new Date(1969, 11, 4), 'https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_SY1000_CR0,0,613,1000_AL_.jpg');
    let a05 = new Person('Anne', 'Hathaway', null, new Date(1982, 11, 12), 'https://m.media-amazon.com/images/M/MV5BNjQ5MTAxMDc5OF5BMl5BanBnXkFtZTcwOTI0OTE4OA@@._V1_SY1000_CR0,0,684,1000_AL_.jpg');
    let d02 = new Person('Christopher', 'Nolan', null, new Date(1970, 7, 30), 'https://m.media-amazon.com/images/M/MV5BNjE3NDQyOTYyMV5BMl5BanBnXkFtZTcwODcyODU2Mw@@._V1_.jpg');

    let a06 = new Person('Tom', 'Hanks', null, new Date(1956, 7, 9), 'https://m.media-amazon.com/images/M/MV5BMTQ2MjMwNDA3Nl5BMl5BanBnXkFtZTcwMTA2NDY3NQ@@._V1_SY1000_CR0,0,691,1000_AL_.jpg');
    let a07 = new Person('Robin', 'Wright', null, new Date(1966, 4, 8), 'https://m.media-amazon.com/images/M/MV5BMTU0NTc4MzEyOV5BMl5BanBnXkFtZTcwODY0ODkzMQ@@._V1_.jpg');
    let d03 = new Person('Robert', 'Zemeckis', null, new Date(1952, 5, 14), 'https://m.media-amazon.com/images/M/MV5BMTgyMTMzMDUyNl5BMl5BanBnXkFtZTcwODA0ODMyMw@@._V1_SY1000_CR0,0,665,1000_AL_.jpg');

    let a08 = new Person('Roberto', 'Benigni', null, new Date(1952, 10, 27), 'https://m.media-amazon.com/images/M/MV5BMTUwMzI1Nzg5NF5BMl5BanBnXkFtZTYwODU5NjYz._V1_.jpg');
    let a09 = new Person('Giorgio', 'Cantarini', null, new Date(1992, 4, 12), 'https://m.media-amazon.com/images/M/MV5BYjdhNTFiYTYtOGE4Ni00NTVjLTlhMGYtYThhNzAxZjUxMmM5XkEyXkFqcGdeQXVyNDM4Nzc5NzY@._V1_SY1000_SX800_AL_.jpg');

    let d04 = new Person('Makoto', 'Shinkai', null, new Date(1973, 2, 9), 'https://m.media-amazon.com/images/M/MV5BN2IxMTg5YmEtMWQ5NC00NDQyLTliOWQtMjkxYTU5NDFmMmQyXkEyXkFqcGdeQXVyMTExNDQ2MTI@._V1_.jpg');

    let a10 = new Person('Steve', 'Carell', null, new Date(1962, 8, 16), 'https://m.media-amazon.com/images/M/MV5BMjMyOTM2OTk1Ml5BMl5BanBnXkFtZTgwMTI3MzkyNjM@._V1_SY1000_CR0,0,669,1000_AL_.jpg');
    let a11 = new Person('Jenna', 'Fischer', null, new Date(1974, 3, 7), 'https://m.media-amazon.com/images/M/MV5BMTMyOTYzODQ5MF5BMl5BanBnXkFtZTcwMjE3MDgzMQ@@._V1_.jpg');
    let a12 = new Person('John', 'Krasinski', null, new Date(1979, 10, 20), 'https://m.media-amazon.com/images/M/MV5BMTc3MzY3MjQ3OV5BMl5BanBnXkFtZTcwODI3NjQxMw@@._V1_.jpg');
    let a13 = new Person('Jennifer', 'Aniston', null, new Date(1969, 2, 11), 'https://m.media-amazon.com/images/M/MV5BNjk1MjIxNjUxNF5BMl5BanBnXkFtZTcwODk2NzM4Mg@@._V1_.jpg');
    let a14 = new Person('Matthew', 'Perry', null, new Date(1969, 8, 19), 'https://m.media-amazon.com/images/M/MV5BMTMwODc5NjI3N15BMl5BanBnXkFtZTcwNDEyMTE3Mw@@._V1_.jpg');
    let a15 = new Person('Mackenzie', 'Davis', null, new Date(1987, 4, 1), 'https://m.media-amazon.com/images/M/MV5BMTc1NTc2NDI4MF5BMl5BanBnXkFtZTgwOTc5NDE5OTE@._V1_.jpg');
    let a16 = new Person('Lee', 'Pace', null, new Date(1979, 3, 25), 'https://m.media-amazon.com/images/M/MV5BMzk2NjE4NDgzNl5BMl5BanBnXkFtZTcwNTI3NTEzMQ@@._V1_.jpg');
    let a17 = new Person('Kerry', 'Bishé', null, new Date(1984, 5, 1), 'https://m.media-amazon.com/images/M/MV5BMjE5ODEyNDYzNF5BMl5BanBnXkFtZTgwMTA1NDU0NzE@._V1_.jpg');

    let actores = [a01, a02, a03, a04, a05, a06, a07, a08, a09, a10, a11, a12, a13, a14, a15, a16, a17];
    let directores = [d01, d02, d03, d04, a08];

    //temporadas y series
    let se1 = new Season('Temporada 01', [{ title: 'El jefe', episode: r1 }]);
    let s1 = new Serie('The Office', 'EEUU', new Date(2005, 11), 'Corrosivo retrato de los miembros de una empresa. Versión americana de una popular serie británica de la BBC del mismo título.', 'https://m.media-amazon.com/images/M/MV5BMjE0YWE2MzMtMTQ4Yi00ODM0LTlhMzAtYTZkM2Q3YzU4OTgyXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SY1000_CR0,0,706,1000_AL_.jpg', se1);
    let s2 = new Serie('Friends', 'EEUU', new Date(1996, 12), ' "Friends" narra las aventuras y desventuras de seis jóvenes de Nueva York. Rachel (Jennifer Aniston), Monica (Courteney Cox), Phoebe (Lisa Kudrow), Ross (David Schwimmer), Chandler (Matthew Perry) y Joey (Matt LeBlanc) forman una unida pandilla de amigos que viven en Manhattan y que suelen reunirse en sus apartamentos o en su bar habitual, el Central Perk. A pesar de los numerosos cambios que se producen en sus vidas, su amistad es inquebrantable en la dura batalla por salir adelante en sus periplos profesionales y personales.', 'https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg');
    let s3 = new Serie('Halt & Catch Fire','EEUU', new Date(2014,6,1), 'Ambientada a principios de los 80, la serie dramatiza el auge de los ordenadores a través de los ojos de un visionario, un ingeniero y un prodigio cuyas innovaciones se enfrentan directamente a los gigantes corporativos de la época.', 'https://m.media-amazon.com/images/M/MV5BMTczNjAyMDg1Nl5BMl5BanBnXkFtZTgwMDQyNTA2OTE@._V1_.jpg', se1);
    producciones.push(s1, s2, s3);

    //cargamos datos en el sistema
    const vs = VStreaming.getInstance();
    vs.name = 'VStreaming';

    categorias.forEach(el => vs.addCategory(el));
    producciones.forEach(el => vs.addProduction(el));
    actores.forEach(el => vs.addActor(el));
    directores.forEach(el => vs.addDirector(el));

    //relacciones
    vs.assignCategory(p01, c01);
    vs.assignCategory(p02, c01);
    vs.assignCategory(p03, c02);
    vs.assignCategory(p04, c02);
    vs.assignCategory(p05, c03);
    vs.assignCategory(p05, c01);
    vs.assignCategory(p03, c04);
    vs.assignCategory(p04, c04);
    vs.assignCategory(p02, c05);
    vs.assignCategory(p02, c06);
    vs.assignCategory(p01, c07);
    vs.assignCategory(p02, c07);
    vs.assignCategory(p04, c07);
    vs.assignCategory(p05, c07);
    vs.assignCategory(p04, c08);
    vs.assignCategory(p05, c08);
    vs.assignCategory(p01, c09);
    vs.assignCategory(p03, c09);
    vs.assignCategory(p05, c09);
    vs.assignCategory(s1, c04);
    vs.assignCategory(s1, c09);
    vs.assignCategory(s2, c04);
    vs.assignCategory(s3, c07);

    vs.assignActor(p01, a01);
    vs.assignActor(p01, a02);
    vs.assignActor(p01, a03);
    vs.assignActor(p02, a01);
    vs.assignActor(p02, a01);
    vs.assignActor(p02, a04);
    vs.assignActor(p02, a05);
    vs.assignActor(p03, a06);
    vs.assignActor(p03, a07);
    vs.assignActor(p04, a08);
    vs.assignActor(p04, a09);
    vs.assignActor(s1, a01);
    vs.assignActor(s1, a10);
    vs.assignActor(s1, a11);
    vs.assignActor(s1, a12);
    vs.assignActor(s2, a01);
    vs.assignActor(s2, a13);
    vs.assignActor(s2, a14);
    vs.assignActor(s3, a15);
    vs.assignActor(s3, a16);
    vs.assignActor(s3, a17);

    vs.assignDirector(p01, d01);
    vs.assignDirector(p02, d02);
    vs.assignDirector(p03, d03);
    vs.assignDirector(p04, a08);
}


function showHomePage() {

    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    let h2 = document.createElement('h2');
    let h2TextNode = document.createTextNode('Categorías del VideoSystem:');
    contenedorPrincipal.appendChild(h2.appendChild(h2TextNode));
    const vs = VStreaming.getInstance();

    //iteramos las categorías
    let categorias = vs.categories;
    let categoria = categorias.next();
    while (categoria.done !== true) {
        let section = document.createElement('section');
        let h3Section = document.createElement('h3');
        let h3SectionTextNode = document.createTextNode(categoria.value._name);
        h3Section.appendChild(h3SectionTextNode);
        let spanH3 = document.createElement('span');
        spanH3.classList.add('badge');
        spanH3.classList.add('badge-secondary');
        let spanH3TextNode = document.createTextNode(categoria.value._description);
        spanH3.appendChild(spanH3TextNode);
        h3Section.appendChild(spanH3);

        let divContainer = document.createElement('div');
        divContainer.classList.add('container-fluid');
        let divRow = document.createElement('div');
        divRow.classList.add('row');
        divRow.classList.add('no-gutters');
        categoria.value.productions.forEach(function (pro) {
            let divCol = document.createElement('div');
            divCol.classList.add('col-4');
            divCol.classList.add('col-md-3');
            divCol.classList.add('col-lg-2');
            let img = document.createElement('img')
            img.classList.add('card-text');
            img.classList.add('img-thumbnail');
            img.setAttribute('src', pro._image);
            img.setAttribute('alt', pro._title);
            divCol.appendChild(img);
            divRow.appendChild(divCol);
        });
        
        divContainer.appendChild(divRow);
        section.appendChild(h3Section);
        section.appendChild(divContainer);
        contenedorPrincipal.appendChild(section);


        categoria = categorias.next();
    }

}

function categoriesMenuPopulate() {

    let navElements = document.querySelectorAll('.nav-item .dropdown-menu');
let divDropdownMenu = navElements[0];
clear(divDropdownMenu);

    //iteramos las categorías
let categorias = vs.categories;
let categoria = categorias.next();
while (categoria.done !== true) {
let a = document.createElement('a');
a.classList.add('dropdown-item');
a.setAttribute('href', '#contenedor-principal');
let aTextNode = document.createTextNode(categoria.value._name);
a.appendChild(aTextNode);
divDropdownMenu.appendChild(a);
categoria = categorias.next();
    }
}

function showActors (){
    let contenedorPrincipal = document.getElementById('contenedor-principal');
    clear(contenedorPrincipal);
    let h2 = document.createElement('h2');
    let h2TextNode = document.createTextNode('Todos los actores:');
    contenedorPrincipal.appendChild(h2.appendChild(h2TextNode));
    
    //iteramos las actores
    let actores = vs.actors;
    let actor = actores.next();
    while (actor.done !== true) {
        let section = document.createElement('section');
        section.setAttribute('width', '300');
        section.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)';
        let imgActor = document.createElement('img');
        imgActor.classList.add('card-text');
        imgActor.classList.add('img-thumbnail');
        imgActor.setAttribute('src', actor.value._picture);
        imgActor.setAttribute('alt',actor.value._name + ' ' + actor.value._lastname1);
        imgActor.setAttribute('width', '300');
        
        
        section.appendChild(imgActor);
        contenedorPrincipal.appendChild(section);
        //hacemos algo con ellos


        actor = actores.next();
}
}

//limpiar el contenido de un elemento
function clear(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

//eventos

document.getElementById('principal').addEventListener('click', showHomePage);



$(document).ready(function () {

    $('#mibtn').popover({ title: "<h5>Contáctanos:<h5>", content: "<a href='mailto:drive.pahesa@gmail.com'>drive.pahesa@gmail.com</a>", html: true, placement: "right" });



});
function init() {
    initPopulate();
    showHomePage();
    categoriesMenuPopulate();
}

window.onload = init;