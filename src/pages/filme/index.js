import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './filme-info.css';
import api from "../../services/api";


function Filme() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: 'cc3ca2fb106a2e05e57be69df013674a',
                    language: 'pt-BR',
                }
            })
                .then((response) => {
                    setFilme(response.data);
                    console.log(response.data)
                    setLoading(false);
                })
                .catch(() => {
                    navigate('/', { replace:true })
                    return
                })
        }

        loadFilme();

        return () => {
            console.log('Desmontandi')
        }

        if (loading) {
            return (
                <div className="filme-info">
                    <h1>Carregando Detalhes...</h1>
                </div>
            )
        }

    }, [navigate,id])

    function SalvarFilme(){
        const minhaLista = localStorage.getItem('@primeflix')

        let filmeSalvos = JSON.parse(minhaLista) || [];

        const hasFilmes = filmeSalvos.some((filmeSalvo) => filmeSalvo.id === filme.id )

        if(hasFilmes){
            alert('ESSE FILME JÁ EXISTE')
            return;
        }


        filmeSalvos.push(filme)
        localStorage.setItem('@primeflix', JSON.stringify(filmeSalvos))
        alert("FILME SALVO COM SUCESSO")
    }

    return (
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className="area-buttons">
                <button onClick={SalvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;