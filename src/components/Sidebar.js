import React from 'react'

function Sidebar({topAnime}) {
  return (
    <aside>
      <nav>
        <h3>Top Anime</h3>
        {topAnime.map((anime) => (
        <a href={anime.url} key={anime.mal_id}
        target={'_blank'} 
        rel="noreferrer">
          {anime.rank}-
          {anime.title}
       </a>
         
        ))}
        
      </nav>
    </aside>
  )
}

export default Sidebar