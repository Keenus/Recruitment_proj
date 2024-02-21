import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-arrange-training-section',
  templateUrl: './arrange-training-section.component.html',
  styleUrls: ['./arrange-training-section.component.scss'],
})
export class ArrangeTrainingSectionComponent {

  today = new Date();
  isSend: boolean = false;
  isFormValid: boolean = false;

  trainingForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    date: new FormControl(this.today),
  });

  ngOnInit() {
    this.trainingForm.valueChanges.subscribe((value) => {
      this.isFormValid = this.trainingForm.valid;
    });
  }


  onSubmit() {
    if (this.trainingForm.invalid) {
      return;
    }
    this.trainingForm.reset();
    this.isSend = true;
  }

  clearForm() {
    this.trainingForm.reset();
  }
}
