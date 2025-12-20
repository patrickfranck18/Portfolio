import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  standalone: true,
  imports: [
      CommonModule, 
      IonicModule
    ],
  styleUrls: ['./formation.component.css']
})
export class FormationComponent {

}
