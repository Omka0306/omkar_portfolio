import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {

  contactForm = {
    name: "",
    email: "",
    message: "",
  }

  onSubmit() {
    console.log("Form submitted:", this.contactForm)
    // Here you would typically send the form data to a backend service
    // Reset form after submission
    this.contactForm = {
      name: "",
      email: "",
      message: "",
    }
    alert("Thank you for your message! I will get back to you soon.")
  }

}
