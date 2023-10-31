import { useState } from 'react';
import { useMemo } from 'react';
import './App.css';
import Button from './component/Button';
import ListPost from './component/ListPost';
import { createFakePost } from './services/createFakePosts';
import styled from '@emotion/styled';
import { Post } from './models/Posts';
import { useEffect } from "react";
import TextField from './component/Textfield';
import { Link } from 'react-router-dom';

const  App = () => {
  const [posts, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');



  const filtered = useMemo(() =>{
    if(!search) return posts;
    return posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));
  }, [posts, search] )






  useEffect(() => {

      const nextPosts = createFakePost(10);
      setPost(nextPosts);
      setLoading(false);

    console.log("empty deps array");
    
  },[]);

  useEffect(() => {
    console.log("loading changed", {loading}); 
    
  },[loading]);


  const createdPosts = () =>{
    setLoading(true);
    
    setTimeout(() => {
      setPost([...createFakePost(1), ...posts])
      console.log("createdPosts");
      setLoading(false);
    }, 250)
  
    
  }


const deletePost = (id: number) => {
  const newPosts = posts.filter((post) => post.id!== id);
  setPost(newPosts);
  
};

  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
    <h1>Post</h1>
    <TextField onChange={(e) => setSearch(e.target.value)} type="text" placeholder="rechercher post" />
    <br />
    <h2>Bouton</h2>
    <Button onClick={createdPosts}>Créer un nouveau post</Button>
    <br />
    <br />
    <br />

    {loading ? (<h1>Loading...</h1>): (
    <MainContainer>
      {filtered.map(({ id, description, image, title }) => (
        <ListPost key={id} description={description} image={image} title={title} onClick={() => deletePost(id)} />
      ))}
      
    </MainContainer>)}  
    
    </>

  );
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default App;


