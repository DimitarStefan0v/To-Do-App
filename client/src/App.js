import { useState } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root/Root'
import HomePage from './pages/Home/Home';
import CompletedPage from './pages/Completed/Completed';
import ErrorPage from './pages/Error/Error';

const dummyTasks = [
    { id: 'id1', description: 'Task 1', isCompleted: true },
    { id: 'id2', description: 'Task 2', isCompleted: false },
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

    const activeTasks = tasks.filter(x => x.isCompleted === false);
    const completedTasks = tasks.filter(x => x.isCompleted === true);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <HomePage
                        tasks={activeTasks}
                        changeTaskProgressHandler={changeTaskProgressHandler}
                    />
                },
                {
                    path: 'completed',
                    element: <CompletedPage
                        tasks={completedTasks}
                        changeTaskProgressHandler={changeTaskProgressHandler}
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
