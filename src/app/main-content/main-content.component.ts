import { Component } from '@angular/core';
import { landingPageComponent } from './landing-page/landingPage.component';
import { WhatIsBosselnComponent } from './what-is-bosseln/what-is-bosseln.component';
import { TeamsComponent } from './teams/teams.component';
import { CommonModule } from '@angular/common';
import { StartscreenComponent } from './startscreen/startscreen.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [landingPageComponent,WhatIsBosselnComponent,TeamsComponent,CommonModule, StartscreenComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
