import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { TeamServiceService } from '../../Service/team-service.service';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogAddTeamComponent } from '../dialog-add-team/dialog-add-team.component';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [MatButtonModule, MatInputModule, MatCardModule, FormsModule],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  playerName:string = '';
  playerId:string = '';
  teamId:string = '';
  //id = this.teamService.team.id;

  constructor(public teamService: TeamServiceService, public dialogRef: MatDialogRef<DialogAddTeamComponent>) {}

  saveUser() {
    this.teamService.user.PlayerName = this.playerName;
    this.teamService.user.playerId = this.playerId;
    this.teamService.user.teamId = this.teamId;
    this.teamService.saveUser();

    console.log( "this.teamService.user", this.teamService.user);
    console.log( "this.teamService.team", this.teamService.team);
    console.log( "this.teamService.teamList", this.teamService.teamList);
    console.log( "this.teamService.userList", this.teamService.userList);

    //this.teamService.getTeamByPlayerId(); 
    this.closeUser();
    
  }

  closeUser() {
    this.dialogRef.close(DialogAddUserComponent);
  }



}
