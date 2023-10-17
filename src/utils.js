import {v4 as uuid} from 'uuid';

const fetchTasks = () => {

  const tasks = [...Array(5).keys()].map(el => ({
    title: `Task_${el}`,
    id: uuid(),
  }));

  return new Promise((resolve, reject) => {

    if(!tasks.length) reject('0 tasks');

    setTimeout(() => {
      resolve(tasks);
    }, 1000);
  })
}

export default fetchTasks;