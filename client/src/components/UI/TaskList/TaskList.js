import classes from './TaskList.module.css';

const TaskList = (props) => {
    return (
        <div className={classes.wrapper}>{props.children}</div>
    );
};

export default TaskList;