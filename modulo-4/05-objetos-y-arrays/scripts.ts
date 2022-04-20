type Persona = {
    nombre: string;
    apellido: string;
    dni: string;
    fecha_nacimiento: Date;
    es_admin: boolean;
    saldo?: number;
    email?: string;
    phone?: string;
    direccion?: string;
}

const persona: Persona = {
    nombre: "Adrián",
    apellido: "Solimano",
    dni: "30195598",
    fecha_nacimiento: new Date('1983-04-13'),
    es_admin: false,
    saldo: 2000,
    direccion: ""
}

const persona2: Persona = {
    nombre: "Hannah",
    apellido: "",
    dni: "12312312",
    fecha_nacimiento: new Date('2000-04-13'),
    es_admin: true,
}


const unaFuncion = (value: Persona) => {

    console.log(value);

}

// unaFuncion(persona);

const personas: Persona[] = []

personas.push(persona);
personas.push(persona2);

// map, filter, find, some, every

// console.log(inhabitants);

const rta = inhabitants.map((inhabitant) => {
    if(inhabitant.name.includes('ket')) {
        return inhabitant
    }
})

// console.log(rta);

const rta2 = inhabitants.filter((inhabitant) => {
    return inhabitant.name.includes('ket')
})

// console.log(rta2);

const rta3 = inhabitants.find((inhabitant) => {
    return inhabitant.name.includes('ket')
})

// console.log(rta3);

const rta4 = inhabitants.some((inhabitant) => {
    return inhabitant.id === 241
})

// console.log(rta4);

const rta5 = inhabitants.every((inhabitant) => {
   return inhabitant.thumbnail.includes('http')
})

console.log(rta5);

