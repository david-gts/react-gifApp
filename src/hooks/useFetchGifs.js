import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export function useFetchGifs(categorias) {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getImages()
  }, [])

  const getImages = async () => {
    const newImages = await getGifs(categorias)
    setImages(newImages)
    setIsLoading(false)
  }

  return { images, isLoading }
}