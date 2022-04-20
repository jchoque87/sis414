// ---USANDO ASYNC Y AWAIT--- (EN CONSOLA)
async function getImagenes(){
    let urilson= await fetch('https://jsonplaceholder.typicode.com/photos');
    let jsonObj= await urilson.json();
    jsonObj.forEach(row =>{
        console.log(row.title);
        console.log(row.id);
        console.log(row.albumId);
    })
}
console.log(getImagenes());




//OPCION 2 CON INNERHTML Y .THEN
/*
document.getElementById('apiBTN').addEventListener('click', cargar);

function cargar(){
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(function(res){
            return res.json();
        })
        .then(function(imagenes){
            let html = '';

            imagenes.forEach(function(imagen){
                html += `
                    <li>
                        <a target="_blank" href ="${imagen.url}"> Ver Imagen </a>
                        ${imagen.title}
                    </li>
                ` ;
            })
            document.getElementById('resultado').innerHTML = html;
        })
}

*/