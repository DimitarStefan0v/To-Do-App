import { Outlet } from 'react-router-dom';

import MainNavigation from '../../components/MainNavigation/MainNavigation';

const RootLayout = (props) => {
    return (
        <>
            <MainNavigation {...props} />
            <Outlet />
        </>
    );
};

export default RootLayout;