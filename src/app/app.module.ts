import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './portfolio/components/header/header.component';
import { AboutComponent } from './portfolio/components/about/about.component';
import { ExperienceComponent } from './portfolio/components/experience/experience.component';
import { EducationComponent } from './portfolio/components/education/education.component';
import { SkillComponent } from './portfolio/components/skill/skill.component';
import { ProjectComponent } from './portfolio/components/project/project.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillComponent,
    ProjectComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
