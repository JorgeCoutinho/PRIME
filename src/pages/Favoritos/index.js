import './favoritos.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Favoritos(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{

        const minhalista = localStorage.getItem('@primeflix')
        setFilmes(JSON.parse(minhalista) || [])



    }, [])

    function excluirFilme(id){
        const filtroFilme = filmes.filter((item)=>{
            return(item.id != id)
        })

        setFilmes(filtroFilme)
        localStorage.setItem('@primeflix', JSON.stringify(filtroFilme))
    }

    return(
        <div className='meus-filmes'>
            <h1>Meus Filmes</h1>
            {filmes.length === 0 && <span>Você não possui filme salvo :(</span>}
            <ul>
                {filmes.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`} >Ver Detalhes</Link>
                                <button onClick={()=> excluirFilme(item.id)}> Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favoritos