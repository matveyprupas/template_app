export const fetchUsers = (searchText) => {
  const users = [...Array(23).keys()].map(el => ({
    name: `Matvey_${el}`
  }));

  const filteredUsers = users.filter(user => user.name.includes(searchText));
  
  return new Promise ((resolve, reject) => {

    if(!users.length) reject('0 users');

    setTimeout(() => {
      resolve(filteredUsers);
    }, 2500);
  })
}