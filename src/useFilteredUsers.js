import { useState } from "react";
import { fetchUsers } from "./utils";
import { useEffect } from "react";

const useFilteredUsers = (filterObject) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    fetchUsers(filterObject)
    .then(res => {
      setUsers(res);
      setIsLoading(false);
    })
    .catch(err => console.error(err))
  }, [filterObject])

  return {
    users,
    isLoading
  };
}

export default useFilteredUsers;