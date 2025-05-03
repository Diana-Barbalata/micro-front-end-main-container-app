import TaskItem from './TaskItem.tsx';
import {Task} from "../types.ts";
import {FC} from "react";

type Props = {
    tasks: Task[];
    onToggleComplete: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

const TaskList: FC<Props> = ({ tasks, onToggleComplete, onDeleteTask })=>{
    return (
        <ul>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    );
}

export default TaskList;
