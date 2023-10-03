import { useNavigate } from 'react-router-dom';

import TaskList from '../../components/UI/TaskList/TaskList';
import Task from '../../components/UI/Task/Task';
import Button from '../../components/UI/Button/Button';

import classes from '../../components/UI/Task/Task.module.css';

const CompletedPage = (props) => {
    const navigate = useNavigate();

    const changeTaskHandler = (id) => {
        props.changeTaskProgressHandler(id);
    };

    const deleteHandler = (id) => {
        props.deleteTaskHandler(id);
    };

    const handleEditClick = (id) => {
        return navigate(`/${id}/edit`);
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
                    <Button onClick={() => handleEditClick(task.id)}>Edit</Button>
                    <Button onClick={() => deleteHandler(task.id)}>Delete</Button>
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