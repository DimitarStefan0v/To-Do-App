export const updateStorage = (tasksArr) => {
    if (tasksArr.length > 0) {
        localStorage.setItem('tasks', JSON.stringify(tasksArr));
    }
};

export const readStorage = () => {
    let tasks = localStorage.getItem('tasks');

    if (!tasks) {
        localStorage.setItem('tasks', JSON.stringify([]));
    }

    return JSON.parse(tasks);
};
