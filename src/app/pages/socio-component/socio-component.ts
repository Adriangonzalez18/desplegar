import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-socio-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './socio-component.html',
  styleUrl: './socio-component.css',
})
export class SocioComponent {

  socioForm: FormGroup;

  formasPago = ['Bizum', 'Transferencia', 'PayPal'];

  constructor(private fb: FormBuilder) {
    this.socioForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      dni: ['', Validators.required],
      domicilio: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      formaPago: ['', Validators.required],
      aceptaPoliticas: [false, Validators.requiredTrue]
    });
  }

  enviar() {
    if (this.socioForm.valid) {
      console.log('Datos enviados:', this.socioForm.value);
    } else {
      this.socioForm.markAllAsTouched();
    }
  }

  redirigirPago() {
  window.location.href = "https://buy.stripe.com/test_abc123";
}
}
