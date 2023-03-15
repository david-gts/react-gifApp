export function GifItem ({ item }) {
  return(
    <div className="card">
      <li>{item.title}</li>
      <img src={item.url} alt={item.title}/>
    </div>
  )
}