class Persona{

    constructor(name, lastName, gender, city, gmail){
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.city = city;
        this.gmail = gmail;
    }

}

class Empleado extends Persona{

    constructor(name, lastName, gender, city, gmail, legajo){
        super(name, lastName, gender, city, gmail)
        this.legajo = legajo;
    }

}

class Cliente extends Persona{

    constructor(name, lastName, gender, city, gmail, numeroCuenta){
        super(name, lastName, gender, city, gmail)
        this.numeroCuenta = numeroCuenta;
    }

}

function getPersona(){

    fetch(`https://randomuser.me/api/`)
    .then(res => res.json())
    .then(data => {

        
        let datos = data.results[0]
        console.log(datos.dob.age)
        if (datos.dob.age> 18) {
        const personarandom = new Empleado(datos.name.first, datos.name.last, datos.gender, datos.location.city, datos.email, datos.location.street.number);
        console.log (personarandom);
        } else {
            const personarandom = new Cliente(datos.name.first, datos.name.last, datos.gender, datos.location.city, datos.email, datos.location.street.number);
            console.log (personarandom);
        }

        

    })

}