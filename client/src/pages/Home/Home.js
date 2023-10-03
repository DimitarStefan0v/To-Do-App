import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import TaskList from '../../components/UI/TaskList/TaskList';
import Task from '../../components/UI/Task/Task';
import Button from '../../components/UI/Button/Button';

import classes from './Home.module.css';
import taskClasses from '../../components/UI/Task/Task.module.css';

const HomePage = (props) => {
    const [showWarning, setShowWarning] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const navigate = useNavigate();

    const changeTaskHandler = (id) => {
        props.changeTaskProgressHandler(id);
    };

    const submitTaskHandler = (ev) => {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const task = formData.get('task').trim();

        if (task.length < 3 || task.length > 50) {
            setShowWarning(true);
            return;
        }

        setShowWarning(false);
        const id = uuid();
        const taskObj = { id: id, description: task, isCompleted: false };
        props.createTaskHandler(taskObj);
        setInputValue('');
    };

    const inputChangeHandler = (ev) => {
        setInputValue(ev.target.value);
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
            <div className={taskClasses.wrapper} key={task.id}>
                <Task>
                    <p className={taskClasses.description}>{task.description}</p>
                </Task>
                <div className={taskClasses.buttons}>
                    <Button onClick={() => changeTaskHandler(task.id)}>Complete</Button>
                    <Button onClick={() => handleEditClick(task.id)}>Edit</Button>
                    <Button onClick={() => deleteHandler(task.id)}>Delete</Button>
                </div>
            </div>
        )
        :
        <h2>Nothing to do yet!</h2>
    )

    const warning = <span className={classes.warning}>Task should be between 3 and 50 characters long!</span>;

    return (
        <TaskList>
            <h1 className={taskClasses.heading}>Active Tasks</h1>
            <form className={classes.form} onSubmit={submitTaskHandler}>
                <input
                    value={inputValue}
                    onChange={inputChangeHandler}
                    className={classes.input}
                    type="text"
                    name="task"
                    placeholder="Enter Quick Task Here" required
                />
                {showWarning && warning}
                <button className={classes['add-button']} type="submit">+</button>
            </form>
            {tasks}
        </TaskList>
    );
};

export default HomePage;