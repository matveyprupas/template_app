import useUsersByCompanyId from './hooks/useUsersByCompanyId';

function UsersList({companyId}) {

  const usersByCompanyId = useUsersByCompanyId(companyId);

  return (
    <ul>
      {usersByCompanyId.map((user) => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
