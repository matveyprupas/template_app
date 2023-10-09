import useUsers from './hooks/useUsers';

function UsersList({searchName}) {

  const users = useUsers();

  console.log('UsersList RENDERS');
  return (
    <>
      <ul>
        {users.map((user) => {
          console.log(user.name.toLowerCase(), searchName);
          if(!user.name.toLowerCase().includes(searchName.toLowerCase()) && !!searchName ) return null;
          return <li key={user.name+user.age+user.companyId}>{user.name}</li>
        })}
      </ul>
    </>
  );
}

export default UsersList;
