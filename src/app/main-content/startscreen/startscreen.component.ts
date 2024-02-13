import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent {

  constructor() {}

  start() {
    document.getElementById('startscreen')?.classList.add('d-none');
  }

}
