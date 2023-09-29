import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './pages/Root/Root'
import HomePage from './pages/Home/Home';
import CompletedPage from './pages/Completed/Completed';
import ErrorPage from './pages/Error/Error';

const router = createBrowserRouter([
    {
        path: '/', 
        element: <RootLayout itemsCount={5} />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'completed', element: <CompletedPage /> }
        ]
    }
]);

const App = () => {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
