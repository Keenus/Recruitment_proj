import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  sendMessage() {
    console.log('Name: ' + this.name);
    console.log('Email: ' + this.email);
    console.log('Message: ' + this.message);
    this.clearForm();
  }

  clearForm() {
    this.name = '';
    this.email = '';
    this.message = '';
  }

  @Input() isMainPage: boolean = false;

}
