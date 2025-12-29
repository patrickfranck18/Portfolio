import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IonicModule]
})
export class HeaderComponent {

status = false;
isScrolled = false;
addToggle()
{
  this.status = !this.status;       
}
@HostListener('window:scroll', [])
onWindowScroll() {
  const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  this.isScrolled = scrollOffset > 50;
}

scrollTo(event: Event, elementId: string) {
  event.preventDefault(); // Empêche le rechargement de page
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}
}