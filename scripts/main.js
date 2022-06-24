import * as datos from './modeloDatos.js'

document.addEventListener('DOMContentLoaded', function(){

    let cambiarBg = document.getElementById('fondo')
    let color = ['black']//,'linear-gradient(45deg, #6ea7fd, #69018f)'];

    function btnChanger(){
        // let random = Math.floor(Math.random()*color.length)
        cambiarBg = document.getElementById('container1').style.background = color//[random]
    }

    cambiarBg.addEventListener("click",()=>{
        btnChanger()

        Swal.fire({
            icon: 'success',
            title: 'Cambiaste el fondo',
            showConfirmButton: false,
            timer: 1500
        })

        // Toastify({
        //     text: "Click para ingresar",
        //     duration: 3000,
        //     destination: window.location.href="./recorridos.html"
        // }).showToast();
    })

    let boton1 = document.getElementById('formSubmit')
    
    boton1.addEventListener('click',(evento)=>{
        evento.preventDefault()

        let usuarioEncontrado = (datos.listaUsers).find((elemento)=>(elemento.user).includes(document.getElementById('formID')[0].value))


        if(usuarioEncontrado != undefined){
            let validacion = usuarioEncontrado.validar(document.getElementById('formID')[0].value, document.getElementById('formID')[1].value)

            if((document.getElementById('formID')[0].value) === '' || (document.getElementById('formID')[0].value) === null || (document.getElementById('formID')[0].value) === 'undefined'){
                alert('El campo nombre no puede estar vacio')
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: 'El campo nombre no puede estar vacio',
                //   })
            }else{
                if(document.getElementById('formID')[1].value === '' || document.getElementById('formID')[1].value === null || document.getElementById('formID')[1].value === 'undefined'){
                    alert('El campo password esta vacio')
                    // Swal.fire({
                    //     icon: 'error',
                    //     title: 'Oops...',
                    //     text: 'El campo password esta vacio',
                    //   })
                }
            }

            if(validacion){
                // alert('Bienvenido')
                localStorage.setItem('usuarioRegistrado', JSON.stringify(usuarioEncontrado))

                Swal.fire({
                    icon: 'success',
                    title: 'Cambiaste el fondo',
                    showConfirmButton: false,
                    timer: 1500
                }).then((result) =>{
                    window.location.href="./recorridos.html"
                })

                // window.location.href="./recorridos.html"
      
            }else{
                // alert('Usuario y Contraseña Incorrectos')
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario y Contraseña Incorrectos',
                  })
            }
        }else{
            // alert('No te encontre en la base de datos')
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No te encontre en la base de datos',
              })
            
        }

    })

})
