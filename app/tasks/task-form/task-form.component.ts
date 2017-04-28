import { Component, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';


@Component({
    moduleId: module.id,
    selector: 'task-form',
    templateUrl: 'task-form.component.html'
})

export class TaskFormComponent {
    taskType: string[] = ['Recurring', 'Non-Recurring'];

    @ViewChild(ModalComponent)
    modal: ModalComponent;

    close(): void {
        this.modal.close();
    }
    
    open(): void {
        this.modal.open();
    }
}