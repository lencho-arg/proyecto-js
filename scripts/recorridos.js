//PREGUNTAR LA ZONA

// let salir 

// let entrada = prompt ("Que zona realizara " + "\n oeste \n este \n norte \n sur")

// if (entrada != "oeste" && entrada != "este" && entrada != "norte" && entrada != "sur"){
//     do {
//         alert("No ingreso zona")
//         entrada = prompt ("Ingresa nuevamente la zona que realizara " + "\n oeste \n este \n norte \n sur")

//     }while (entrada != "oeste" && entrada != "este" && entrada != "norte" && entrada != "sur")

// }
// if (entrada == "oeste"){
//         alert("Ingresando a zona oeste")
// }   else if (entrada == "este"){
//         alert("Ingresando a zona este")
// }   else if (entrada == "norte"){
//         alert("Ingresando a zona norte")
// }   else if (entrada == "sur"){
//         alert("Ingresando a zona sur")
// }


// salir = prompt ("Salir?")

let botonOeste = document.getElementById('oeste')

botonOeste.addEventListener('click',(e)=>{
        e.preventDefault()

        // const userNuevo = ()=>{
        botonOeste = document.createElement('div')
        botonOeste.innerHTML = '<div class="card text-center mt-5"><div class="card-header text-black fw-semibold">Zona Oeste</div><div class="card-body text-white bg-dark"><h5 class="card-title">Que recorrido buscas?</h5><p class="card-text">KM-18 - RAMOS MEJIA - MORENO - CASTELAR.</p><a href="../recorridos.html" class="btn btn-primary">Ver Mapa</a></div><div class="card-footer text-muted text-white fw-semibold">Muchas Gracias</div></div>'
        
        document.getElementById('wey').append(botonOeste)
        // botonOeste.addEventListener('click',userNuevo)

        
})

let botonEste = document.getElementById('este')

botonEste.addEventListener('click',(e)=>{
        e.preventDefault()

        // const userNuevo = ()=>{
        botonEste = document.createElement('div')
        botonEste.innerHTML = '<div class="card text-center mt-5"><div class="card-header text-black fw-semibold">Zona Este</div><div class="card-body text-white bg-dark"><h5 class="card-title">Que recorrido buscas?</h5><p class="card-text">KM-18 - RAMOS MEJIA - MORENO - CASTELAR.</p><a href="../recorridos.html" class="btn btn-primary">Ver Mapa</a></div><div class="card-footer text-muted text-white fw-semibold">Muchas Gracias</div></div>'
        
        document.getElementById('wey').append(botonEste)
        // botonOeste.addEventListener('click',userNuevo)

        
})

let botonNorte = document.getElementById('norte')

botonNorte.addEventListener('click',(e)=>{
        e.preventDefault()

        // const userNuevo = ()=>{
        botonNorte = document.createElement('div')
        botonNorte.innerHTML = '<div class="card text-center mt-5"><div class="card-header text-black fw-semibold">Zona Norte</div><div class="card-body text-white bg-dark"><h5 class="card-title">Que recorrido buscas?</h5><p class="card-text">KM-18 - RAMOS MEJIA - MORENO - CASTELAR.</p><a href="../recorridos.html" class="btn btn-primary">Ver Mapa</a></div><div class="card-footer text-muted text-white fw-semibold">Muchas Gracias</div></div>'
        
        document.getElementById('wey').append(botonNorte)
        // botonOeste.addEventListener('click',userNuevo)

        
})

let botonSur = document.getElementById('sur')

botonSur.addEventListener('click',(e)=>{
        e.preventDefault()

        // const userNuevo = ()=>{
        botonSur = document.createElement('div')
        botonSur.innerHTML = '<div class="card text-center mt-5"><div class="card-header text-black fw-semibold">Zona Sur</div><div class="card-body text-white bg-dark"><h5 class="card-title">Que recorrido buscas?</h5><p class="card-text">KM-18 - RAMOS MEJIA - MORENO - CASTELAR.</p><a href="../recorridos.html" class="btn btn-primary">Ver Mapa</a></div><div class="card-footer text-muted text-white fw-semibold">Muchas Gracias</div></div>'
        
        document.getElementById('wey').append(botonSur)
        // botonOeste.addEventListener('click',userNuevo)

        
})





// (document.getElementById('formID')[0].value)

// let continuar = confirm ("Desea continuar? \nPresione 'Aceptar' para continuar o 'Cancelar' para salir")

// if(continuar == true){
//         salir = 'no'
//         continue
// }else if (continuar == false){
//         salir = 'si'
// }while 



// NUEVO MEN 


// let zona = prompt('que zona elije');

// (zona === 'moron')?alert('aguante el gallo') :alert('puto gil')

// edad = 21
// let puedeTomar = (edad >=21)?'si puede':'que se vaya a casa no puede'
// console.log(puedeTomar)

// let edadEnString
// (num<=17)?edadEnString = 'menor':
// (num>=18 && num<2)?edadEnString = 'joven':
// 26 35 adulto
// 36 55 señor
// edadEnString='mayor'

