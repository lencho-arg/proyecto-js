let botonOeste = document.getElementById('oeste')

botonOeste.addEventListener('click',(e)=>{
        e.preventDefault()

        botonOeste = document.createElement('div')
        botonOeste.innerHTML = '<div class="card text-center mt-5"><div class="card-header text-black fw-semibold">Zona Oeste</div><div class="card-body text-white bg-dark"><h5 class="card-title">Que recorrido buscas?</h5><p class="card-text">KM-18 - RAMOS MEJIA - MORENO - CASTELAR.</p><a href="../recorridos.html" class="btn btn-primary">Ver Mapa</a></div><div class="card-footer text-muted text-white fw-semibold">Muchas Gracias</div></div>'
        
        document.getElementById('wey').append(botonOeste)

        
})

let botonEste = document.getElementById('este')

botonEste.addEventListener('click',(e)=>{
        e.preventDefault()

        botonEste = document.createElement('div')
        botonEste.innerHTML = '<div class="card text-center mt-5"><div class="card-header text-black fw-semibold">Zona Este</div><div class="card-body text-white bg-dark"><h5 class="card-title">Que recorrido buscas?</h5><p class="card-text">KM-18 - RAMOS MEJIA - MORENO - CASTELAR.</p><a href="../recorridos.html" class="btn btn-primary">Ver Mapa</a></div><div class="card-footer text-muted text-white fw-semibold">Muchas Gracias</div></div>'
        
        document.getElementById('wey').append(botonEste)

        
})

let botonNorte = document.getElementById('norte')

botonNorte.addEventListener('click',(e)=>{
        e.preventDefault()

        botonNorte = document.createElement('div')
        botonNorte.innerHTML = '<div class="card text-center mt-5"><div class="card-header text-black fw-semibold">Zona Norte</div><div class="card-body text-white bg-dark"><h5 class="card-title">Que recorrido buscas?</h5><p class="card-text">KM-18 - RAMOS MEJIA - MORENO - CASTELAR.</p><a href="../recorridos.html" class="btn btn-primary">Ver Mapa</a></div><div class="card-footer text-muted text-white fw-semibold">Muchas Gracias</div></div>'
        
        document.getElementById('wey').append(botonNorte)

        
})

let botonSur = document.getElementById('sur')

botonSur.addEventListener('click',(e)=>{
        e.preventDefault()

        botonSur = document.createElement('div')
        botonSur.innerHTML = '<div class="card text-center mt-5"><div class="card-header text-black fw-semibold">Zona Sur</div><div class="card-body text-white bg-dark"><h5 class="card-title">Que recorrido buscas?</h5><p class="card-text">KM-18 - RAMOS MEJIA - MORENO - CASTELAR.</p><a href="../recorridos.html" class="btn btn-primary">Ver Mapa</a></div><div class="card-footer text-muted text-white fw-semibold">Muchas Gracias</div></div>'
        
        document.getElementById('wey').append(botonSur)

        
})

let videoInt = document.getElementById('videoInteractivo')

videoInt.addEventListener('click',(e)=>{
        e.preventDefault()

        videoInt = document.createElement('div')
        videoInt.innerHTML = '<div><video src="/images/TravelBoast_2022-07-12_14-31-22.mp4" class="video flex" autoplay alt=""></div>'
        
        document.getElementById('video').append(videoInt)

        
})


// // FETCH

const lista = document.getElementById('dalemen')
fetch('data.json')
.then((resp)=>resp.json())
.then((data)=>{
        data.forEach((producto) => {
                const li = document.createElement('div')
                li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <li>${producto.zona}</li>
                <li>Autobus número: ${producto.autobus.number}</li>
                <li>Conductor: ${producto.autobus.conductor}</li>
                <li>Empresa: ${producto.autobus.empresa}</li>

                <hr/>
                `
                lista.append(li)
        })
})


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

let ingreso = ('este')

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



let recorrido = conocer.filter(x=>x.zona === 'Oeste')
console.log(recorrido)

const [{nombre,autobus:{number,conductor,empresa}}] = conocer
console.log(nombre)
console.log(number,conductor,empresa)

const destru = (item) => {
        const [{nombre,autobus:{conductor}}] = item
        console.log(nombre, conductor)
}

destru(conocer)




