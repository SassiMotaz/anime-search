import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [animelist, setAnimelist] = useState([]);
  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [animes, setanimes] = useState([])
 
  const GetTopAnime = async () => {
    const response = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
    .then(response => response.json())
    .then(data => setTopAnime(data.top.slice(0, 10)))
  }

  const GetAllAnime = async () => {
    const response = await fetch('https://api.jikan.moe/v3/top/anime')
    .then(response => response.json())
    .then(data => setanimes(data.top))
  }

 

  

  const fetchAnime = async (query ) => {
    const response = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=16`)
    .then(response => response.json())
    .then(data => setAnimelist(data.results))
    
  }

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  }
  
  useEffect(() => {
    GetTopAnime();
    GetAllAnime();
  }, []);


  return (
    <div className="App">
      <Header/>
      <div className="content-wrap">
          <Sidebar topAnime={topAnime} />
          <MainContent handleSearch={handleSearch} search={search} animelist={animelist} setAnimelist={setAnimelist} setSearch={setSearch} topAnime={topAnime} animes={animes} />
          
      </div>
    </div>
  );
}

export default App;
