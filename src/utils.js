export const fetchUsers = (filterObject) => {
  const users = [...Array(100).keys()].map((user, i) => ({
    name: `Matvey_${i}`,
    age: i%15 === 0 ? 15 : i%5 === 0 ? 5 : i%3 === 0 ? 3 : i,
    companyId: i
  }));

  const filterEntries = Object.entries(filterObject);

  const filteredUsers = users.filter(user => {
    let res = true;
    
    filterEntries.forEach(([key, value]) => {
      if(user[key] != value) res = false;
    })

    return res;
  })

  return new Promise((resolve, reject) => {
    if(!users.length) reject('0 users');

    setTimeout(() => {
      resolve(filteredUsers);
    }, 2500);
  })
}