import { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {

  const [posts, setPosts] = useState([
    {
      username: "uzbayyelcee",
      caption: "Kısa bir mola...",
      imageUrl: "https://images.unsplash.com/photo-1535160303093-adc1c60c347d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
      username: "hikmethancan",
      caption: "Manzaram! Sıradaki şehrimizi tahmin edebiliyor musunuz?",
      imageUrl: "https://images.unsplash.com/photo-1652088241116-5faf85b6c6aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    },
    {
      username: "mehmettuzcu",
      caption: "Alkollü günler pompalı geceler!!",
      imageUrl: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img
        className='app__headerImage'
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt="Instagram"
        />
      </div>

      <h1>Hello From Planet Earth!</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
    </div>
  );
}

export default App;
