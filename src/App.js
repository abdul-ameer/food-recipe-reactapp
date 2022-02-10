import React,{useState} from 'react'
import Products from './Products';
import './App.css'
import SocialProfile from './SocialProfile';

const App = () => {
  const [search,setSearch] = useState('');
  const [data,setData] = useState([]);
  const YOUR_APP_ID = "08d09358";
  const YOUR_APP_KEY ="48ca6af1fae3492d6a23fab78cf1ddb7";
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30`).then(
      response => response.json()
    ).then(
      data => setData(data.hits)
    )
  }
  return (
    <div className="App">
        <h2>Food Recipe  🍔</h2>
        <SocialProfile /> 
        <form className="app__searchForm" onSubmit={submitHandler}>
        <input
          className="app__input"
          type="text"
          placeholder="Enter Ingridient "
          autoComplete="On"
          value={search}
          onChange={(e) => setSearch(e.target.value)}/>
          <input className="app__submit" type="submit" value="Search" />
          </form>   
        {data.length>=1 ? <Products  data={data}/>:null}
        
    </div>
  )
}

export default App


      
     
