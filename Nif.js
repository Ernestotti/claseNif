class Nif {
    constructor(numeroDni){//pasa valores, parametros solo se utiliza aquí
        this._dni = numeroDni
        this._letra = this.calculaLetra();
    }

    get dni(){//retorna valor para utilizarlo
        return this._dni;
    }

    set dni(nuevoNumeroDni){//asignación, no accedes directamente al valor del atributo
        this._dni = nuevoNumeroDni;
        this._letra = this.calculaLetra();

    }

    calculaLetra(){//calcula y devuelve
        let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P',
        'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];
        return letras[this._dni%23]
    }

    mostrar(){
        return `${this._dni}-${this._letra}`
    }
}

let nifJano = new Nif(19010196);
/*console.log(nifJano);
nifJano.dni = 19010197;
console.log(nifJano)*/
console.log(nifJano.mostrar());