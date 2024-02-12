import { Injectable, inject } from '@angular/core';
import { Team } from '../../Models/team.class';
import {Firestore, addDoc, collection, onSnapshot } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  firestore: Firestore = inject(Firestore);
  teamList: any = [];
  team: Team = new Team();
  unsubList;
  db;

  constructor() { 
    this.unsubList = this.teamList();
    this.db = collection(this.firestore, 'teams');
  }

  subTeamList() {
    return onSnapshot(this.getTeamRef(), (list) => {
      this.teamList = [];
      list.forEach(element => {
        this.teamList.push(this.setTeamObject(element.data(), element.id))
      })
    })

  }

  getTeamRef() {
    return collection(this.firestore, 'teams');
  }

  setTeamObject(obj: any, id:string) {
    return {
      id: id || "",
      name: obj.name || "",
    }
  }

  saveTeam() {
    addDoc(this.db, this.team.toJSON())
  }


}
