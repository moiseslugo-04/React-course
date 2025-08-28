import type { TaskType } from '@/types'

async function getTask(endpoint: string) {
  try {
    const response = await fetch(endpoint)
    if (!response.ok) throw new Error('Error getting the Task')
    return await response.json()
  } catch (err) {
    console.error(err)
    throw err
  }
}
async function addTask(body: TaskType) {
  return fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      return json
    })
}

export { getTask, addTask }
