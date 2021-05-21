import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { AdminAboutMeComponent } from './components/admin-about-me/admin-about-me.component';
import { AdminMessagesComponent } from './components/admin-messages/admin-messages.component';
import { AdminSkillsListComponent } from './components/admin-skills-list/admin-skills-list.component';
import { AdminToolsListComponent } from './components/admin-tools-list/admin-tools-list.component';
import { FormModalComponent } from './components/form-modal/form-modal.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminProjectsListComponent } from './components/admin-projects-list/admin-projects-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    AuthPageComponent,
    MessagesPageComponent,
    AdminAboutMeComponent,
    AdminMessagesComponent,
    AdminSkillsListComponent,
    AdminToolsListComponent,
    FormModalComponent,
    HeaderComponent,
    AdminProjectsListComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
