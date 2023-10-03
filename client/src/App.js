import { useState, useEffect } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { updateStorage, readStorage } from './utils/updateLocalStorage';

import RootLayout from './pages/Root/Root'
import HomePage from './pages/Home/Home';
import CompletedPage from './pages/Completed/Completed';
import ErrorPage from './pages/Error/Error';
import EditPage from './pages/Edit/Edit';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [initialStart, setInitialStart] = useState(true);

    useEffect(() => {
        const initialTasksFromStorage = readStorage();
        setTasks(initialTasksFromStorage);
        setInitialStart(false);
    }, []);

    useEffect(() => {
        if (initialStart === false) {
            updateStorage(tasks);
        }
    }, [tasks, initialStart]);

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