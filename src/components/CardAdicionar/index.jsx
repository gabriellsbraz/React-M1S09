import { useState } from "react"

function CardAdicionar(props) {

  const [textoTarefa, setTextoTarefa] = useState("")

  const handleAdicionarTarefa = () => {
    props.adicionarTarefa(textoTarefa)
    setTextoTarefa("")
  }

  return (
  <div>
    <input type="text"
      value={textoTarefa}
      onChange={(evento) => setTextoTarefa(evento.target.value)} 
      placeholder="Digite sua tarefa"
    />
    <button onClick={() => handleAdicionarTarefa()}>Adicionar</button>
  </div>
  )
}

export default CardAdicionar