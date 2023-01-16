import axiosService from '../axiosServices'
import axios from 'axios'
import { COUNTRIES_URL, LAST_SIX_MONTHS_URL, SPECIFIC_COUNTRY, WORLD_URL } from '../urls'

const CovidAPI = {
    getCountries: async () => {
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
    },
    getSpecificCountry: async ({NAME, ISO}) => {
        return axiosService()({
            url: SPECIFIC_COUNTRY + `${NAME}/${ISO}`,
            method: 'GET'
        })
    },
    getLastSixMonths: async ({country}) => {
        return axiosService()({
            url: LAST_SIX_MONTHS_URL + country,
            method: 'GET'
        })
    }
}

export default CovidAPI
