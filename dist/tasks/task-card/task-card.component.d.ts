import { Task } from '../task';
import { TaskHistoryComponent } from '../task-history/task-history.component';
export declare class TaskCardComponent {
    task: Task;
    modal: TaskHistoryComponent;
    deleteTask(taskId: number): void;
    editTask(task: Task): void;
    taskInfo(taskId: number): void;
    moveBack(task: Task): void;
    moveForward(task: Task): void;
}
