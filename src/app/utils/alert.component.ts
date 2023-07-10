import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() error: string = '';
  @Input() type: string = 'danger';

  get alertClass(): string {
    return 'alert alert-' + this.type;
  }
}
