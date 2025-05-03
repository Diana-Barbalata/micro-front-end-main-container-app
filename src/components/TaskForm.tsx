import {FC, useState} from 'react';

type Props = {
    onAddTask: (task: string) => void;
}

const TaskForm: FC<Props> = ({ onAddTask })=> {
    const [newTask, setNewTask] = useState('');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (newTask.trim()) {
            onAddTask(newTask);
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
    placeholder="Add new task"
    />
    <button type="submit">Add Task</button>
    </form>
);
}

export default TaskForm;
