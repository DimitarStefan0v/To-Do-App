import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = (props) => {
    return (
        <header className={classes.header}>
            <ul className={classes.list}>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? `${classes.link} ${classes.active}` : `${classes.link}`}
                        end
                   >
                        Active Tasks ({props.activeTasksCount ?? 0})
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/completed"
                        className={({ isActive }) => isActive ? `${classes.link} ${classes.active}` : `${classes.link}`}
                    >
                        Completed Tasks ({props.completedTasksCount ?? 0})
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

export default MainNavigation;