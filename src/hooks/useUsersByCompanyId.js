import { useEffect, useState } from "react";
import listUsers from "../mock/users.json";

const usersByCompanyIdCacheMap = new Map();

const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listUsers);
    }, 2000);
  });
}

export default function useUsersByCompanyId(companyId, force = false, setForce) {

  // console.log('useUsersByCompanyId: ', companyId, usersByCompanyIdCacheMap, force);

  const [usersById, setUsersById] = useState([]);


  useEffect(() => {
    if(companyId === -1) return;
    if(force) {
      usersByCompanyIdCacheMap.delete(companyId);
    }
    if(!usersByCompanyIdCacheMap.has(companyId)) {  
      fetchData().then((users) => {
        const res = users.filter((user) => user.companyId === companyId);
        usersByCompanyIdCacheMap.set(companyId, res);
        setUsersById(res);
        if(force) setForce(false);
      });
    } else {
      setUsersById(usersByCompanyIdCacheMap.get(companyId));
    }
  }, [companyId, force, setForce]);

  return usersById;
}
