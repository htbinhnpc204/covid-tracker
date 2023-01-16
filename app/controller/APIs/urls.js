// Host address
const API_HOST = 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'

const API_BASE_URL = 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api'

const COVID_DATA_URL = `${API_BASE_URL}/npm-covid-data`

// COVID-19 address
const COUNTRIES_URL = `${COVID_DATA_URL}`
const WORLD_URL = `${COVID_DATA_URL}/world`
const LAST_SIX_MONTHS_URL = `${API_BASE_URL}/covid-ovid-data/sixmonth/`
const SPECIFIC_COUNTRY = `${COVID_DATA_URL}/country-report-iso-based/`

// NEWS address
const NEWS_URL = `${API_BASE_URL}/news`
const CORONAVIRUS_NEWS = `${NEWS_URL}/get-coronavirus-news/`
const HEALTH_NEWS = `${NEWS_URL}/get-health-news/`
const VACCINE_NEWS = `${NEWS_URL}/get-vaccine-news/`


export {
    API_HOST,
    API_BASE_URL,
    COUNTRIES_URL,
    WORLD_URL,
    CORONAVIRUS_NEWS,
    HEALTH_NEWS,
    VACCINE_NEWS,
    LAST_SIX_MONTHS_URL,
    SPECIFIC_COUNTRY
}
