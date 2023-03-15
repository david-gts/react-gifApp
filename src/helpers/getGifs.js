export const getGifs = async ( categorias ) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=TdMBDHLmZq3jbDgZFNQfsL0FG577RRv5&q=${categorias}&limit=20`
  const response = await fetch(url)
  const { data } = await response.json()

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }))
  
  return gifs
}