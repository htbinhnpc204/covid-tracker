import axiosService from '../axiosServices'
import axios from 'axios'
import { WORLD_URL } from '../urls'

const CovidAPI = {
    world: async () => {
        return axiosService()({
            url: WORLD_URL,
            method: 'GET'
        })
    }
}

export default CovidAPI
