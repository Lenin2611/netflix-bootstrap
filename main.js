let construirHeader = async(file) => {
    let peticion = await fetch(`${file}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonHeader');
seleccion.insertAdjacentHTML('beforeend', /*html*/`
    <div class="header d-flex flex-column flex-md-row align-items-center">
        <a href="/" class="d-flex align-items-center text-decoration-none">
            <img width="166" src="${res.header.imagen}" alt="Netflix">
        </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a class="me-3 py-2 text-decoration-none" href="#">${res.header.link}</a>
        </nav>
    </div>`);
}
construirHeader("config");

let construirPircingHeader = async(file) => {
    let peticion = await fetch(`${file}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonPircingHeader');
    seleccion.insertAdjacentHTML('beforeend', /*html*/`
    <p>${res.top.texto}</p>
    <h1 class="text-body-emphasis">${res.top.titulo}</h1>
    <div>
        ${res.top.parrafo.map((value) => /*html*/`
        <svg id="chulo" class="bi" width="30" height="30" style="color: #e50b16;">
            <use xlink:href="${value.imagen}" />
        </svg></td><span class="header-text3">${value.texto}</span><br>`).join(' ')}
    </div>`);
}
construirPircingHeader("config");