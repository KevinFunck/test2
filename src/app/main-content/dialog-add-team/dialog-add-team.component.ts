import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { TeamServiceService } from '../../Service/team-service.service';



@Component({
  selector: 'app-dialog-add-team',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule,FormsModule],
  templateUrl: './dialog-add-team.component.html',
  styleUrl: './dialog-add-team.component.scss'
})
export class DialogAddTeamComponent {
  teamName:string = '';
  id:string = '';
  //openTeam = document.getElementById('teamContent')?.classList.remove('d-none');
  


  constructor(private teamService: TeamServiceService,public dialogRef: MatDialogRef<DialogAddTeamComponent>) {}

  close() {
    this.dialogRef.close(DialogAddTeamComponent);
    document.getElementById('text')?.classList.remove('d-none');
  }

  saveTeam() {
    this.teamService.team.teamName = this.teamName;
    this.teamService.team.id = this.id;
    this.teamService.saveTeam();
    this.dialogRef.close(DialogAddTeamComponent);
    this.controllFinish();
  }

  controllFinish() {
    let count:number = this.teamService.teamList.length;

    if(0 < count) {
      document.getElementById('finish')?.classList.remove('d-none');
      
    }
  }

}
