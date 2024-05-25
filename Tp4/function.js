//Crear los objetos clientes y cuenta_bancaria. (listo)
//Los atributos de cliente son: nombre, apellido, fechaDeNacimiento (DD/MM/AAAA). (listo)
//Los metodos de cuenta_bancaria son: consultar_Saldo, depositar y retirar. (listo)
//Los atributos de cuenta_bancaria son los que consideremos. (listo)
//Deberias poder asignarle una cuenta bancaria a un cliente y tengo que poder hacer los tres metodos. (listo)
//Deberia poder retirar si hay saldo suficiente. (listo)
//Se puede depositar hasta 1.000.  (listo)
//Para poder abrir una cuenta bancaria el cliente tiene que ser mayor de edad. (listo)

class Cliente {
    constructor(nombre, apellido, fechaNacimiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = new Date(fechaNacimiento.split('/').reverse());
    }

    getEdad() {
        const hoy = new Date();
        const anioActual = hoy.getFullYear();
        const mesActual = hoy.getMonth() + 1;
        const diaActual = hoy.getDate() ;

        const anioNacimiento = this.fechaNacimiento.getFullYear();
        const mesNacimiento = this.fechaNacimiento.getMonth() + 1;
        const diaNacimiento = this.fechaNacimiento.getDate() ;

        let edad = anioActual - anioNacimiento;

        if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
            edad--;
        }

        return edad;
    }
}

let cliente = new Cliente("Agustin", "Gomez", "02/05/2003");

console.log(cliente);
console.log(cliente.getEdad());

class Cuenta_bancaria{
    constructor(saldo, id, cliente){

        if (cliente.getEdad() < 18) {
            throw new Error("El cliente debe ser mayor de edad para abrir una cuenta bancaria");
        }

        this.saldo = saldo;
        this.id = id;
        this.cliente = cliente;
   }

   saldoDisponible(){
    return "El saldo disponeble es de " + this.saldo;
   }

   depositar(valorDepositar){
    if (valorDepositar > 1000 || valorDepositar < 0) {
        throw new Error ("No se puede ingresar esa cantidad de monto")
    } 
        this.saldo += Number(valorDepositar);

        return console.log("El saldo depositado fue " + valorDepositar)
   }

   retirar(valorRetirar){
    if (valorRetirar > this.saldo || valorRetirar < 0) {
        throw new Error("No se puede retirar ese monto")
    }
    this.saldo -= valorRetirar;

    return console.log("El saldo retirado fue " + valorRetirar)
   }
 
}

let cuenta = new Cuenta_bancaria(10,1, cliente);

console.log(cuenta);

function consultarSaldo(){
    
    const btnConsultar = document.getElementById("btnConsultar");
    console.log(cuenta.saldoDisponible())
}

function depositarSaldo(){

    const valorDepositar = document.getElementById("valorDepositar").value;

    cuenta.depositar(valorDepositar)
}

function retirarSaldo(){

    const valorRetirar = document.getElementById("valorRetirar").value;

    cuenta.retirar(valorRetirar);
}