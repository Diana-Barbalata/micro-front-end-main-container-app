import {useState} from 'react'
import './App.css'
import TaskForm from "./components/TaskForm.tsx";
import {Task} from "./types.ts";
import TaskList from "./components/TaskList.tsx";

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
          <h1>Task Management (Monolith)</h1>
          <TaskForm onAddTask={addTask} />
          <TaskList
              tasks={tasks}
              onToggleComplete={toggleComplete}
              onDeleteTask={deleteTask}
          />
      </div>
  )
}

export default App
