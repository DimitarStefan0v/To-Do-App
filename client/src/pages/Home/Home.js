import TaskList from '../../components/UI/TaskList/TaskList';
import Task from '../../components/UI/Task/Task';

import classes from '../../components/UI/Task/Task.module.css';

const HomePage = (props) => {

    const changeTaskHandler = (id) => {
        props.changeTaskProgressHandler(id);
    };

    const tasks = (props.tasks.length > 0
        ?
        props.tasks.map(task =>
            <Task key={task.id}>
                <input className={classes.status} type="checkbox" onChange={() => changeTaskHandler(task.id)} />
                <p className={classes.description}>{task.description}</p>
            </Task>
        )
        :
        <h2>Nothing to do yet!</h2>
    )

    return (
        <TaskList>
            <h1>Active Tasks</h1>
            {
                tasks
            }
        </TaskList>
    );
};

export default HomePage;