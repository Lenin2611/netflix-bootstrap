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

let construirRow = async(file) => {
    let peticion = await fetch(`${file}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonRow');
    seleccion.insertAdjacentHTML('beforeend', /*html*/`
        <div class="col">
            <button id="card1" class="card mb-4 rounded-0 shadow-sm px-0 py-0">
                <div class="card-header py-3 rounded-0" style="background-color: #ef6b71;">
                    <h4 class="my-0 fw-normal text-white">${res.row.titulo1}</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">${res.row.precio1}<small class="text-body-secondary fw-light">${res.row.texto}</small></h2>
                </div>
            </button>
        </div>
        <div class="col">
            <button id="card1" class="card mb-4 rounded-0 shadow-sm px-0 py-0">
                <div class="card-header py-3 rounded-0" style="background-color: #ef6b71;">
                    <h4 class="my-0 fw-normal text-white">${res.row.titulo2}</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">${res.row.precio2}<small class="text-body-secondary fw-light">${res.row.texto}</small></h2>
                </div>
            </button>
        </div>
        <div class="col">
            <button id="card1" class="card border-danger mb-4 rounded-0 shadow-sm px-0 py-0">
                <div class="card-header py-3 rounded-0" style="background-color: #e50914;">
                    <h4 class="my-0 fw-normal text-white">${res.row.titulo3}</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">${res.row.precio3}<small class="text-body-secondary fw-light">${res.row.texto}</small></h2>
                </div>
            </button>`);
}
construirRow("config");

let construirTable = async(file) => {
    let peticion = await fetch(`${file}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonTable');
    seleccion.insertAdjacentHTML('beforeend', /*html*/`
    <table class="table text-center">
        <tbody>
            <tr>
                <th></th>
                <th><p class="uno">Basic</p></th>
                <th><p class="dos">Standard</p></th>
                <th><p class="tres" style="color: #e50914;">Premium</p></th>
            </tr>
        ${res.top.parrafo.map((value) => /*html*/`
            <tr>
                <th scope="row" class="text-start">Video quality</th>
                <td class="uno">Good</td>
                <td class="dos">Better</td>
                <td class="tres" style="color: #e50914;">Best</td>
            </tr>
        </tbody>`).join(' ')}
    </table>`);
}
construirTable("config");