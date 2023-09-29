import { useRouteError } from 'react-router-dom';

import MainNavigation from '../../components/MainNavigation/MainNavigation';

import classes from './Error.module.css';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <>
            <MainNavigation />
            <div className={classes.wrapper}>
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occured.</p>
                <p><i>{error.statusText || error.message}</i></p>
            </div>
        </>
    );
};

export default ErrorPage;