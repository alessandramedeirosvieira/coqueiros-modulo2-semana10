import { useEffect } from "react"

export default function Noticias (){

    // const { noticia } = useParams()
    // const noticiaToShow = `${noticia}`

    useEffect(()=>{
        console.log('UseEffect renderizado.');
    })

    return(
        <>
        <h1>Noticias</h1>
            {/* <h1>Noticias { noticia && noticiaToShow} </h1> */}
        </>
    )

}