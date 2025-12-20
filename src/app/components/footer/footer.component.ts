import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  standalone: true,
  imports: [
      CommonModule, 
      IonicModule
    ],
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

}
