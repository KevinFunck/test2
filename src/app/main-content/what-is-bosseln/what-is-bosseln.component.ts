import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddTeamComponent } from '../dialog-add-team/dialog-add-team.component';

@Component({
  selector: 'app-what-is-bosseln',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './what-is-bosseln.component.html',
  styleUrl: './what-is-bosseln.component.scss'
})
export class WhatIsBosselnComponent {

  constructor(public dialog: MatDialog) {}


  openAddTeam() {
    this.dialog.open(DialogAddTeamComponent);
    //document.getElementById('bosselntext')?.classList.add(d-none);
  }




}
