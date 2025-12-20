import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [
      CommonModule, 
      IonicModule,
      FormsModule,          
    ReactiveFormsModule
    ],
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  contactForm!: FormGroup;
  isLoading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      from_name: ['', [Validators.required]],
      from_email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  async send() {
    if (this.contactForm.invalid) {
      this.errorMessage = 'Veuillez remplir tous les champs correctement.';
      return;
    }

    this.isLoading = true;
    this.successMessage = '';
    this.errorMessage = '';

    try {
      const response = await emailjs.send(
        environment.emailjs.serviceId,      
        environment.emailjs.templateId,     
        {
          from_name: this.contactForm.value.from_name,
          from_email: this.contactForm.value.from_email,
          message: this.contactForm.value.message
        },
        environment.emailjs.publicKey        
      );

      console.log('Email envoyé !', response);
      this.successMessage = 'Message envoyé avec succès ! Je vous répondrai bientôt.';
      
      
      this.contactForm.reset();
      
    } catch (error) {
      console.error('Erreur:', error);
      this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
    } finally {
      this.isLoading = false;
    }
  }
}