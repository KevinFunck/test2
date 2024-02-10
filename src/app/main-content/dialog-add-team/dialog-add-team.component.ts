import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-team',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './dialog-add-team.component.html',
  styleUrl: './dialog-add-team.component.scss'
})
export class DialogAddTeamComponent {

  constructor(public dialogRef: MatDialogRef<DialogAddTeamComponent>) {}

  close() {
    this.dialogRef.close(DialogAddTeamComponent);
  }

}
