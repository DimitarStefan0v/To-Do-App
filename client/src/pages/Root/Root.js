import { Outlet } from 'react-router-dom';

import MainNavigation from '../../components/MainNavigation/MainNavigation';

const RootLayout = (props) => {
    return (
        <>
            <MainNavigation itemsCount={props.itemsCount} />
            <Outlet />
        </>
    );
};

export default RootLayout;