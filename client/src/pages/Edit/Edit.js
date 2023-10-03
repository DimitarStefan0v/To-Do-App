import { useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import classes from './Edit.module.css';

const EditPage = (props) => {
    const params = useParams();
    const navigate = useNavigate();
    const taskId = params.taskId;

    const [showWarning, setShowWarning] = useState(false);
    const [input, setInput] = useState(props.tasks.filter(x => x.id === taskId).map(x => x.description));


    const submitHandler = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const taskDescription = formData.get('desciption').trim();
        console.log(taskDescription);

        if (taskDescription.length < 3 || taskDescription.length > 50) {
            setShowWarning(true);
            return;
        }

        setShowWarning(false);
        setInput('');
        props.editTaskHandler(taskId, taskDescription);
        return navigate('/');
    };

    const changeHandler = (ev) => {
        setInput(ev.target.value);
    };

    const warning = <span className={classes.warning}>Task should be between 3 and 50 characters long!</span>;

    return (
        <div className={classes.wrapper}>
            <form className={classes.form} onSubmit={submitHandler}>
                <input type="text" className={classes.input} name="desciption" value={input} onChange={changeHandler} />
                <button type="submit" className={classes.button}>Edit</button>
                {showWarning && warning}
            </form>
        </div>
    );
};

export default EditPage;