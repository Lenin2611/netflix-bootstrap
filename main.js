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
        ${res.row.card.map((value) => /*html*/`
        <div class="col">
            <button id="card1" class="card mb-4 rounded-0 shadow-sm px-0 py-0">
                <div class="card-header py-3 rounded-0" style="background-color: #ef6b71;">
                    <h4 class="my-0 fw-normal text-white">${value.titulo}</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">${value.precio}<small class="text-body-secondary fw-light">${value.texto}</small></h2>
                </div>
            </button>
        </div>`).join(' ')}
        <div class="col">
            <button id="card1" class="card mb-4 rounded-0 shadow-sm px-0 py-0">
                <div class="card-header py-3 rounded-0" style="background-color: #e50914;">
                    <h4 class="my-0 fw-normal text-white">${res.row.titulo}</h4>
                </div>
                <div class="card-body">
                    <h2 class="card-title pricing-card-title">${res.row.precio}<small class="text-body-secondary fw-light">${res.row.texto}</small></h2>
                </div>
            </button>
        </div>`);
}
construirRow("config");

let construirTable = async(file) => {
    let peticion = await fetch(`${file}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonTable');
    seleccion.insertAdjacentHTML('beforeend', /*html*/`
    <div class="table-responsive overflow-hidden mx-auto">
        <table class="table text-center">
            <tbody>
                <tr>
                    <th></th>
                    <th><p class="uno">${res.table.titulo1}</p></th>
                    <th><p class="dos">${res.table.titulo2}</p></th>
                    <th><p class="tres" style="color: #e50914;">${res.table.titulo3}</p></th>
                </tr>
                <tr>
                    <th scope="row" class="text-start">${res.table.inside[0].titulo}</th>
                    <td class="uno">${res.table.inside[0].basic}</td>
                    <td class="dos">${res.table.inside[0].standard}</td>
                    <td class="tres" style="color: #e50914;">${res.table.inside[0].premium}</td>
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <th scope="row" class="text-start">${res.table.inside[1].titulo}</th>
                    <td class="uno">${res.table.inside[1].basic}</td>
                    <td class="dos">${res.table.inside[1].standard}</td>
                    <td class="tres" style="color: #e50914;">${res.table.inside[1].premium}</td>
                </tr>
                <tr>
                    <th scope="row" class="text-start">${res.table.inside[2].titulo}</th>
                    <td><svg class="bi" width="24" height="24"><use xlink:href="${res.table.inside[2].imagen}" /></svg></td>
                    <td><svg class="bi" width="24" height="24"><use xlink:href="${res.table.inside[2].imagen}" /></svg></td>
                    <td><svg style="color: #e50914;" class="bi" width="24" height="24"><use xlink:href="${res.table.inside[2].imagen}"/></svg></td>
                </tr>
            </tbody>
        </table>
    </div>`);
}
construirTable("config");

let construirText = async(file) => {
    let peticion = await fetch(`${file}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonText');
seleccion.insertAdjacentHTML('beforeend', /*html*/`
    <p>${res.text.part1}<a class="text-decoration-none" href="#">${res.text.link1}</a>${res.text.part2}</p>
    <p>${res.text.part3}</p>
    <h3 class="text-center"><a style="background-color: #e50914; padding: 15px 175px;" class="rounded text-decoration-none text-white" href="#">${res.text.link2}</a></h3>`);
}
construirText("config");

let construirFooter = async(file) => {
    let peticion = await fetch(`${file}.json`);
    let res = await peticion.json();
    let seleccion = document.querySelector('#myJsonFooter');
seleccion.insertAdjacentHTML('beforeend', /*html*/`
    <div class="col-12">
    <small class="d-block mb-3 text-body-secondary link-secondary">${res.footer.text}</small><br>
    </div>
    ${res.footer.links.map((value) => /*html*/`
        <div class="col-6 col-md">
            <ul class="list-unstyled text-small">
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.link1}</a></li><br>
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${value.link2}</a></li><br>
            </ul>
        </div>`).join(' ')}
        <div width="20"><select data-uia="language-picker" class="nfSelect rounded-0 px-3 py-2 mb-4" id="lang-switcher-select" name="__langSelect" tabindex="0"><option selected="" label="${res.footer.lang2}" lang="es" value="/signup/planform?locale=es-CO">${res.footer.lang2}</option><option label="${res.footer.lang1}" lang="en" value="/signup/planform?locale=en-CO">${res.footer.lang1}</option></select></>`);
}
construirFooter("config");