import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  formOutputs: any[] = []; // output class of the form

  firstName: string = '';
  lastName: string = '';
  gender: string = '';
  position: string = '';
  password: string = '';
  confirmPassword: string = '';

  // constructor() {}

  submitForm(form: NgForm) {
    console.log(form.value);
    this.formOutputs.push(form.value);
    // Save form outputs to local storage
    localStorage.setItem('formOutputs', JSON.stringify(this.formOutputs));
  }

  ngOnInit() {
    // Retrieve form outputs from local storage
    var storedFormOutputs = JSON.parse(
      localStorage.getItem('formOutputs') || '[]'
    );
    if (storedFormOutputs) {
      this.formOutputs = storedFormOutputs;
    }
  }
}
