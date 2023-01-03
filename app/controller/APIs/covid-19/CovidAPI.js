import axiosService from '../axiosServices'
import axios from 'axios'
import { API_BASE_URL, WORLD_URL } from '../urls'

const CovidAPI = {
    getAll: async () => {
        return axiosService()({
            url: API_BASE_URL,
            method: 'GET'
        })
    },
    getWorld: async () => {
        return axiosService()({
            url: WORLD_URL,
            method: 'GET'
        })
    }
}

export default CovidAPI
