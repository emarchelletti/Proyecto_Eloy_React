import {
  doc,
  getDoc,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  getFirestore,
} from "firebase/firestore";

// const stock = [
//     { id: "1", name: 'Cafe Rubio', description: 'El café tostado rubio es tostado en menos tiempo, tiene un cuerpo ligero y sabores suaves.', price: 500, stock: 5, img: 'https://images.pexels.com/photos/144253/coffee-coffee-cup-porcelain-coffee-beans-144253.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Aromas' },
//     { id: "2", name: 'Cafe Medio', description: 'El café con tostado medio es el mas balanceado con sabores agradables y enriquecidos.', price: 800, stock: 10, img: 'https://images.pexels.com/photos/2456429/pexels-photo-2456429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Aromas' },
//     { id: "3", name: 'Cafe Oscuro', description: 'Los cafés con tostado oscuro presentan un cuerpo completo y sabores fuertes y robustos. ', price: 1500, stock: 20, img: 'https://images.pexels.com/photos/2196577/pexels-photo-2196577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Aromas' },
//     { id: "4", name: 'Cafetera 1', description: 'Maquina para hacer cafe 1', price:1000, stock:5, img: 'https://images.pexels.com/photos/4792698/pexels-photo-4792698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Cafeteras' },
//     { id: "5", name: 'Cafetera 2', description: 'Maquina para hacer cafe 2', price:1000, stock:5, img: 'https://images.pexels.com/photos/6205589/pexels-photo-6205589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Cafeteras' },
//     { id: "6", name: 'Cafetera 3', description: 'Maquina para hacer cafe 3', price:1000, stock:5, img: 'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Cafeteras' },
//     { id: "7", name: 'Regalo 1', description: 'Taza de regalo 1', price:300, stock:10, img: 'https://images.pexels.com/photos/50676/coffee-mugs-t-brown-drink-50676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Regalos' },
//     { id: "8", name: 'Regalo 2', description: 'Taza de regalo 2', price:300, stock:10, img: 'https://images.pexels.com/photos/4061511/pexels-photo-4061511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Regalos' },
//     { id: "9", name: 'Regalo 3', description: 'Taza de regalo 3', price:300, stock:10, img:'https://images.pexels.com/photos/359991/pexels-photo-359991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Regalos' },
// ];

export const getProduct = (id) => {
    return new Promise((resolve, reject) => { // Promise recibe como parametro las funciones resolve y reject

        setTimeout(() => { // Buscamos el producto x id
            const card = stock.find((p) => p.id === id);

            // Si existe el producto
            if (card) {
                resolve(card);
            } else {
                reject('No existe el producto');
            }
        }, 500); 
    });
}

// getProducts ()  -> Devuelve todos los productos
// getProducts ("Aromas") -> Devuelve todos los productos de la categoria Aromas
// export const getProducts = (category) => {
//     return new Promise((resolve) => {

//         setTimeout(() => { // setTimeout es el metodo que sirve para que el codigo se ejecute despues de un tiempo definido y sirve para simular una llamada al backend en este caso.

//             // Si category existe filtramos x categoria
//             // Si category no existe retorna todos los productos
//             const productsFiltered = category 
//             ? stock.filter((p) => p.category === category) 
//             : stock;

//             resolve(productsFiltered);

//         }, 1000); // 1 segundo
//     });
// }

export const getProducts = (categoryId) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore();

    const itemCollection = collection(db, "items");

    let q;
    if (categoryId) {
      q = query(itemCollection, where("categoryId", "==", categoryId));
    } else {
      q = query(itemCollection);
    }

    getDocs(q)
      .then((querySnapshot) => {
        const products = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        resolve(products);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

