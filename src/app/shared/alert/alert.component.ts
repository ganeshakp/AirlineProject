import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
<<<<<<< HEAD
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() message?: string;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

}
=======
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
    @Input() message?: string;
    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }
}
>>>>>>> 997f8ec91f9e1cbd54fdc4920c39ca44f314f432
