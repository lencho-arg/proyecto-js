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



let empresas=[
        {usu:'Lencina', empresa:'Aerolineas', antiguedad:11},
        {usu:'Pizzini', empresa:'Open English', antiguedad:2}
]

let job = empresas.find(e => e.empresa==='Aerolineas');

console.log(job)

 
const destructurar = (item) => {
        const [{usu,antiguedad}] = item
        console.log(usu, antiguedad)
}

destructurar (empresas)



const zonas = [
        {
                zonaOeste: 'Moron',
                empresa: 'Aerolineas',
                autobus: {
                        numero: 45,
                        chofer: 'Raul'
                }
        },
        {
                zonaEste: 'Congreso',
                empresa:'Nortur'
        },
        {
                zonaNorte: 'Tigre',
                empresa: 'Aerolineas'
        }
]

const [{zonaOeste, autobus:{numero, chofer}}] = zonas
console.log(numero,chofer)

let saber = zonas.filter(zona =>{
        return zona.empresa==='Aerolineas' 
})

console.table(saber)



const conocer = [
        {nombre:'Moron', zona:'Oeste', autobus:{
                number: 64,
                conductor: 'Miguel',
                empresa:'Nortur'
        }},
        {nombre:'Castelar', zona:'Oeste', autobus:{
                number: 23,
                conductor: 'Jose',
                empresa:'Nortur'
        }},
        {nombre:'Ituzaingo', zona:'Oeste', autobus:{
                number: 79,
                conductor: 'Raul',
                empresa:'Tienda Leon'
        }},
        {nombre:'Constitucion', zona:'Este', autobus:{
                number: 17,
                conductor: 'Diego',
                empresa:'Argenbus'
        }},
        {nombre:'Congreso', zona:'Este', autobus:{
                number: 8,
                conductor: 'Andres',
                empresa:'Nortur'
        }},
        {nombre:'Tigre', zona:'Norte', autobus:{
                number: 36,
                conductor: 'Alberto',
                empresa:'Argenbus'
        }},
        {nombre:'Olivos', zona:'Norte', autobus:{
                number: 91,
                conductor: 'Francisco',
                empresa:'Tienda Leon'
        }},
        {nombre:'Quilmes', zona:'Sur', autobus:{
                number: 3,
                conductor: 'Federico',
                empresa:'Nortur'
        }},
        {nombre:'Wilde', zona:'Sur', autobus:{
                number: 33,
                conductor: 'Emiliano',
                empresa:'Tienda Leon'
        }},
]

// let recorrido = conocer.filter(x=>x.zona === 'Oeste')
// console.log(recorrido)

// const [{nombre,autobus:{number,conductor,empresa}}] = conocer
// console.log(nombre)
// console.log(number,conductor,empresa)

// const destru = (item) => {
//         const [{nombre,autobus:{conductor}}] = item
//         console.log(nombre, conductor)
// }

// destru(conocer)


let ingreso = prompt ("Que zona realizara " + "\n oeste \n este \n norte \n sur")

const [a,b,c,d,e,f,g,h,i] = conocer

if(ingreso === 'oeste'){
        console.table(a,b,c)
}else if(ingreso === 'este'){
        console.table(d,e);
}else if(ingreso === 'norte'){
        console.table(f,g)
}else if(ingreso === 'sur'){
        console.table(h,i)
}



const conocer1 = [...conocer]
console.table(conocer1)

// const nombresObj = {...conocer}

// console.log(nombresObj)
