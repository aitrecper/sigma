// Lista animales
export type Animal = {
    id: number,
    nombre: string,
    edad: number,
    genero: string
}
export type ListaAnimales = Animal[];


export function setAnimalById(id: number, animal: Animal): void {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    // Innecesario
    // interface FormValues {
    //     nombre: string;
    //     tipo: string;
    //     edad: number;
    //     raza: string;
    // }

    // // Definimos los valores iniciales del formulario
    // const initialFormValues: FormValues = {
    //     nombre: "Miguel",
    //     tipo: "asds",
    //     edad: 0,
    //     raza: "",
    // };

    const raw = JSON.stringify(animal);

    const requestOptions: RequestInit = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    try {
        fetch(`http://localhost:8080/api/animales/${id}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    } catch (error) {
        console.error(error);
    }
}

export async function getAnimals(): Promise<ListaAnimales | undefined> {
    let animales: ListaAnimales | undefined;


    try {
        const response = await fetch("http://localhost:8080/api/animales");
        const data = await response.json();
        animales = data;
    } catch (error) {
        console.error(error);
    }

    return animales;
}

export function compararAnimales(animal1: Animal, animal2: Animal): boolean {
    // Comparar las propiedades de cada animal
    if (animal1.id !== animal2.id) {
        return false;
    }
    if (animal1.nombre !== animal2.nombre) {
        return false;
    }
    if (animal1.edad !== animal2.edad) {
        return false;
    }
    if (animal1.genero !== animal2.genero) {
        return false;
    }

    // Los animales son iguales
    return true;
}

export function compararListasAnimales(listaOriginal: ListaAnimales | undefined, listaModificada: ListaAnimales | undefined): ListaAnimales {
    const listaDiferencias: ListaAnimales = [];
    if (listaOriginal !== undefined && listaModificada !== undefined) {
        for (let i = 0; i < listaOriginal.length; i++) {
            const animalOriginal = listaOriginal[i];
            const animalModificado = listaModificada[i];

            if (!compararAnimales(animalOriginal, animalModificado)) {
                listaDiferencias.push(animalModificado);
            }
        }
    }

    return listaDiferencias;
}

export function sonIgualesLasListas(lista1: ListaAnimales | undefined, lista2: ListaAnimales | undefined): boolean {
    if (lista1 !== undefined && lista2 !== undefined) {
        // Verificar si las listas tienen la misma longitud
        if (lista1.length !== lista2.length) {
            return false;
        }

        // Verificar si los animales en ambas listas tienen la misma información
        for (let i = 0; i < lista1.length; i++) {
            const animal1 = lista1[i];
            const animal2 = lista2[i];

            if (!compararAnimales(animal1, animal2)) {
                return false;
            }
        }

        // Las listas son iguales
        return true;
    }
    return false;
}

export function guardarCambiosEnTablaAnimales (AnimalesSinRetocar: ListaAnimales | undefined, animals: ListaAnimales | undefined){
    if(!sonIgualesLasListas(AnimalesSinRetocar, animals)){
        // comparamos a ver cuales son distintos
        let ls : ListaAnimales = compararListasAnimales(AnimalesSinRetocar, animals);
        if(ls !== undefined){
          for (const animal of ls) { 
            setAnimalById(animal.id,animal);
          }
        }
      } else {
        window.alert('No existen cambios para guardar');
      }
}