import axios from 'axios'

export const API_URL = 'https://back.sandbook.ru:3000/'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api