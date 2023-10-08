import { useEffect, useState } from 'react';
import useUsersByCompanyId from './hooks/useUsersByCompanyId';

function UsersList({companyId}) {

  const [isReload, setIsReload] = useState(false)

  const usersByCompanyId = useUsersByCompanyId(companyId, isReload, setIsReload);

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
      <ul>
        {usersByCompanyId.map((user) => (
          <li key={user.name}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
