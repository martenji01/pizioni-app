import axios from "axios"

const url = "https://rickandmortyapi.com/documentation/#rest"

axios.defaults.baseURL = url
axios.defaults.headers.post['Content-Type'] = 'application/json';