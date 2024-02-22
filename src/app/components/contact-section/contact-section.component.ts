import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {

  @Input() isMainPage: boolean = false;

  contactForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });
  isFormValid: boolean = false;
  isSend: boolean = false

  ngOnInit() {
    this.contactForm.valueChanges.subscribe((value) => {
      this.isFormValid = this.contactForm.valid;
    });
  }

  sendMessage() {
    if(this.contactForm.valid) {
      this.isSend = true;
      this.clearForm();
    }
  }

  clearForm() {
    this.contactForm.reset();
  }


}
