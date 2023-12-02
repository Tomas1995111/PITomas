import Cards from './components/Cards'
import fetchDataFromFile from './data/fetchData'
import { useState } from 'react'
import Data from './data/data'
export default function App() {
  //     {/* Vamos a configurar el componente card */}
  const [characters, setCharacters] = useState(Data)

  
  return (
    <Cards 
      characters={characters}
    />
  )
}

