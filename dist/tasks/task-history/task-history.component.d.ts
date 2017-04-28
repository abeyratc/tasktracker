import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { Task } from '../task';
export declare class TaskHistoryComponent {
    task: Task;
    note: string;
    message: string;
    modal: ModalComponent;
    open(): void;
    cancel(): void;
    log(): void;
    private reset();
}
