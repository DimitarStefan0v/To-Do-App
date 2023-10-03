export const updateStorage = (tasksArr) => {
    localStorage.setItem('tasks', JSON.stringify(tasksArr));
};

export const readStorage = () => {
    let tasks = localStorage.getItem('tasks');

    if (!tasks) {
        localStorage.setItem('tasks', JSON.stringify([]));
    }

    return JSON.parse(tasks);
};