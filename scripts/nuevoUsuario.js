document.addEventListener('DOMContentLoaded', function(){



    let formulario = document.getElementById('ejemplillo')
    let valUsuario = document.getElementById('nameVal')
    let valPass = document.getElementById('passVal')
    let boton1 = document.getElementById('formSubmit')

    function laCard(){
    boton1 = document.createElement('div')
    boton1.innerHTML = '<div class="card text-center mt-5"><div class="card-header fw-semibold">Felicitaciones</div><div class="card-body text-white bg-dark"><h5 class="card-title">Bienvenido a BUSCHOICE</h5><p class="card-text">Contamos con el mejor soporte para que veas tus recorridos de micros empresariales.</p><a href="../recorridos.html" class="btn btn-primary">Ir a los Recorridos</a></div><div class="card-footer text-muted text-white fw-semibold">Muchas Gracias</div></div>'
    
    document.getElementById('btnEnviando').append(boton1)

    }

    let validaciones = {valUsuario:false,valPass:false}

    let patron = new RegExp ('^[a-zA-Z\.-_]{1,25}[@]{1}[a-zA-Z]{1,20}[\.]{1}[a-zA-Z]{2,6}')
    
        
        formulario.addEventListener('submit',(evento)=>{
            evento.preventDefault()
           

            let nuevoUsuario = (formulario[0].value)
            let nuevaContrasena = (formulario[1].value)

            let usersLocalStorage = JSON.parse(localStorage.getItem('usuarioRegistrado'))


            valUsuario.innerHTML = ((formulario[0].value||'vacio')==='vacio')?'el nombre no puede estar vacio':''
            valPass.innerHTML = ((formulario[1].value||'vacio')==='vacio')?'el pass no puede estar vacio':''

            let validar = (((formulario[0].value||'vacio')!=='vacio')&&((formulario[1].value||'vacio')!=='vacio'))


            if(nuevoUsuario.match(patron)&&(nuevaContrasena != '')){


                validar && alert('usuario registrado')

    
                localStorage.setItem('usuarioRegistrado', JSON.stringify(nuevoUsuario))

                usersLocalStorage = JSON.parse(localStorage.getItem('usuarioRegistrado'))


                laCard()
                

            }else if(nuevaContrasena === ''){
            
            }else{
                alert('esto no es una direccion de correo valida, debe contener al menos 8 caracteres junto con .-_ sin espacios y un @')
            }
        })

        // boton1.addEventListener('click',()=>{
        //     if(usersLocalStorage){
        //         console.log(usersLocalStorage)
        //     }else if(!usersLocalStorage){
        //         console.log('El localStorage esta vacio')
        //     }
        // })
    
})