import { useEffect, useState } from "react";
import listUsers from "../mock/users.json";

const fetchData = (filterObject) => {
  return new Promise((resolve) => {
    const filters = Object.entries(filterObject);
    console.log(filters, listUsers);

    const filteredUsers = listUsers.filter(user => {
      let isFilteredUser = true;
      filters.forEach((filter, j, filtersArr) => {
        // console.log(user, user[filter[0]], filtersArr[j])
        if(user[filter[0]] !== filtersArr[j][1]) {
          isFilteredUser = false;
        } 
      })
      return isFilteredUser;
    }) 

    setTimeout(() => {
      resolve(filteredUsers);
    }, 2000);
  });
}

export default function useFilteredUsers(filterObject) {

  console.log('useFilteredUsers: ', filterObject);

  const [filteredUsers, setFilteredUsers] = useState([]);

  // const users = await fetchData(filterObject);

  // setFilteredUsers(users);
  useEffect(() => {
    fetchData(filterObject).then((users) => {
      setFilteredUsers(users);
    });
  
  }, [filterObject]);

  return filteredUsers;
}
