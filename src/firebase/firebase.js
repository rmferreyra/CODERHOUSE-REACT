
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDnpaJrF-vh7kKgwbCmUYguYZ9u9ztVVKs",
    authDomain: "react-2023-ee577.firebaseapp.com",
    projectId: "react-2023-ee577",
    storageBucket: "react-2023-ee577.appspot.com",
    messagingSenderId: "632207837287",
    appId: "1:632207837287:web:9af8f156141eb88ac56cc2"
};

const app = initializeApp(firebaseConfig);

const bdd = getFirestore()

export const createProducts = async () => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach( async (prod) => {
        await addDoc(collection(bdd, "productos"), {
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            categoria: prod.categoria,
            descripcion: prod.descripcion,
            imagen: prod.imagen,
            precio: prod.precio,
            stock: prod.stock,
        })
    })
}

export const getProducts = async () => {
    const prods = await getDocs(collection(bdd, "productos"))
    const items = prods.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return items
}

export const getProduct = async (id) => {
    const prod = await getDoc(doc(bdd, "productos", id))
    const item = { ...prod.data(), id: prod.id }
    return item
}

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "productos", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "productos", id))
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) => {
    const ordenCompra = await getDoc(doc(bdd, "ordenCompra", id))
    const item = { ...ordenCompra.data(), id: ordenCompra.id }
    return item
}

export const deleteOrdenCompra = async (id) => {
    await deleteDoc(doc(bdd, "ordenCompra", id))
}