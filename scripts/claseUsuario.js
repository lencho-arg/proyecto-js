export class User{
    constructor(user,pass){
        this.user=user
        this.pass=pass
        this.new=[]
    }
    validar(usuario, contrasena){
        return (this.user == usuario && this.pass == contrasena)
    }
    saludar = ()=>{
        return `Bienvenido ${this.user}`
    }
}

