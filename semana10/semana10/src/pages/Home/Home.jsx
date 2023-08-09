import { useNavigate } from "react-router-dom";
import { getAll, getOne } from "../../services/web";
import { useEffect, useState, useContext } from "react";
import CardNoticia from "../../components/CardNoticia/CardNoticia";
import { AuthContext } from "../../context/AuthContext/AuthContext"; 
import './styles.css';

export default function Home() {
  // getAll();
  const [noticias, setNoticias] = useState([]);
  const {user} = useContext(AuthContext);
  const [nomeUsuario, setNomeUsuario] = useState("");

  const getPrefixo = () =>{
    const prefixo = user.email.split("@").shift();
    setNomeUsuario(prefixo);
  }

  useEffect(() => {
    async function fetchAll() {
      const data = await getAll();
      setNoticias(data);
    }
    fetchAll();
    getPrefixo();
  }, []);

  const verUmaNoticia = () =>{
    async function umaNoticia (id){
      const noticia = await getOne(id);
      return noticia;
    }
    umaNoticia(1).then(e=>console.log(e));
  }

  return (
    <>
      <h1>Home</h1>
      <h2>Bem vindo(a) {nomeUsuario}</h2>
      <button onClick={verUmaNoticia}>Ver uma noticia</button>
      <div className="cards">
        {noticias.map((noticia) => {
          return (
            <CardNoticia
              key={noticia.id}
              titulo={noticia.titulo}
              srcImage={noticia.imagem.src}
            />
          );
        })}
      </div>
    </>
  );
}