import React from 'react'
import Animecard from './Animecard'

function MainContent(props){
    return (
        <main>
            <div className="main-head">
                <form className='search-box' onSubmit={props.handleSearch}>
                    <input type="search" placeholder="Search for an anime .." required value={props.search} onChange={e => props.setSearch(e.target.value)}/>
                </form>
            </div>
                <div className="anime-list">
                   {props.animelist.length > 0 ? (
                        props.animelist.map(anime => (
                            <Animecard key={anime.mal_id} anime={anime}/>
                        ))) : (
                        props.animes.map(anime => (
                            <Animecard key={anime.mal_id} anime={anime}/>
                        ))
                    )}
                </div>
            </main>
    )
}
export default MainContent