let array: string[];

const invertirCaso = (text: string) => {
  array = text.split("");
  console.log(array);
  // [A, d, a,  , L, o, v, e, l, a, c, e]
  for (let i in array) {
    // console.log(i, array[i]);

    if (array[i].match(/[A-Z]/)) {
      array[i] = array[i].toLowerCase();
    } else {
      array[i] = array[i].toUpperCase();
    }
  }
  return array.join("");
};

const invertirCaso2 = (text: string) => {
  array = text.split("");
  const rta: string[] = [];
  // [A, d, a,  , L, o, v, e, l, a, c, e]
  for (let dato of array) {
    // console.log(i, array[i]);
    if (dato.match(/[A-Z]/)) {
      dato = dato.toLowerCase();
    } else {
      dato = dato.toUpperCase();
    }
    rta.push(dato);
  }
  return rta.join("");
};

const invertirCaso3 = (text: string) => {
  let rta: string[] = [];
  for (let i = 0; i < text.length; i++) {
    if (text[i].match(/[A-Z]/)) {
      rta[i] = text[i].toLowerCase();
    } else {
      rta[i] = text[i].toUpperCase();
    }
  }
  return rta.join("");
};

// const rta = invertirCaso("Ada Lovelace"); // 'aDA lOVELACE'
// const rta = invertirCaso2("felIz CumpLe"); // 'FELIZ CUMPLE'
const rta = invertirCaso3("jAvAsCrIpT"); // 'JaVaScRiPt'

console.log(rta);

// const test = "Ada Lovelace";

// console.log(test[4]);
