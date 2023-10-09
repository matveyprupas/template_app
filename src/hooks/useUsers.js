import { useEffect, useState } from "react";
import listUsers from "../mock/users.json";

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listUsers);
    }, 2000);
  });
}

export default function useUsers() {

  // console.log('useUsersByCompanyId: ', companyId, usersByCompanyIdCacheMap, force);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData().then((users) => {
      setUsers(users);
    });
  }, []);

  return users;
}
