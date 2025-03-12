import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible'); // Trigger animation
        }
      });
    }, { threshold: 0.2 });

    // Apply animations to About & Skills sections
    document.querySelectorAll('.about-animate, .skills-animate').forEach(el => {
      observer.observe(el);
    });
  }
}
