import { Component } from '@angular/core';
import { landingPageComponent } from './landing-page/landingPage.component';
import { WhatIsBosselnComponent } from './what-is-bosseln/what-is-bosseln.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [landingPageComponent,WhatIsBosselnComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
