import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactinformationComponent } from './contactinformation/contactinformation.component';
import { EducationdetailsComponent } from './educationdetails/educationdetails.component';
import { TechnicalskillsComponent } from './technicalskills/technicalskills.component';
import { AcadamicactivityComponent } from './acadamicactivity/acadamicactivity.component';
import { PersonalinformationComponent } from './personalinformation/personalinformation.component';


const appRoutes: Routes = [
  { path: 'contact', component: ContactinformationComponent },
  { path: 'ed', component: EducationdetailsComponent },
  { path: 'ts', component: TechnicalskillsComponent },
  { path: 'acat', component: AcadamicactivityComponent},
  { path: 'info', component: PersonalinformationComponent},
  
  
  
]
@NgModule({
  declarations: [
    AppComponent,
    ContactinformationComponent,
    EducationdetailsComponent,
    TechnicalskillsComponent,
    AcadamicactivityComponent,
    PersonalinformationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
