import { useEffect, useState } from 'react'

interface Wallpaper {
  id: string;
  title: string;
  imageUrl: string;
  resolution: string;
}

function App() {
  const [wallpapers, setWallpapers] = useState<Wallpaper[]>([])

  useEffect(() => {
    // Procura os wallpapers na tua API
    fetch('http://localhost:3000/wallpapers')
      .then(res => res.json())
      .then(data => setWallpapers(data))
  }, [])


  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 className="text-3xl font-bold text-blue-500">Teste Tailwind</h1>
      <h1>M-Wallpapers Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
        {wallpapers.map(wall => (
          <div key={wall.id} style={{ border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden' }}>
            <img src={wall.imageUrl} alt={wall.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '10px' }}>
              <h3>{wall.title}</h3>
              <p>{wall.resolution}</p>
              <a href={wall.imageUrl} target="_blank" download style={{ color: 'blue' }}>Download Original</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App