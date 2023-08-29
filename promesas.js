const productos = [
    { id: '1', name: 'Cafe 1', description: 'Cafe torrado', price: 500, stock: 5},
    { id: '2', name: 'Cafe 2', description: 'Cafe tostado', price: 800, stock:10},
];

const promise = new Promise((resolve, reject) => { // Promise recibe como parametro las funciones resolve y reject
    const operacionExitosa = false;

    setTimeout (() => { // setTimeout es el metodo que sirve para que el codigo se ejecute despues de un tiempo definido
        if (operacionExitosa) {
            resolve({ productos });
        } else { 
            reject('Error');
        }
    }, 2000); // 2 segundos
});

// Consumir la promesa
promise.then(({productos}) => { // los objetos se pueden pasar como funciones
    console.log(productos);
}).catch((reject) => {
    console.log(reject);
});


