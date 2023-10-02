import classes from './Task.module.css';

const Task = (props) => {
    return (
        <div className={classes.task}>{props.children}</div>
    );
};

export default Task;