import { Component, ViewChild, Input} from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { Task } from '../task';


@Component({
    moduleId: module.id,
	selector: 'task-history',
	templateUrl: 'task-history.component.html',
	styleUrls: ['task-history.component.css']
})

export class TaskHistoryComponent {

    @Input()
    task: Task;
    @Input()
    note: string;
	message: string;

	@ViewChild(ModalComponent)
    modal: ModalComponent;
  
    open(): void {
        this.note = '';
        this.modal.open();
    }

    cancel(): void {
        this.reset();
        this.modal.dismiss();
    }

    log(): void {
       console.log(this.note)
       this.message = '';
       if(this.note) {
        //TODO: save
        this.modal.close(); 
        this.note = null;
       } else {
         this.message = 'Note is empty. Either cancel or enter a new note.';
       }
    }

    private reset() {
        this.message = '';
        this.note = '';
    }
}