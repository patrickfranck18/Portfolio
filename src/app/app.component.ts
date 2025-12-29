import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormationComponent } from './components/formation/formation.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, 
    FooterComponent, 
    HomeComponent, 
    PortfolioComponent,
    FormationComponent,
    ServiceComponent,
    ContactComponent
  ], 
  template: `
    <app-header></app-header>
    
  <main>
  <app-home id="home"></app-home>
  <app-portfolio id="portfolio"></app-portfolio>
  <app-formation id="formation"></app-formation>
  <app-service id="service"></app-service>
  <app-contact id="contact"></app-contact>
  </main>

    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'Angfolio2'; 
}