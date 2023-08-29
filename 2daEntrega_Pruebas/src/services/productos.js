const stock = [
    { id: '1', name: 'Cafe 1', description: 'Cafe torrado', price: 500, stock: 5 },
    { id: '2', name: 'Cafe 2', description: 'Cafe tostado', price: 800, stock: 10 },
    { id: '3 ', name: 'Cafe 3', description: 'Cafe Colombiano', price:1500, stock:20},
];

export const getProducts = () => {
    return new Promise((resolve, reject) => { // Promise recibe como parametro las funciones resolve y reject
        const operacionExitosa = true;

        setTimeout(() => { // setTimeout es el metodo que sirve para que el codigo se ejecute despues de un tiempo definido
            if (operacionExitosa) {
                resolve({stock});
            } else {
                reject('Error');
            }
        }, 2000); // 2 segundos
    });
}