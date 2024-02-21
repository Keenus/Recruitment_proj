import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {

  @Input() isMainPage: boolean = false;

  name: string = '';
  email: string = '';
  message: string = '';

  sendMessage() {
    this.clearForm();
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }


}
