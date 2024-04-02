import { Component } from '@angular/core';
import { TeamServiceService } from '../../Service/team-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'app-teams',
  standalone: true,
  imports: [FormsModule,CommonModule, MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './teams.component.html',
  styleUrl: './teams.component.scss'
})
export class TeamsComponent {
  

  constructor(private teamService: TeamServiceService,public dialog: MatDialog  ) {
 
  }

  getlist() {
    return this.teamService.teamList;
  }
  
  getUserList( teamId: string  ) {
    // Create new user list
    let users = [];

    for( let i = 0; i < this.teamService.userList.length; i++ ){
      let newUser = this.teamService.userList[i];
      let userTeamid = newUser.teamId;
      if( teamId == userTeamid )
        users.push( this.teamService.userList[i] );
    }
    
    return users;
  }

  openAddUserDialog(teamId: string,) {
    console.log(teamId);
    const dialog = this.dialog.open(DialogAddUserComponent);
    dialog.componentInstance.teamId = teamId; 
  }

  finishTheTeamName() {
   document.getElementById('btnAndText')?.classList.add('d-none');
   document.getElementById('finish')?.classList.add('d-none');
   document.getElementById('addUserBtn')?.classList.remove('d-none');
  }

  finishAddPlayer() {
    document.getElementById('addAplayer')?.classList.add('d-none');
  }

  start() {
    document.querySelector('.team-container')?.classList.add('d-none');
    document.getElementById('start')?.classList.add('d-none');
  }
  

}
