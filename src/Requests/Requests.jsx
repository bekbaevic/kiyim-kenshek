import axios from "axios";

export async function getProducts() {
    return await axios.get('https://fakestoreapi.com/products')
        .then(res => res.data)
}

export async function getCategories() {
    return await axios.get('https://api.escuelajs.co/api/v1/categories')
        .then(res => res.data)
}

