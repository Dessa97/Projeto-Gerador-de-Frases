import "./styles.css";
import logoImg from "./assets/logo.png";
import { useState } from "react";

function App() {
  const [textoFrase, setTextoFrase] = useState("");
  const allFrase = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "Você é mais forte do que imagina e capaz de mais do que acredita.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Não espere por oportunidades, crie-as.",
        "Desafios são o que tornam a vida interessante — superá-los é o que a torna significativa.",
        "Acredite no seu potencial. Grandes conquistas começam com a decisão de tentar.",
      ],
    },
    {
      id: 2,
      nome: "Autoestima",
      frases: [
        "Eu sou suficiente exatamente como sou.",
        "Cada passo que dou é uma prova da minha força.",
        "Estou em constante crescimento e evolução.",
        "Mereço amor, respeito e felicidade todos os dias.",
        "Minha luz interior é mais forte que qualquer escuridão.",
      ],
    },
  ];
  /*o "0" no useState representa o primeiro item do array de allFrase */
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);

  function handleSwitchCategory(index: number) {
    /*Index recebido pelo onClick */
    setCategoriaSelecionada(index);
  }

  function selecionarFrase() {
    /*Math.floor = arredonda para baixo, Math.random = gera um numero aleatorio entre 0 e length
    length = retorna o tamanho do array */
    let fraseAleatoria = Math.floor(
      Math.random() * allFrase[categoriaSelecionada].frases.length
    );
    /*" `"${}"` " foi usado para colocar a frase entre aspas */
    setTextoFrase(`"${allFrase[categoriaSelecionada].frases[fraseAleatoria]}"`);
  }
  return (
    <div className="container">
      <img className="logo" alt="Logo frases" src={logoImg} />

      <h2 className="title">Categorias</h2>
      <section className="category-area">
        {/*usando map para percorrer o array allfrase e renderizar um botão para cada categoria*/}
        {allFrase.map((item, index) => (
          <button
            className="category-button"
            key={item.id}
            /* destaca visualmente o botão da categoria que está atualmente selecionada. */
            style={{
              borderWidth:
                item.nome === allFrase[categoriaSelecionada].nome ? 2 : 0,
              borderColor: "#1fa4db",
            }}
            /*Envia para a função a posição do item clicado */
            onClick={() => handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
      </section>

      <button className="button-frase" onClick={() => selecionarFrase()}>
        Gerar frase
      </button>
      {/*Renderiza textoFrase se for diferente de "" */}
      {textoFrase !== "" && <p className="text-frase">{textoFrase}</p>}
    </div>
  );
}
export default App;
