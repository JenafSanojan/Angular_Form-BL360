import { Routes } from '@angular/router';
import { FormComponent } from './form/form.component'; // Import your FormComponent here

export const routes: Routes = [
  { path: '', redirectTo: '/form', pathMatch: 'full' }, // Redirect to the form component on the root path
  { path: 'form', component: FormComponent },
];
