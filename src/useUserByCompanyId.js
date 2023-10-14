import { useEffect } from "react";
import { useState } from "react"

const fetchUsers = (companyId) => {
  return new Promise((resolve, reject) => {
    const users = [...Array(26).keys()].map((el) => ({
      name: `Matvey_${el}`,
      companyId: el%2 === 0 ? 2 : (el%3 === 0 && el%5 === 0) ? 15 : el%3 === 0 ? 3 : el%5 === 0 ? 5 : el
    }))

    if(!users.length) reject('0 users');

    const result = users.filter(user => user.companyId === +companyId)

    setTimeout(() => {
      resolve(result)
    }, 2500);
  })
} 

const cacheUsers = new Map();

const useUsersByCompanyId = (companyId) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    if(cacheUsers.has(companyId)) {
      setUsers(cacheUsers.get(companyId));
      setIsLoading(false);
    } else {
      fetchUsers(companyId)
      .then(res => {
        cacheUsers.set(companyId, res);
        setUsers(res);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
    }

  }, [companyId, cacheUsers.get(companyId)])

  return {
    users,
    isLoading,
    cacheUsers
  };
}

export default useUsersByCompanyId;