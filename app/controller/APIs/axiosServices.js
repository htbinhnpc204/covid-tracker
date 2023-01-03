import axios from 'axios'
import { API_BASE_URL, API_HOST } from './urls'

const axiosService = () => {
    const axiosOptions = axios.create({
        baseURL: API_BASE_URL,
        timeout: 3 * 1000,
        headers: {
            'X-RapidAPI-Key': '6a12d8c8a8msh6e572ed05c06a0ep1e1ca3jsn957d4326b326',
            'X-RapidAPI-Host': API_HOST
        }
    })
    axiosOptions.interceptors.response.use(
        (response) => {
            return response
        },
        (err) => {
            return Promise.reject(err)
        }
    )
    return axiosOptions
}

export default axiosService
