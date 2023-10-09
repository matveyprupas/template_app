import { useEffect, useState } from 'react';
import useUsersByCompanyId from './hooks/useUsersByCompanyId';
import useFilteredUsers from './hooks/useFilteredUsers';
import filterObject from "./mock/filterObject.json";

function UsersList({companyId}) {

  const [isReload, setIsReload] = useState(false)

  const usersByCompanyId = useUsersByCompanyId(companyId, isReload, setIsReload);
  const filteredUsers = useFilteredUsers(filterObject);

  useEffect(()=>{
    setIsReload(false);
  }, [])

  const handleReload = () => {
    setIsReload(true);
  }

  // console.log('UsersList RENDERS');
  return (
    <>
      <button onClick={handleReload}>Reload Fetch</button>
      {/* <ul>
        {usersByCompanyId.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul> */}
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.name+user.age+user.companyId}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
