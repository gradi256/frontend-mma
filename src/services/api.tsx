import axios from "axios"

const apiClient  = axios.create({
    baseURL : "https://ripe-taxes-kick.loca.lt",
    Headers  :{
        "content-Type" : "application/json"
    },
})

export default apiClient