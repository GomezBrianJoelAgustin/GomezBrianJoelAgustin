//Crear los objetos clientes y cuenta_bancaria.
//Los atributos de cliente son: nombre, apellido, fechaDeNacimiento (DD/MM/AAAA).
//Los metodos de cuenta_bancaria son: consultar_Saldo, depositar y retirar.
//Los atributos de cuenta_bancaria son los que consideremos.
//Deberias poder asignarle una cuenta bancaria a un cliente y tengo que poder hacer los tres metodos.
//Deberia poder retirar si hay saldo suficiente.
//Se puede depositar hasta 1.000.
//Para poder abrir una cuenta bancaria el cliente tiene que ser mayor de edad

class Clientes {
    constructor(nonmbre, apellido, fechaDeNacimiento){
        this.nonmbre = nonmbre;
        this.apellido = apellido;
        this.fechaDeNacimiento = fechaDeNacimiento;
    }
}

class Cuenta_Bancaria{
    constructor(saldo, numeroDeCuenta, ){
        this.saldo = saldo;
        this.numeroDeCuenta = numeroDeCuenta;
    }

    set setRetirar(saldo){
        if (this.saldo > saldoRetirado) {
            
        }
    }

    set setDepositar (saldo){
        if (saldo <= 1000) {
            this.saldo = saldo;            
        }else{
            alert("error")
        }
    }

    get getConsultar(){
        return this.saldo;
    }

    
    
}