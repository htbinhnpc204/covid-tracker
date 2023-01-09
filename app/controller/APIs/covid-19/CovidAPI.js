import axiosService from '../axiosServices'
import axios from 'axios'
import { COUNTRIES_URL, WORLD_URL } from '../urls'

const CovidAPI = {
    getCountries: async () => {
        console.log(COUNTRIES_URL)
        return axiosService()({
            url: COUNTRIES_URL,
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
