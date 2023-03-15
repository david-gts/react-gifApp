import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export function GifApp () {
  const [categorias, setCategorias] = useState(['Dragon ball'])
  

  const onAddCategory = ( newCategory ) => {
    if( categorias.includes(newCategory) ) return
    setCategorias([ newCategory, ...categorias ])
  }
   

  return(
    <>
      <h1>Buscardor de Gif's</h1>
      <AddCategory 
        //setCategorias={setCategorias}
          onNewCategory ={ (value) => onAddCategory(value) }
      />
      

      <ol>
        {categorias.map((categoria) => (
          <GifGrid 
            key={categoria}
            categorias={categoria}
          />
        ))}
      </ol>
    </>
  )
} 