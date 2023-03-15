import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"

export function GifGrid({ categorias }) {
  const { images, isLoading } = useFetchGifs(categorias)

  return (
    <div>
      <h3>{categorias}</h3>
      {isLoading && <h2>Cargando...</h2>}
      <div className="card-grid">
        {
          images.map(item => (
            <GifItem key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  )
} 