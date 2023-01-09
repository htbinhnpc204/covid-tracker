import axiosService from '../axiosServices'
import { HEALTH_NEWS, VACCINE_NEWS, CORONAVIRUS_NEWS } from '../urls'

const NewsAPIs = {
    getCoronaNews: async ({ page }) => {
        console.log(CORONAVIRUS_NEWS + page)
        return axiosService()({
            url: CORONAVIRUS_NEWS + page,
            method: 'GET'
        })
    },
    getHealthNews: async ({ page }) => {
        return axiosService()({
            url: HEALTH_NEWS + page,
            method: 'GET'
        })
    },
    getVaccineNews: async ({ page }) => {
        return axiosService()({
            url: VACCINE_NEWS + page,
            method: 'GET'
        })
    }
}

export default NewsAPIs
