import { React ,useState } from 'react';

import './App.css';
import { movieList } from './data';
import iaamge from "./Component/thumb-1920-984394.jpg"

import AddMovie  from './Component/AddMovie/AddMovie';
import Filter from './Component/Filter/Filter';
import  MovieList from './Component/MovieList/MovieList';
function App() {
  const [moviesM,setMoviesM] = useState(movieList)

const getNewMovie =(newM) =>{setMoviesM([...moviesM,{...newM,id:moviesM.length}])}
const [filterByName,setFilterByName]=useState("")
const [filterByRate ,setFilterByRate] = useState(0)

return (
    <div  className="App" style={{ 
      backgroundImage: `url("https://ec.europa.eu/research-and-innovation/sites/default/files/styles/w1108/public/hm/field/image/milky-way-984050_1280.jpg?itok=CN6lNq-3")`
    }}>
      <div className='nav' style={{background:" #92FE9D"}}>
      <Filter  setFilterByName={setFilterByName}  setFilterByRate={setFilterByRate}/></div>
      
      <MovieList  movieList={moviesM.filter((el)=>el.title.toLowerCase().includes(filterByName.trim().toLowerCase())&&el.rating>=filterByRate)}/>
      <AddMovie getNewMovie={getNewMovie}/>
     </div>
  );
}

export default App;
