import axios from 'axios'

export const backendInstance = axios.create({
    baseURL: `${process.env.API_URL}/`
})