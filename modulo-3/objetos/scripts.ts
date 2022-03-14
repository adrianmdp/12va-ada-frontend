type Inhabitant = {
   id: number
   name: string
   thumbnail: string
   age: number
   weight: number
   height: number
   hair_color: string
   professions: string[]
   friends: string[]
}

const map = (values: any[], callback: (v: any) => any) => {

   const rta: number[] = []

   for(const value of values) {
      const dev = callback(value);
      if(dev) {
         rta.push(dev);
      }
   }

   return rta;

}

// const respuesta = map(inhabitants, (inhabitant: Inhabitant) => {

//    if(inhabitant.age < 200) {
//       return inhabitant
//    }

//    return null

// })

const respuesta = map(inhabitants, (inhabitant: Inhabitant) => {

   inhabitant.friends.push("Hannah");

   return inhabitant;

})

console.log(respuesta)