import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.css'
})
export class ThemeToggleComponent {

  isDarkMode = false
  @Output() themeChanged = new EventEmitter<boolean>()

  constructor() {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      this.isDarkMode = true
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode
    this.themeChanged.emit(this.isDarkMode)
  }
}
