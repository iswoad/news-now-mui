import './App.css';
import News from './components/News/News';
import {Button} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(()=> {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=6f96212fc1704577926eb73a3b510f1e';
    fetch(url)
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  },0)
  return (
    <div className="App">
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      {
        articles.map(article => <News article = {article}></News>)
      }
    </div>
  );
}

export default App;
