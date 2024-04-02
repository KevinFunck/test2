import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddTeamComponent } from '../dialog-add-team/dialog-add-team.component';
import { TeamServiceService } from '../../Service/team-service.service';

@Component({
  selector: 'app-what-is-bosseln',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './what-is-bosseln.component.html',
  styleUrl: './what-is-bosseln.component.scss'
})
export class WhatIsBosselnComponent {

  constructor(public dialog: MatDialog, public teamService: TeamServiceService) {}


  openAddTeam() {
    this.dialog.open(DialogAddTeamComponent);
    document.getElementById('text')?.classList.add('d-none');
  }

  startTheGame() {
    let teamLength = this.teamService.teamList.length;
    let userLength = this.teamService.userList.length;

    if(teamLength > 1 && userLength > 1) {
      document.getElementById('started')?.classList.add('d-none');
      document.getElementById('finish_add')?.classList.add('d-none');
      const me = document.querySelectorAll('.open-add-player');
  
      me.forEach(e => {
        e.classList.add('d-none');
      });
   } else {
     window.alert("You must creat 2 teams and you need 2 players");
   }
  }




}
