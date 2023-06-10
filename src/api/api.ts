import axios from 'axios'

export const backendInstance = axios.create({
    baseURL: `https://fakestoreapi.com/`
})