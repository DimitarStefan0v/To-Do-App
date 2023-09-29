import { NavLink } from 'react-router-dom';

const MainNavigation = () => {
    return (
        <header>
            <ul>
                <li><NavLink to="/">Active Tasks</NavLink></li>
                <li><NavLink to="/completed">Completed Tasks</NavLink></li>
            </ul>
        </header>
    );
};

export default MainNavigation;