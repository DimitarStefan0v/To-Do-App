import { useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root/Root'
import HomePage from './pages/Home/Home';
import CompletedPage from './pages/Completed/Completed';
import ErrorPage from './pages/Error/Error';
import EditPage from './pages/Edit/Edit';

const dummyTasks = [
    { id: 'id1', description: 'Task 1', isCompleted: true },
    { id: 'id2', description: 'TesttTesttTesttTesttTesttTesttTesttTesttTesttTestt', isCompleted: false },
    { id: 'id3', description: 'Task 3', isCompleted: false },
    { id: 'id4', description: 'Task 4', isCompleted: false },
    { id: 'id5', description: 'Task 5', isCompleted: false },
    { id: 'id6', description: 'Task 6', isCompleted: false },
    { id: 'id7', description: 'Task 7', isCompleted: true },
];

const App = () => {
    const [tasks, setTasks] = useState(dummyTasks);

    const changeTaskProgressHandler = (id) => {
        const task = tasks.find(x => x.id === id);
        task.isCompleted = !task.isCompleted;
        setTasks(state => [...state]);
    };

    const createTaskHandler = (task) => {
        setTasks(state => [task, ...state]);
    };

    const deleteTaskHandler = (id) => {
        setTasks(state => [...state.filter(task => task.id !== id)]);
    };

    const editTaskHandler = (id, newDescription) => {
        const task = tasks.find(x => x.id === id);
        task.description = newDescription;
        setTasks(state => [...state]);
    };

    const activeTasks = tasks.filter(x => x.isCompleted === false);
    const completedTasks = tasks.filter(x => x.isCompleted === true);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout activeTasksCount={activeTasks.length} completedTasksCount={completedTasks.length} />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <HomePage
                        tasks={activeTasks}
                        changeTaskProgressHandler={changeTaskProgressHandler}
                        createTaskHandler={createTaskHandler}
                        deleteTaskHandler={deleteTaskHandler}
                    />
                },
                {
                    path: 'completed',
                    element: <CompletedPage
                        tasks={completedTasks}
                        changeTaskProgressHandler={changeTaskProgressHandler}
                        deleteTaskHandler={deleteTaskHandler}
                    />
                },
                {
                    path: ':taskId/edit',
                    element: <EditPage
                        editTaskHandler={editTaskHandler}
                        tasks={tasks}
                    />
                }
            ]
        }
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
