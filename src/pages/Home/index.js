import { useEffect, useState } from "react";
import api from "../../services/api";

//URL da API:  /movie/now_playing?api_key=cc3ca2fb106a2e05e57be69df013674a&language=pt-BR


function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        
        async function loadFilmes() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: 'cc3ca2fb106a2e05e57be69df013674a',
                    language: 'pt-BR',
                    page: 1
                }
            })

        
            console.log(response.data)

        }


        loadFilmes();


    }, [])





    return (
        <div>
            <h1>Bem Vindo a Home</h1>
        </div>
    )
}

export default Home;