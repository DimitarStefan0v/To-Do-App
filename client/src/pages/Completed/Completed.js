import TaskList from '../../components/UI/TaskList/TaskList';
import Task from '../../components/UI/Task/Task';
import Button from '../../components/UI/Button/Button';

import classes from '../../components/UI/Task/Task.module.css';

const CompletedPage = (props) => {

    const changeTaskHandler = (id) => {
        props.changeTaskProgressHandler(id);
    };

    const tasks = (props.tasks.length > 0
        ?
        props.tasks.map(task =>
            <div className={classes.wrapper} key={task.id}>
                <Task>
                    <p className={`${classes.description} ${classes.completed}`}>{task.description}</p>
                </Task>
                <div className={classes.buttons}>
                    <Button onClick={() => changeTaskHandler(task.id)}>Move Back</Button>
                    <Button className="edit">Edit</Button>
                    <Button className="delete">Delete</Button>
                </div>
            </div>)
        :
        <h2>No completed tasks yet!</h2>
    )

    return (
        <TaskList>
            <h1 className={classes.heading}>Completed Tasks</h1>
            { tasks }
        </TaskList>
    );
};

export default CompletedPage;