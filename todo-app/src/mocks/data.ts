import type { TaskWithId } from '@/features/tasks/types'
import type { UserWithId } from '@/features/users/types'

const fakeUsers: UserWithId[] = [
  { id: '1', name: 'Alice', email: 'alice@gmail.com' },
  { id: '2', name: 'Bob', email: 'bob@gmail.com' },
  { id: '3', name: 'Charlie', email: 'charlie@gmail.com' },
]

const fakeTasks: TaskWithId[] = [
  {
    id: '101',
    title: 'Fix login bug',
    description: "Users can't log in when password contains special characters",
    assignedTo: '1',
    status: 'done',
  },
  {
    id: '102',
    title: 'Fix login bug',
    description: "Users can't log in when password contains special characters",
    assignedTo: '1',
    status: 'pending',
  },
  {
    id: '103',
    title: 'Update landing page',
    description: 'Marketing wants a new hero section',
    assignedTo: '2',
    status: 'in-progress',
  },
]

export { fakeTasks, fakeUsers }

/* export const fakeApi = {
  getUsers: () =>
    new Promise((resolve) => setTimeout(() => resolve(fakeUsers), 500)),

  getTasks: () =>
    new Promise((resolve) => setTimeout(() => resolve(fakeTasks), 500)),

  createTask: (task:) =>
    new Promise((resolve) =>
      setTimeout(() => {
        const newTask = { id: Date.now(), ...task };
        fakeTasks.push(newTask);
        resolve(newTask);
      }, 500)
    ),

  updateTask: (id, updates) =>
    new Promise((resolve) =>
      setTimeout(() => {
        fakeTasks = fakeTasks.map((t) =>
          t.id === id ? { ...t, ...updates } : t
        );
        resolve(fakeTasks.find((t) => t.id === id));
      }, 500)
    ),

  deleteTask: (id) =>
    new Promise((resolve) =>
      setTimeout(() => {
        fakeTasks = fakeTasks.filter((t) => t.id !== id);
        resolve({ success: true });
      }, 500)
    ),
}; */
