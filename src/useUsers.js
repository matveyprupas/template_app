import { useEffect, useState } from "react";
import { fetchUsers } from "./utils";

const useUsers = (searchText) => {
  
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchUsers(searchText)
    .then(res => {
      setUsers(res);
      setIsLoading(false);
    })
    .catch(err => console.error(err));
  }, [searchText])

  return {
    users,
    isLoading
  };
}

export default useUsers;