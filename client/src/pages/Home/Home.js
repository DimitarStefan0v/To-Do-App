const HomePage = (props) => {

    const changeTaskHandler = (id) => {
        props.changeTaskProgressHandler(id);
    };

    return (
        <>
            <h1>Home Page</h1>
            {props.tasks.map(task =>
                <div key={task.id}>
                    <input type="checkbox" onChange={() => changeTaskHandler(task.id)} />
                    <p>{task.description}</p>
                </div>
            )}
        </>
    );
};

export default HomePage;