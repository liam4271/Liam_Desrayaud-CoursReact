import { useState } from 'react';
import { useMemo } from 'react';
import Button from '../component/Button';
import ListItem from '../component/ListItem';
import { createFakerUsers } from '../services/createFakeUsers';
import styled from '@emotion/styled';
import { User } from '../models/Users';
// import Count from './component/Count';
import { useEffect } from "react";
import TextField from '../component/Textfield';
import { Link } from 'react-router-dom';

const  ListUsers = () => {
  const [users, setUser] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState('');



  const filtered = useMemo(() =>{
    if(!search) return users;
    return users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()));
  }, [users, search] )





  useEffect(() => {
    console.log("no deps array");
    if (count === 5) setLoading(false);
    
  });

  useEffect(() => {

      const nextUsers = createFakerUsers(10);
      setUser(nextUsers);
      setLoading(false);

    console.log("empty deps array");
    
  },[]);

  useEffect(() => {
    console.log("loading changed", {loading}); 
    
  },[loading]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const nextUsers = createFakerUsers(count);
  //     setUser(nextUsers);
  //     setLoading(false);
  //   }, 750);
    
  // },[count]);

  const createdUsers = () =>{
    setLoading(true);
    
    setTimeout(() => {
      setUser([...users, ...createFakerUsers(1)])
      console.log("createdUsers");
      setLoading(false);
    }, 50)
  
    
  }

//   const handleCount = () => {
//     setCount((count) => count + 1)
// }

const deleteUser = (id: number) => {
  const newUsers = users.filter((user) => user.id!== id);
  setUser(newUsers);
  
};

  return (
    <>
      <Link to="/">Home</Link>
    <Link to="/users">Users</Link>
    <h1>Users</h1>
    <TextField onChange={(e) => setSearch(e.target.value)} type="text" placeholder="rechercher utilisateur" />
    <br />
    <h2>Bouton</h2>
    <button onClick={createdUsers}>créer un utilisateur</button>

    {/* <Button isDisabled> Favori <Count handleCount={handleCount}>{count}</Count> </Button> */}
    <br />
    <Button > En cours</Button>

    {loading ? (<h1>Loading...</h1>): (
    <MainContainer>
      {filtered.map(({ id, name, avatar }) => (
        <ListItem key={id} name={name} avatar={avatar} onClick={() => deleteUser(id)} />
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
export default ListUsers;


