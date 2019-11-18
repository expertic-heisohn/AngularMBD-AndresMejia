import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
})
export class EventComponent {
    @Input() value: any;
    handleDeleteClick() {
      console.log("Delete button clicked!");
    }
  }
  