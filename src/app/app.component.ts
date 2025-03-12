import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'protfolio';
  currentYear = new Date().getFullYear()
  isDarkMode = false

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      this.isDarkMode = true
    }
  }

  toggleTheme(isDark: boolean) {
    this.isDarkMode = isDark
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }
}
