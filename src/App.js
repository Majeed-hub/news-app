import React,{useState,useEffect} from 'react';
import Article from './Components/article.jsx';
import FetchedData from './Components/fetchedData';
import axios from 'axios';
function App() {
  const [Content, setContent] = useState([]);
  const [Posts, setPosts] = useState([])

axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
    setContent(res.data.results.map((a) => a.name));
  })

const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});
    useEffect(() => {
      const fetchPost = async () => {
        let response = await client.get("?_limit=10");
        setPosts(response.data);
      };
      fetchPost();
    }, []);


  return (
    <>
      <Article Content={Content} Data={Posts} />
     
     
    </>
  );
}

export default App;
