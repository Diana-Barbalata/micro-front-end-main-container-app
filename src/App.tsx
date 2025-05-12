import {lazy, Suspense, useState} from 'react';
import {Task} from "./types.ts";

const TaskList = lazy(() =>
    // @ts-expect-error known issue with module resolution
    import('taskListApp/TaskList')
);
const TaskForm = lazy(() =>
    // @ts-expect-error known issue with module resolution
    import('taskFormApp/TaskForm')
);

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (newTask: string) => {
        setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    };

    const toggleComplete = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            <h1>Task Management (Container)</h1>
            <Suspense fallback={<div>Loading Task Form...</div>}>
                <TaskForm onAddTask={addTask} containerId="task-form-container" />
            </Suspense>
            <Suspense fallback={<div>Loading Task List...</div>}>
                <TaskList
                    tasks={tasks}
                    onToggleComplete={toggleComplete}
                    onDeleteTask={deleteTask}
                    containerId="task-list-container"
                />
            </Suspense>
        </div>
    );
}

export default App;