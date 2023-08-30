const endpoint = "https://jsonplaceholder.typicode.com/comments"

const boton = document.querySelector("button")
    
boton.addEventListener('click',()=>{
    console.log("esto está funcionando y escrubo mal");
    consultarApi(endpoint)
    renderizarElementos()
})

function consultarApi (endpoint){

    fetch(endpoint)
    .then(objetoRespuesta => {
        const promiseData = objetoRespuesta.json()
        console.log(promiseData);
        return promiseData
    })
    .then(dataJS => {
        console.log(dataJS);
        renderizarElementos(dataJS)
    })

}


function renderizarElementos(listado){

    const comentarios = document.querySelector(".comentarios")
    comentarios.innerHTML= listado.map(item =>{
        return `<div class="comentario">
                    <h4>${item.email}</h4>
                    <p>${item.body}</p>
                </div>`
    }).join('')

        console.log("los comentarios vienen");


}
 


 //MESA DE TRABAJO

/*  Renderizar el nombre del pokemon desde "https://pokeapi.co/api/v2/pokemon/1"
 Generar un elemento para que se renderizar la imagen
 almacenar los datos el número de "order" en el sesionStorage  */