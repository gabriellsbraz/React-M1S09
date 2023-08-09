import { useState } from 'react'
import './App.css'
import CardAdicionar from './components/CardAdicionar'
function App() {

  const [listaTarefas, setListaTarefas] = useState([
<<<<<<< HEAD
    {id: 1, textoTarefa: "tarefa 1", finalizado: false}
  ])

  const adicionarTarefa = (texto) => {
    if(texto == ""){
      alert("É necessário escrever uma tarefa")
      return
    }
    
    const novaTarefa = {id: listaTarefas.length + 1,textoTarefa: texto, finalizado: false}

    setListaTarefas((dadosAtual) => [...dadosAtual, novaTarefa])
  }
=======
    {textoTarefa: "tarefa 1", finalizado: false}
  ])
>>>>>>> 5107a7f9b6e126b11af0cfe545beedf6e880435f
 
  return (
    <>
     <CardAdicionar adicionarTarefa ={adicionarTarefa}/>
    <div>{listaTarefas.map(tarefa => (<span>{tarefa.textoTarefa}</span>))}</div>
    </>
  )
}

export default App