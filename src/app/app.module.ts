import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ExperienceSectionComponent } from './components/experience-section/experience-section.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { SkillBadgeComponent } from './components/skill-badge/skill-badge.component';
import { SkillSectionComponent } from './components/skill-section/skill-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';
import { ThemeToggleComponent } from './components/theme-toggle/theme-toggle.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutSectionComponent,
    ContactSectionComponent,
    ExperienceItemComponent,
    ExperienceSectionComponent,
    HeroSectionComponent,
    ProjectCardComponent,
    ProjectSectionComponent,
    SkillBadgeComponent,
    SkillSectionComponent,
    TestimonialsSectionComponent,
    ThemeToggleComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
