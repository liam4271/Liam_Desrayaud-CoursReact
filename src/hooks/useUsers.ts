import { useEffect, useState } from "react";
import { fetchUsers } from "../services/Users/api";
import { transformUser } from "../services/Users/utiles";
import { User } from "../models/Users";

export const useUsers = () => {
    const [users, setUser] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    
  useEffect(() => {
    fetchUsers().then((result) =>{
      const transformed = result.users.map(transformUser);
      setUser(transformed);
      setLoading(false);
    })
  }, [])
  

  const deleteUser = (id: number) => {
    const newUsers = users.filter((user) => user.id!== id);
    setUser(newUsers);
    
  };

  return { users, loading, deleteUser, setUser, setLoading };
}

