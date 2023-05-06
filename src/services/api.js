import axios from "axios";


//BASE DA URL:  https://api.themoviedb.org/3
//URL da API:  /movie/now_playing?api_key=cc3ca2fb106a2e05e57be69df013674a&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;