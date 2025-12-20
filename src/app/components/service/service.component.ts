import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  standalone: true,
  imports: [
    CommonModule, 
    IonicModule
  ],
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {

}
